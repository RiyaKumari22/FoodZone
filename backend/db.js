


const mongoose=require('mongoose');

const mongoDB= mongoose.connect('mongodb://localhost/foodzone')
.then(()=>{console.log("connection successful...");
const fetched_data= mongoose.connection.db.collection("food_items");
const fetched_catdata=mongoose.connection.db.collection("foodCategory")
const getDocument= async ()=>{
    try{
        global.food_items=await fetched_data.find({}).toArray(async function(e,data){
            if(e)console.log(e);
            else 
          console.log();
              
           
            
        }); 
      
            // console.log( global.food_items);
           
           
        
    }catch(err){
        console.log(err);

    }

}
getDocument();

//foodcategory
const getcategory=async()=>{
    try{
       global.foodcategory= await fetched_catdata.find({}).toArray(async function(e,catdata){
            if(e)console.log(e);
            else console.log();
        })
        // console.log(global.foodcategory);
        
    }
catch(e){
    console.log(e);
}}
getcategory()
})
.catch((err)=>console.log(err));




module.exports=mongoDB;


      