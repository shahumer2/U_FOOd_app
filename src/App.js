
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


function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Createuser" element={<Signup />} />
          <Route path="/myOrder" element={<MyOrder />} />
        </Routes>


      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
