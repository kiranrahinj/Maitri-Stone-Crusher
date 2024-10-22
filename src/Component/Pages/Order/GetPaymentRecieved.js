import React from 'react'
import OrderFilter from './HOC/OrderFilter';
import { useSelector } from 'react-redux';

function GetPaymentRecieved() {
  const {orders}=useSelector((state)=>state.orders);
    
      return (
        <div>
          <OrderFilter 
            orders={orders} 
            filterBy="recievedTo" 
            filterLabel="Payment Received To" 
          />
        </div>
      );
}

export default GetPaymentRecieved;
