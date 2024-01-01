import React from 'react'
import { useState } from 'react'
export default function Carousel() {
    const [search,setSearch]=useState('')
  return (
    <div>
   <div id="carouselExampleFade" style={{objectFit:"contain !important"}} className="carousel slide carousel-fade">
  <div className="carousel-inner">
  <div className="carousel-caption" style={{zIndex:"10"}}>

<div className="d-flex justify-content-center">
<input type="search" className='form-control me-2 fs-5' placeholder='Search' aria-label='Search' value={search} onChange={(e)=>{setSearch(e.target.value)}} />

</div>
</div>
    <div className="carousel-item active" >
      <img src="https://source.unsplash.com/random/1800x700/?burger" style={{filter:"brightness(30%"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/1800x700/?fries" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/1800x700/?pastry" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
