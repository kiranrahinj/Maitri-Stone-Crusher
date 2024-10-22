import React from 'react'
import OrderFilter from './HOC/OrderFilter';
import { useSelector } from 'react-redux';

function GetFilledBy() {
  const {orders}=useSelector((state)=>state.orders);

    
      return (
        <div>
          <OrderFilter 
            orders={orders} 
            filterBy="fillingBy" 
            filterLabel="Order Filled By" 
          />
        </div>
      );
}

export default GetFilledBy;
