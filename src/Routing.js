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
import DiselPaidBy from "./Component/Pages/Expnese/DiselPaidBy"
import ExpnesePaidBy from "./Component/Pages/Expnese/ExpensePaidBy"
import ExpenseDashboard from './Component/Dashboards/ExpenseDashBoard';

function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>

      <Routes>
        <Route path='/orders' element={<Order />}></Route>
      </Routes>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
      </Routes>

      <Routes>
        <Route path='/order_dash' element={<OrderDashboard />}></Route>
      </Routes>
      <Routes>
        <Route path='/addOrder' element={<AddOrder />}></Route>
      </Routes>
      <Routes>
        <Route path='/get-order-by-customer' element={<GetOrderByName />}></Route>
      </Routes>

      <Routes>
        <Route path='/payment-status' element={<GetByPaymentStatus />}></Route>
      </Routes>

      <Routes>
        <Route path='/payment-received' element={<GetPaymentRecieved />}></Route>
      </Routes>

      <Routes>
        <Route path='/get-order-by-date' element={<GetByDate />}></Route>
      </Routes>

      <Routes>
        <Route path='/filled-by' element={<GetFilledBy />}></Route>
      </Routes>

      <Routes>
        <Route path='/order_status' element={<GetByOrderStatus />}></Route>
      </Routes>

      <Routes>
        <Route path='/customer_dash' element={<CustomerDashboard />}></Route>
      </Routes>
      
      <Routes>
        <Route path='/customer_name' element={<GetByCustomer />}></Route>
      </Routes>

      <Routes>
        <Route path='/all_customer' element={<CustomerDetails />}></Route>
      </Routes>

      <Routes>
        <Route path='/paymentMode' element={<PaymentMode />}></Route>
      </Routes>

      <Routes>
        <Route path='/all_expense' element={<ExpensesUsed />}></Route>
      </Routes>
      
      <Routes>
        <Route path='/expense_by_date' element={<GetExpneseByDate />}></Route>
      </Routes>

      <Routes>
        <Route path='/disel_paid_by' element={<DiselPaidBy />}></Route>
      </Routes>

      <Routes>
        <Route path='/expense_paid_by' element={<ExpnesePaidBy />}></Route>
      </Routes>

      <Routes>
        <Route path='/expense_dash' element={<ExpenseDashboard />}></Route>
      </Routes>
    </div>
  )
}

export default Routing
