import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CustomerDetails = () => {
  const customersData=useSelector((state)=>state.customer.customer);
  const navigate=useNavigate();
  
  const handleEdit=(id)=>{  
    navigate(`/update-customer/${id}`) 
  }
  return (
    <div className="container mx-auto px-4 mt-10">
      <h2 className="bg-gray-700 text-center text-white font-bold p-4 text-2xl mb-6 rounded-md shadow-md">
        Customer Details
      </h2>

      {/* Table Container with Scroll */}
      <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-200px)] shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full table-auto border-collapse bg-white">
          <thead className="sticky top-0 bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Sr. No.</th> {/* Sr. No. column */}
              <th className="px-4 py-2 text-left font-semibold">Name</th>
              <th className="px-4 py-2 text-left font-semibold">Total Amount</th>
              <th className="px-4 py-2 text-left font-semibold">Received Amount</th>
              <th className="px-4 py-2 text-left font-semibold">Remaining Amount</th>
              <th className="px-4 py-2 text-left font-semibold">Amount Received To</th>
              <th className="px-4 py-2 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {customersData.map((customer, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 transition duration-300 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-2">{index + 1}</td> {/* Serial Number */}
                <td className="px-4 py-2">{customer.name}</td>
                <td className="px-4 py-2">{customer.totalAmount}</td>
                <td className="px-4 py-2 text-green-600 font-semibold">{customer.receivedAmount}</td>
                <td className="px-4 py-2 text-red-600 font-semibold">{customer.remainingAmount}</td>
                <td className="px-4 py-2">{customer.amountRecievedTo}</td>
                <td className="px-4 py-2"><button className="bg-green-600 w-20 p-1 rounded-xl text-center text-white" onClick={()=>handleEdit(customer.id)}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerDetails;
