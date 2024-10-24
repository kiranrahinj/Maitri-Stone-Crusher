import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import OrderOutput from './OrderOutput'

const OrderFilter = ({ orders, filterBy, filterLabel}) => {
  const [order, setOrder] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(()=>{
    const token=localStorage.getItem("token");
  if(!!token){
    setOrder(orders);
  }
  },[])
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (filterValue) {
      filterOrders();
    }
  };
  
  const handleInputChange = (e) => {
    const input = e.target.value;
    setFilterValue(input);
  
    if (input) {
      updateSuggestions(input);
    } else {
      clearSuggestions();
    }
  };
  
  const filterOrders = () => {
    if (!filterValue) return; // Avoid filtering when filterValue is empty
  
    const matchingOrders = order.filter(order =>
      order[filterBy]?.toLowerCase().includes(filterValue.toLowerCase()) // Using optional chaining in case filterBy is not present
    );
    setFilteredOrders(matchingOrders);
  };
  
  const updateSuggestions = (input) => {
    const matchingSuggestions = order
      .filter(order => order[filterBy]?.toLowerCase().includes(input.toLowerCase()))
      .map(order => order[filterBy]);
  
    const uniqueSuggestions = [...new Set(matchingSuggestions)];
    setSuggestions(uniqueSuggestions);
  };
  
  const clearSuggestions = () => {
    setSuggestions([]);
  };
  
  const handleSuggestionClick = (suggestion) => {
    setFilterValue(suggestion);
    clearSuggestions(); // Clear suggestions after selecting
    filterOrders(); // Filter order immediately after selecting a suggestion
  };

  // const renderOrderTable = () => (
  //   <div className="mt-6 overflow-x-auto">
  //     <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
  //       <thead className="bg-gray-200">
  //         <tr>
  //           {tableHeaders.map((header, index) => (
  //             <th key={index} className="px-4 py-2 text-left font-semibold">{header}</th>
  //           ))}
  //         </tr>
  //       </thead>
  //       <tbody className="bg-white">
  //         {filteredOrders.map((order, index) => (
  //           <tr key={order.id} className="hover:bg-gray-100 transition duration-200">
  //             {tableHeaders.map((header, index) => (
  //               <td key={index} className="px-4 py-2 border">{order[header.toLowerCase().replace(/ /g, '')]}</td>
  //             ))}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );

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
       {/* Display filtered order in table format */}
       {filteredOrders.length > 0 ? <OrderOutput ordersData={filteredOrders} /> : filterValue && (
          <p className="text-red-500 mt-4 text-center">No order found for "{filterValue}".</p>
        )}
    </div>
  );
};

OrderFilter.propTypes = {
  order: PropTypes.array.isRequired,
  filterBy: PropTypes.string.isRequired, // Field to filter by
  filterLabel: PropTypes.string.isRequired, // Label for the input
  tableHeaders: PropTypes.array.isRequired, // Headers for the table
};

export default OrderFilter;
