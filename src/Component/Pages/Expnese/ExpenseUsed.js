import React from "react";

const ExpensesUsed = () => {
  const expensesData = [
    {
      date: "2024-10-18",
      diesel: "$200",
      dieselPaidBy: "John Smith",
      expense: "$500",
      expensePaidBy: "Company Account",
      remark: "Fuel for transportation",
    },
    {
      date: "2024-10-17",
      diesel: "$150",
      dieselPaidBy: "Jane Doe",
      expense: "$300",
      expensePaidBy: "Personal Funds",
      remark: "Miscellaneous office supplies",
    },
    // Add more expense objects as needed
  ];

  return (
    <div className="container mx-auto px-4 mt-10">
      <h2 className="bg-gray-700 text-center text-white font-bold p-4 text-2xl mb-6 rounded-md shadow-md">
        Expenses Used
      </h2>

      {/* Table Container with Scroll */}
      <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-200px)] shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full table-auto border-collapse bg-white">
          <thead className="sticky top-0 bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Sr. No.</th>
              <th className="px-4 py-2 text-left font-semibold">Date</th>
              <th className="px-4 py-2 text-left font-semibold">Diesel</th>
              <th className="px-4 py-2 text-left font-semibold">Diesel Paid By</th>
              <th className="px-4 py-2 text-left font-semibold">Expense</th>
              <th className="px-4 py-2 text-left font-semibold">Expense Paid By</th>
              <th className="px-4 py-2 text-left font-semibold">Remark</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {expensesData.map((expense, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 transition duration-300 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-2">{index + 1}</td> {/* Serial Number */}
                <td className="px-4 py-2">{expense.date}</td>
                <td className="px-4 py-2">{expense.diesel}</td>
                <td className="px-4 py-2">{expense.dieselPaidBy}</td>
                <td className="px-4 py-2 text-green-600 font-semibold">{expense.expense}</td>
                <td className="px-4 py-2">{expense.expensePaidBy}</td>
                <td className="px-4 py-2">{expense.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpensesUsed;
