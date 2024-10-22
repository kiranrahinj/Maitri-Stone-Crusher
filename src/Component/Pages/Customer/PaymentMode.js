import React from 'react'
import CustomerFilter from './HOC/CustomerFilter'
import { useSelector } from 'react-redux';

function GetByCustomer() {
  const customersData=useSelector((state)=>state.customer.customer);
      return (
        <div>
          <CustomerFilter 
            orders={customersData} 
            filterBy="amountRecievedTo" 
            filterLabel="Amount Recieved To" 
            tableHeaders={[
              "Sr. No.",
              "Name",
              "Date",
              "Location",
              "totalAmount",
              "receivedAmount",
              "remainingAmount",
              "Amount Recieved To",
              "Action"
            ]}
          />
        </div>
      );
}

export default GetByCustomer
