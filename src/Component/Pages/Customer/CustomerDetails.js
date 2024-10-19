import React from "react";

const CustomerDetails = () => {
  const customersData = [
    {
      name: "Alice Johnson",
      totalAmount: "$1500",
      receivedAmount: "$1000",
      remainingAmount: "$500",
      receivedTo: "Bank Transfer",
    },
    {
      name: "Bob Williams",
      totalAmount: "$2000",
      receivedAmount: "$1500",
      remainingAmount: "$500",
      receivedTo: "Credit Card",
    },
    // Add more customer objects as needed
  ];

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
                <td className="px-4 py-2">{customer.receivedTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerDetails;
