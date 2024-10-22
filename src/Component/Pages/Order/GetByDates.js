import React, { useState } from 'react';
import api from "../../Axios/Api"
import OrderOutput from './HOC/OrderOutput';

const GetByDates = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [orders, setOrders] = useState([]);

  const handleSubmit =(e) => {
    e.preventDefault();
    // Handle the date values as needed (e.g., filtering orders)
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);

    const handle=async()=>{
        try{
            const response = await api.get('/user/order/dates', {
                params: {
                  date1: startDate,
                  date2: endDate,
                },
              });
            setOrders(response.data);     
        }
        catch(error){
            console.log(error);
        }
    }
   handle();

  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Select Date Range</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="start-date" className="block text-gray-700 font-semibold">Start Date</label>
            <input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="end-date" className="block text-gray-700 font-semibold">End Date</label>
            <input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
   
     {/* Display filtered orders in table format */}
     {orders.length > 0 ? <OrderOutput ordersData={orders} /> : startDate&& endDate && (
        <p className="text-red-500 mt-4 text-center">No orders found for given dates".</p>
      )}
  </div>
  );
};

export default GetByDates;
