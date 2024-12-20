import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Order from "../Pages/Order/Order"
import Login from '../Auth/Login';
import CustomerDetails from '../Pages/Customer/CustomerDetails';
import ExpensesUsed from '../Pages/Expnese/ExpenseUsed';
import OrderDashboard from '../Dashboards/OrderDashboard';
import AddOrder from '../Pages/Order/AddOrder';
import GetOrderByName from '../Pages/Order/GetOrderByName';
import GetByPaymentStatus from '../Pages/Order/GetByPaymentStatus';
import GetPaymentRecieved from '../Pages/Order/GetPaymentRecieved';
import GetByDate from '../Pages/Order/GetByDate'
import GetByDates from '../Pages/Order/GetByDates'
import GetFilledBy from '../Pages/Order/GetFilledBy'
import GetByOrderStatus from '../Pages/Order/GetByOrderStatus'
import GetByCustomer from '../Pages/Customer/GetByCustomer';
import CustomerDashboard from '../Dashboards/CustomerDashboard';
import PaymentMode from '../Pages/Customer/PaymentMode';
import Dashboard from '../Dashboard';
import GetExpneseByDate from '../Pages/Expnese/GetExpenseByDate';
import DieselPaidBy from "../Pages/Expnese/DiselPaidBy"
import ExpensePaidBy from "../Pages/Expnese/ExpensePaidBy"
import ExpenseDashboard from '../Dashboards/ExpenseDashBoard';
import AddExpense from '../Pages/Expnese/AddExpense';
import NotFound from '../Pages/Expnese/NotFound';
import PrivateRoutes from "./PrivateRoutes"
import UpdateOrder from "../Pages/Order/UpdateOrder"
import UpdateCustomer from '../Pages/Customer/UpdateCustomer';
import {ProfitDashboard} from '../Pages/Profit_loss/ProfitDashboard';
import Loader from '../Loader';
import UpdateExpense from '../Pages/Expnese/UpdateExpense';
import UserSpendingOverview from '../Pages/Profit_loss/UserSpendingOverview';

const Routing = () => {
  return (
    <Routes>
      {/* Auth Route */}
      <Route path="/" element={<Login />} />

      <Route element={<PrivateRoutes/>}>
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order_dash" element={<OrderDashboard />} />
        <Route path="/customer_dash" element={<CustomerDashboard />} />
        <Route path="/expense_dash" element={<ExpenseDashboard />} />

        {/* Order Management Routes */}
        <Route path="/orders" element={<Order />} />
        <Route path="/addOrder" element={<AddOrder />} />
        <Route path="/get-order-by-customer" element={<GetOrderByName />} />
        <Route path="/payment-status" element={<GetByPaymentStatus />} />
        <Route path="/payment-received" element={<GetPaymentRecieved />} />
        <Route path="/get-order-by-date" element={<GetByDate />} />
        <Route path="/filled-by" element={<GetFilledBy />} />
        <Route path="/order_status" element={<GetByOrderStatus />} />
        <Route path='/update-order/:userId' element={<UpdateOrder/>} />
        <Route path='/get-order-by-dates' element={<GetByDates/>} />

        {/* Customer Management Routes */}
        <Route path="/all_customer" element={<CustomerDetails />} />
        <Route path="/customer_name" element={<GetByCustomer />} />
        <Route path="/paymentMode" element={<PaymentMode />} />
        <Route path='/update-customer/:customerId' element={<UpdateCustomer/>} />


        {/* Expense Management Routes */}
        <Route path="/all_expense" element={<ExpensesUsed />} />
        <Route path="/expense_by_date" element={<GetExpneseByDate />} />
        <Route path="/disel_paid_by" element={<DieselPaidBy />} />
        <Route path="/expense_paid_by" element={<ExpensePaidBy />} />
        <Route path="/add_expense" element={<AddExpense />} />
        <Route path="/update-expense/:id" element={<UpdateExpense />} />

        {/* Profit Management Routes */}
        <Route path="/profit" element={<ProfitDashboard />} />
        <Route path="/spending/:id" element={<UserSpendingOverview />} />
        
      </Route>
      {/* 404 Not Found Route */}
      <Route path="*" element={<NotFound />} />
      <Route path='/loader' element={<Loader/>}/>
    </Routes>
    
  );
};

export default Routing;



