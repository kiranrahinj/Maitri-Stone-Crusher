import React from 'react'
import CustomerFilter from './HOC/CustomerFilter'
function PaymentMode() {
    const customersData = [
        {
          name: "Alice Johnson",
          totalAmount: "$1500", 
          location:"Manchar",
          receivedAmount: "$1000",
          remainingAmount: "$500",
          paymentMode: "Bank Transfer",
        },
        {
          name: "Bob Williams",
          totalAmount: "$2000",
          location:"Avasari",
          receivedAmount: "$1500",
          remainingAmount: "$500",
          paymentMode: "Credit Card",
        },
        // Add more customer objects as needed
      ];
      return (
        <div>
          <CustomerFilter 
            orders={customersData} 
            filterBy="paymentMode" 
            filterLabel="Payment Mode" 
            tableHeaders={[
              "Sr. No.",
              "Name",
              "Location",
              "totalAmount",
              "receivedAmount",
              "remainingAmount",
              "paymentMode"
            ]}
          />
        </div>
      );
}

export default PaymentMode
