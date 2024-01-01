import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'


export default function Home() {
  const [foodCat,setFoodCat]=useState([])
  const [foodItem,setFoodItem]=useState([])
  const [search,setSearch]=useState('')
const loadData=async ()=>{
let response=await fetch("http://localhost:5000/api/foodData",{
  method:"POST",
  headers:{
    'Content-Type':"application/json"
  }
});
response=await response.json()
// console.log(response[0],response[1]);

setFoodItem(response[0])
setFoodCat(response[1])

}
useEffect(()=>{
  loadData();
},[])
  return (
    <div>
    <div> <Navbar/> </div>  
    <div>
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
    </div>
    <div className='m-3'>
     
      
    {foodCat != []
      ? foodCat.map((data)=>{
        return ( <div className='row mb-3'>
        <div style={{"fontFamily":"Poppins"}} key={data._id} className='fs-3 m-3'>
          {data.CategoryName}</div>
          <hr />
         {foodItem != []
          ? foodItem.filter((items)=>items.CategoryName==data.CategoryName && (items.name.toLowerCase().includes(search.toLowerCase())))
          .map(filterItems=>{
            return( <div key={filterItems._id} className='col-12 col-md-6 col-lg-4'>
              <Card foodItem={filterItems}
              options={filterItems.options[0]}
             
              ></Card>
            </div>
            )
          }
          ): <div>No such Data Found</div>
        }
        
</div>
        )
      })
      : ""
    }
     

      </div>
 <div> <Footer/>  </div>  
    </div>
  )
}
