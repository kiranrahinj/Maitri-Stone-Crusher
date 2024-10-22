import React from 'react'
import CustomerFilter from './HOC/CustomerFilter'
import { useSelector } from 'react-redux';

function GetByCustomer() {
  const customersData=useSelector((state)=>state.customer.customer);
      return (
        <div>
          <CustomerFilter 
            orders={customersData} 
            filterBy="name" 
            filterLabel="Customer Name" 
            tableHeaders={[
              "Sr. No.",
              "Name",
              "Date",
              "Location",
              "totalAmount",
              "receivedAmount",
              "remainingAmount",
              "amountRecievedTo",
              "Action"
            ]}
          />
        </div>
      );
}

export default GetByCustomer
