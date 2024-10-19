import React from 'react'
import OrderFilter from './HOC/OrderFilter';

function GetByPaymentStatus() {
  const orders = [
    { id: 1, name: 'John Doe', location: 'New York', orderStatus: 'Delivered', date: '2024-10-10', materialType: 'Plastic', rate: 120, paymentStatus: 'Paid', receivedAmount: 120, receivedTo: 'Pinu', fillingRate: '100%', fillingBy: 'Yogi', createdBy: 'Admin' },
    { id: 2, name: 'Jane Smith', location: 'Los Angeles', orderStatus: 'Pending', date: '2024-10-12', materialType: 'Metal', rate: 80, paymentStatus: 'Unpaid', receivedAmount: 0, receivedTo: 'Yogi', fillingRate: '0%', fillingBy: 'Satyam', createdBy: 'Admin' },
    { id: 3, name: 'John Doe', location: 'Chicago', orderStatus: 'Shipped', date: '2024-10-15', materialType: 'Glass', rate: 50, paymentStatus: 'Credit', receivedAmount: 0, receivedTo: 'Other', fillingRate: '50%', fillingBy: 'Pinu', createdBy: 'Admin' },
    { id: 4, name: 'Jake Williams', location: 'Houston', orderStatus: 'Processing', date: '2024-10-08', materialType: 'Wood', rate: 60, paymentStatus: 'Paid', receivedAmount: 60, receivedTo: 'Satyam', fillingRate: '100%', fillingBy: 'Yogi', createdBy: 'Admin' },
    // ...additional orders
  ];
    
      return (
        <div>
          <OrderFilter 
            orders={orders} 
            filterBy="paymentStatus" 
            filterLabel="Payment Status" 
            tableHeaders={[
              "Sr. No.",
              "Name",
              "Location",
              "Status",
              "Date",
              "Material Type",
              "Rate",
              "Payment Status",
              "Received Amount",
              "Received To",
              "Filling Rate",
              "Filling By",
              "Order Created By",
            ]}
          />
        </div>
      );
}

export default GetByPaymentStatus;
