import React from 'react'
import OrderFilter from './HOC/OrderFilter';
import { useSelector } from 'react-redux';

function GetByOrderStatus() {
  const {orders}=useSelector((state)=>state.orders);
    
      return (
        <div>
          <OrderFilter
            orders={orders} 
            filterBy="status" 
            filterLabel="Order Status" 
          />
        </div>
      );
}

export default GetByOrderStatus
