import RestaurantCard from "./RestaurantCard.js"

import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";


const Body=()=>{
const [listOfRestaurants,setlistOfRestaurants]=useState([]);
 useEffect(()=>{
   fetchData();
 },[]);
const fetchData= async()=>{
   const data=await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
   );
   const json=await data.json();
   console.log(json);
   setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
};


    
    return  listOfRestaurants.length===0?<Shimmer/>:(
      <div className="body">
       <div className="filter">
         <div className="search">
            <input type="text" className="search-box"/>
            <button>Search</button>
         </div>
         <button className="filter-btn" onClick={()=>{
        const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4
    );
    setlistOfRestaurants(filteredList);
       }}>Top Rated Restaurant</button>
       </div>
       <div className="res-container">
      {listOfRestaurants.map((restaurant)=>(
         <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
      )
      )
      }
             
              
 
         
          
       </div>
      </div> 
    )
 };
 export default Body;