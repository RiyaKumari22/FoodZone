
import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';


export default function Card(props) {
  let dispatch=useDispatchCart()
  let data=useCart()
  let options=props.options;
  let priceOption=Object.keys(options)
  const priceRef=useRef()

  const[qty,setQty]=useState(1)
  const[size,setSize]=useState("")
  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    // console.log(food)
    // console.log(new Date())
    if (food != []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })



  }

  let finalPrice=qty*parseInt(options[size])
  useEffect(()=>{
    setSize(priceRef.current.value)
  })
  return (
    
        <div className="card mt-3" style={{"width": "18rem","maxHeight":"360px"}}>
  <img src={props.foodItem.img} style={{"height":"120px","objectFit":"fill"}} className="card-img-top" alt="img"/>
  <div className="card-body">
    <h5 className="card-title" style={{"fontFamily":"Poppins"}}>{props.foodItem.name}</h5>
    
  <div className="container w-100">
    <select className='m-2 h-100 bg-success rounded' onChange={(e)=>setQty(e.target.value)}>
        {Array.from(Array(6),(e,i)=>{
            return(
                <option key={i+1 } value={i+1}>{i+1}</option>
            )
        })}
    </select>
    <select className='m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)} >
      {priceOption.map((data)=>{
 return <option key={data} value={data}>{data}</option>
      }
      )}

    </select>
    <div className='d-inline h-100 fs-5'>
       ₹{finalPrice}/-
    </div>

  </div>
  <hr />
  <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
  </div>
</div> 
    
  )
}

