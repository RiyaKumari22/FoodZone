import React ,{useState}from 'react'
import {Link, useNavigate} from "react-router-dom"
import Badge from 'react-bootstrap/Badge'
import Cart from '../screens/Cart'
import { useCart } from './ContextReducer'
import Modal from '../Modal'
export default function Navbar() {
  let navigate = useNavigate()
  const [cartView, setCartView] = useState(false)
  let data=useCart();


  const handleLogout=()=>{
localStorage.removeItem("authToken")
navigate('/login')
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-success">
  <div class="container-fluid" style={{"fontFamily":"Poppins"}}>
    <Link class="navbar-brand "  to="/">FoodZone</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to='/'>Home</Link>
        </li>
        {(localStorage.getItem("authToken"))?
        <li className="nav-item">
        <Link className="nav-link active fs-5" aria-current="page" to='/myorderData'>My Orders</Link>
      </li>
      :""}
        
      </ul>
      {(!localStorage.getItem("authToken"))?
       
       <div className='d-flex'>

          <Link className="btn bg-white text-success mx-1 " to='/login'>Login</Link>
        
          <Link className="btn bg-white text-success mx-1" to='/createuser'>SignUp</Link>
       </div>
      :
      <div>
      <div className='btn bg-white text-success mx-2'onClick={()=>{setCartView(true)}}>  My Cart{" "}
      <Badge pill bg='danger'>{data.length}</Badge>
      {/* <Badge pill bg='danger'>2</Badge> */}
      
      </div>
      {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : null}
      
      <div className='btn bg-white text-danger mx-1' onClick={handleLogout} > Logout</div>
      </div>
      }

       
   
    </div>
  </div>
</nav>
    </div>
  )
}
