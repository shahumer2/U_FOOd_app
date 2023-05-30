
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import Home from './screen/Home';
import Login from './screen/Login';

import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Signup from './screen/Signup';
import { CartProvider } from './components/ContextReduver';
import MyOrder from './screen/MyOrder';
import AdminLogin from './screen/AdminLogin';


import Dashboard from "../src/admin/src/Components/Pages/Dashboard/Dashboard"
import Inventory from "../src/admin/src/Components/Pages/Inventory/Inventory"
import Customer from "../src/admin/src/Components/Pages/Customer/Customer"
import Order from "../src/admin/src/Components/Pages/Order/Order"
import Product from "../src/admin/src/Components/Pages/Product/Product"


function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Routes>

          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Createuser" element={<Signup />} />
          <Route path="/myOrder" element={<MyOrder />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />


          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Inventory' element={<Inventory />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/Customer' element={<Customer />} />

        </Routes>


      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
