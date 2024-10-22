import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomerOutput from './CustomerOutput'; // Ensure you import the correct component

const CustomerFilter = ({ orders, filterBy, filterLabel, tableHeaders }) => {
  const [filterValue, setFilterValue] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    filterOrders(); // Filter orders when the form is submitted
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setFilterValue(input);
    input ? updateSuggestions(input) : clearSuggestions(); // Update suggestions or clear them based on input
  };

  const filterOrders = () => {
    const matchingOrders = orders.filter(order => {
      const value = order[filterBy];
      return typeof value === 'string' && value.toLowerCase().includes(filterValue.toLowerCase());
    });
    setFilteredOrders(matchingOrders); // Update state with matching orders
  };

  const updateSuggestions = (input) => {
    const matchingSuggestions = orders
      .filter(order => {
        const value = order[filterBy];
        return typeof value === 'string' && value.toLowerCase().includes(input.toLowerCase());
      })
      .map(order => order[filterBy]);

    const uniqueSuggestions = [...new Set(matchingSuggestions)]; // Ensure suggestions are unique
    setSuggestions(uniqueSuggestions);
  };

  const clearSuggestions = () => {
    setSuggestions([]); // Clear suggestions
  };

  const handleSuggestionClick = (suggestion) => {
    setFilterValue(suggestion); // Set filter value to the clicked suggestion
    clearSuggestions(); // Clear suggestions after selecting
    filterOrders(); // Filter orders immediately after selecting a suggestion
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get Order by {filterLabel}</h1>

        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label htmlFor={filterBy} className="block text-gray-700 font-semibold">{filterLabel}</label>
            <input
              id={filterBy}
              type="text"
              value={filterValue}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
              placeholder={`Enter ${filterLabel.toLowerCase()}`}
            />
            {suggestions.length > 0 && (
              <ul className="bg-white border border-gray-300 mt-2 rounded-lg shadow-md z-10">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="p-2 cursor-pointer hover:bg-blue-100"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition duration-200"
          >
            Search Orders
          </button>
        </form>
      </div>
      {/* Display filtered orders in table format */}
      {filteredOrders.length > 0 ? (
        <CustomerOutput ordersData={filteredOrders} tableHeaders={tableHeaders} />
      ) : filterValue && (
        <p className="text-red-500 mt-4 text-center">No orders found for "{filterValue}".</p>
      )}
    </div>
  );
};

CustomerFilter.propTypes = {
  orders: PropTypes.array.isRequired,
  filterBy: PropTypes.string.isRequired, // Field to filter by
  filterLabel: PropTypes.string.isRequired, // Label for the input
  tableHeaders: PropTypes.array.isRequired, // Headers for the table
};

export default CustomerFilter;
