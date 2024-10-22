import React from 'react'
import OrderFilter from './HOC/OrderFilter';
import { useSelector } from 'react-redux';

function GetByDate() {
    const {orders}=useSelector((state)=>state.orders);
    
      return (
        <div>
          <OrderFilter 
            orders={orders} 
            filterBy="date" 
            filterLabel="Date" 
          />
        </div>
      );
}

export default GetByDate;
