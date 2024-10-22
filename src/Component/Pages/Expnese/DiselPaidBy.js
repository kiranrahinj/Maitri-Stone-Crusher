import React from "react";
import ExpenseFilter from "./HOC/ExpenseFilter";
import { useSelector } from "react-redux";

function DiselPaidBy() {
  const expensesData=useSelector((state)=>state.expense.expense)
  return (
    <div>
      <ExpenseFilter
        orders={expensesData}
        filterBy="diselPaidBy"
        filterLabel="Diesel Paid By"
        tableHeaders={[
          "Sr. No.",
          "date",
          "disel",
          "diselPaidBy",
          "expense",
          "expensePaidBy",
          "remark",
        ]}
      />
    </div>
  );
}

export default DiselPaidBy;
