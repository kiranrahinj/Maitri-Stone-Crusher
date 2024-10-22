import React from "react";
import { useNavigate } from "react-router-dom";

const CustomerOutput = ({ordersData,tableHeaders}) => {
  const navigate=useNavigate();
  const handleEdit=(id)=>{  
    navigate(`/update-customer/${id}`) 
  }
  return (
    <div className="container mx-auto mt-10">
    <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-200px)] shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full table-auto border-collapse bg-white">
          <thead className="sticky top-0 bg-gray-700 text-white">
          <tr>
            {tableHeaders.map((col, index) => (
                <th key={index} className="px-4 py-2 text-left font-semibold">{col}</th>
            ))}
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
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">{order.location}</td>
                <td className="px-4 py-2">{order.totalAmount}</td>
                <td className="px-4 py-2">{order.receivedAmount}</td>
                <td className="px-4 py-2">{order.remainingAmount}</td> 
                <td className="px-4 py-2">{order.amountRecievedTo}</td>                
                <td className="px-4 py-2"><button className="bg-green-600 w-20 p-1 rounded-xl text-center text-white" onClick={()=>handleEdit(order.id)}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerOutput;
