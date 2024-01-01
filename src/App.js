import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { CartProvider } from "./components/ContextReducer.js";
import MyOrder from "./screens/MyOrder.js";
import Cart from "./screens/Cart.js";
function App() {
  return (
    <CartProvider>


    <Router>

    <div>
  <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='/createuser' element={<Signup/>}></Route>
    {/* <Route exact path='/cart' element={<Cart/>}></Route> */}
    <Route exact path='/myorderData' element={<MyOrder/>}></Route>
      

  </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
