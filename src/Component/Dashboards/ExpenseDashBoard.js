import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseDashboard = () => {
  return (
    <div className="flex justify-center  p-6">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 text-center mb-12 tracking-tight animate-fade-in  transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2  focus:scale-105 focus:-translate-y-2 focus:shadow-xl active:bg-gradient-to-r">
          Expense Management Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Add Expense */}
          <Link to="/add_expense">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Add New Expense</h2>
              <p className="text-sm text-center">Log a new expense with detailed information</p>
            </div>
          </Link>
          
          {/* Get All Expense */}
          <Link to="/all_expense">
            <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">View All Expenses</h2>
              <p className="text-sm text-center">Comprehensive overview of all expenses recorded</p>
            </div>
          </Link>

          {/* Get Expense by Date */}
          <Link to="/expense_by_date">
            <div className="bg-gradient-to-br from-red-400 to-red-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Expenses by Date</h2>
              <p className="text-sm text-center">Filter expenses by specific dates or date ranges</p>
            </div>
          </Link>

          {/* Expense Paid By */}
          <Link to="/expense_paid_by">
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Expense Paid By</h2>
              <p className="text-sm text-center">Track who paid for each recorded expense</p>
            </div>
          </Link>

          {/* Diesel Paid By */}
          <Link to="/disel_paid_by">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Diesel Paid By</h2>
              <p className="text-sm text-center">Manage records of diesel payments</p>
            </div>
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default ExpenseDashboard;
