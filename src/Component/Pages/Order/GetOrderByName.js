import React from 'react';
import PropTypes from 'prop-types';
import OrderFilter from './HOC/OrderFilter';
import { useSelector } from 'react-redux';

const GetOrderByName = () => {
  
  const {orders}=useSelector((state)=>state.orders);
  
  return (
    <div>
      <OrderFilter 
        orders={orders} 
        filterBy="name" 
        filterLabel="Customer Name" 
      />
    </div>
  );
   
};

GetOrderByName.propTypes = {
  orders: PropTypes.array, // Optional: If you want to make orders prop customizable
};

export default GetOrderByName;
