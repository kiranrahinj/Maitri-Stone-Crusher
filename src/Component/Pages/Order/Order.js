import React from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const ordersData = [
    {
      name: "John Does",
      location: "New York",
      status: "Completed",
      date: "2024-10-18",
      materialType: "Steel",
      rate: "$500",
      paymentStatus: "Paid",
      receivedAmount: "$500",
      receivedTo: "Bank Transfer",
      filling: "50%",
      fillingBy: "Jane Smith",
      orderCreatedBy: "Admin",
    },
    {
      name: "Jane Doe",
      location: "California",
      status: "Pending",
      date: "2024-10-19",
      materialType: "Iron",
      rate: "$300",
      paymentStatus: "Unpaid",
      receivedAmount: "$0",
      receivedTo: "N/A",
      filling: "80%",
      fillingBy: "John Smith",
      orderCreatedBy: "Admin",
    },
    // Add more orders as needed
  ];
   
  const navigate=useNavigate();
  const handleEdit=(id)=>{  
    navigate(`/update-order/${id}`) 
  }

  return (
    <div className="container mx-auto px-4 mt-10">
      <h2 className="bg-gray-700 text-center text-white font-bold p-4 text-2xl mb-6 rounded-md shadow-md">
        All Orders
      </h2>

      <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-200px)] shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full table-auto border-collapse bg-white">
          <thead className="sticky top-0 bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Sr. No.</th>
              <th className="px-4 py-2 text-left font-semibold">Name</th>
              <th className="px-4 py-2 text-left font-semibold">Location</th>
              <th className="px-4 py-2 text-left font-semibold">Status</th>
              <th className="px-4 py-2 text-left font-semibold">Date</th>
              <th className="px-4 py-2 text-left font-semibold">Material Type</th>
              <th className="px-4 py-2 text-left font-semibold">Rate</th>
              <th className="px-4 py-2 text-left font-semibold">Payment Status</th>
              <th className="px-4 py-2 text-left font-semibold">Received Amount</th>
              <th className="px-4 py-2 text-left font-semibold">Received To</th>
              <th className="px-4 py-2 text-left font-semibold">Filling Rate</th>
              <th className="px-4 py-2 text-left font-semibold">Filling By</th>
              <th className="px-4 py-2 text-left font-semibold">Order Created By</th>
              <th className="px-4 py-2 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {ordersData.map((order, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 transition duration-300 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{order.name}</td>
                <td className="px-4 py-2">{order.location}</td>
                <td
                  className={`px-4 py-2 ${
                    order.status === "Completed" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"
                  }`}
                >
                  {order.status}
                </td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">{order.materialType}</td>
                <td className="px-4 py-2">{order.rate}</td>
                <td className="px-4 py-2">{order.paymentStatus}</td>
                <td className="px-4 py-2">{order.receivedAmount}</td>
                <td className="px-4 py-2">{order.receivedTo}</td>
                <td className="px-4 py-2">{order.filling}</td>
                <td className="px-4 py-2">{order.fillingBy}</td>
                <td className="px-4 py-2">{order.orderCreatedBy}</td>
                <td className="px-4 py-2"><button className="bg-green-600 w-20 p-1 rounded-xl text-center text-white" onClick={()=>handleEdit(index)}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
