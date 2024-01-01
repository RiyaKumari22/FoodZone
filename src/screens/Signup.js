import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import Navbar from '../components/Navbar'
export default function Signup() {
  let navigate = useNavigate()

    const[credentials,setCredentials]=useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit=async(e)=>{
e.preventDefault()
const response=await fetch("http://localhost:5000/api/createuser",{
    method:"POST",
    headers:{
        'Content-Type':"application/json"
    },
    body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
})
const json=await response.json()
console.log(json);
if(!json.success){
alert("Enter Valid credentials:")
}
if(json.success)
{
  navigate("/")
}
    }
    const OnChange=(event)=>{
      setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    // const onChange=(event)=>{
    //     setCredentials({...credentials,[event.target.name]:event.target.value})
    // }
  return (
//     <div className='container'>
//       <form onSubmit={(handleSubmit)}>
//       <div className="mb-3">
//     <label htmlFor="exampleInputName" className="form-label">Name </label>
//     <input type="name" className="form-control" id="exampleInputName" onChange={onChange} name='name' value={credentials.name} />
    
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" onChange={onChange}  name='email' value={credentials.email} id="exampleInputEmail1"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" onChange={onChange} name='password' value={credentials.password} id="exampleInputPassword1"/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputLocation" className="form-label">Location</label>
//     <input type="name" className="form-control" onChange={onChange} name='geolocation' value={credentials.geolocation} id="exampleInputLocation"/>
//   </div>
 
//   <button type="submit" className="btn btn-primary">Submit</button>
//   <Link to="/login" className='m-3 btn btn-danger'>Login</Link>
// </form>
//     </div>
<div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
<div>
<Navbar />
</div>

  <div className='container' style={{"fontFamily":"Poppins"}} >
    <form className='w-50 m-auto mt-5 border bg-light border-success rounded' >
      <div className="m-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" name="name" value={credentials.name}  onChange={OnChange} />
      </div>
      <div className="m-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" name='email' value={credentials.email}  onChange={OnChange} />
      </div>
   

      <div className="m-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
        <input type="text" className="form-control"  name='geolocation' value={credentials.geolocation} onChange={OnChange} />
      </div>
      <div className="m-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control"  name='password' value={credentials.password}  onChange={OnChange}/>
      </div>
      <button type="submit" className="m-3 btn btn-success" onSubmit={handleSubmit}>Submit</button>
      <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
    </form>
  </div>
</div>
  )
}
