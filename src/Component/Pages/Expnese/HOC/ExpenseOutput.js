import React from "react";

const ExpenseOutput = ({ordersData,tableHeaders}) => {
  return (
    <div className="container mx-auto px-4 mt-10">
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
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">{order.diesel}</td>
                <td className="px-4 py-2">{order.dieselPaidBy}</td>
                <td className="px-4 py-2">{order.expense}</td>
                <td className="px-4 py-2">{order.expensePaidBy}</td> 
                <td className="px-4 py-2">{order.remark}</td>                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseOutput;
