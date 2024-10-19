
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Order from "./Component/Pages/Order/Order"
import Login from './Component/Auth/Login';
import CustomerDetails from './Component/Pages/Customer/CustomerDetails';
import ExpensesUsed from './Component/Pages/Expnese/ExpenseUsed';
import OrderDashboard from './Component/Dashboards/OrderDashboard';
import AddOrder from './Component/Pages/Order/AddOrder';
import GetOrderByName from './Component/Pages/Order/GetOrderByName';
import GetByPaymentStatus from './Component/Pages/Order/GetByPaymentStatus';
import GetPaymentRecieved from './Component/Pages/Order/GetPaymentRecieved';
import GetByDate from './Component/Pages/Order/GetByDate'
import GetFilledBy from './Component/Pages/Order/GetFilledBy'
import GetByOrderStatus from './Component/Pages/Order/GetByOrderStatus'
import GetByCustomer from './Component/Pages/Customer/GetByCustomer';
import CustomerDashboard from './Component/Dashboards/CustomerDashboard';
import PaymentMode from './Component/Pages/Customer/PaymentMode';
import Dashboard from './Component/Dashboard';
import GetExpneseByDate from './Component/Pages/Expnese/GetExpenseByDate';
import DieselPaidBy from "./Component/Pages/Expnese/DiselPaidBy"
import ExpensePaidBy from "./Component/Pages/Expnese/ExpensePaidBy"
import ExpenseDashboard from './Component/Dashboards/ExpenseDashBoard';
import AddExpense from './Component/Pages/Expnese/AddExpense';
import NotFound from './Component/Pages/Expnese/NotFound';

const Routing = () => {
  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/order_dash" element={<OrderDashboard />} />
      <Route path="/customer_dash" element={<CustomerDashboard />} />
      <Route path="/expense_dash" element={<ExpenseDashboard />} />

      {/* Auth Route */}
      <Route path="/login" element={<Login />} />

      {/* Order Management Routes */}
      <Route path="/orders" element={<Order />} />
      <Route path="/addOrder" element={<AddOrder />} />
      <Route path="/get-order-by-customer" element={<GetOrderByName />} />
      <Route path="/payment-status" element={<GetByPaymentStatus />} />
      <Route path="/payment-received" element={<GetPaymentRecieved />} />
      <Route path="/get-order-by-date" element={<GetByDate />} />
      <Route path="/filled-by" element={<GetFilledBy />} />
      <Route path="/order_status" element={<GetByOrderStatus />} />

      {/* Customer Management Routes */}
      <Route path="/all_customer" element={<CustomerDetails />} />
      <Route path="/customer_name" element={<GetByCustomer />} />
      <Route path="/paymentMode" element={<PaymentMode />} />

      {/* Expense Management Routes */}
      <Route path="/all_expense" element={<ExpensesUsed />} />
      <Route path="/expense_by_date" element={<GetExpneseByDate />} />
      <Route path="/disel_paid_by" element={<DieselPaidBy />} />
      <Route path="/expense_paid_by" element={<ExpensePaidBy />} />
      <Route path="/add_expense" element={<AddExpense />} />

      {/* 404 Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;



