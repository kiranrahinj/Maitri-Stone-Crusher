import React from 'react'
import OrderFilter from './HOC/OrderFilter';
import { useSelector } from 'react-redux';

function GetByPaymentStatus() {
  const {orders}=useSelector((state)=>state.orders);
    
      return (
        <div>
          <OrderFilter 
            orders={orders} 
            filterBy="paymentStatus" 
            filterLabel="Payment Status" 
          />
        </div>
      );
}

export default GetByPaymentStatus;
