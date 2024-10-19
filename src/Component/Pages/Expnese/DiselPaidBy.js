import React from 'react'
import ExpenseFilter from './HOC/ExpenseFilter'

function DiselPaidBy() {
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
        <div>
          <ExpenseFilter 
            orders={expensesData} 
            filterBy="dieselPaidBy" 
            filterLabel="Diesel Paid By" 
            tableHeaders={[
              "Sr. No.",
              "date",
              "diesel",
              "dieselPaidBy",
              "expense",
              "expensePaidBy",
              "remark",
            ]}
          />
        </div>
      );
}

export default DiselPaidBy;
