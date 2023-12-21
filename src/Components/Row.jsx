import React, { useEffect, useState } from 'react'
import instance from '../instance';
import "./Row.css" 
function Row(props) {
//  console.log(props);

const base_url = "https://image.tmdb.org/t/p/original";
const[allMovies,setAllMovies]=useState([])
 const fetchData=async()=>{
const response=await instance.get(props.fetchurl)
//  console.log(response);
const {data} =response
// console.log(data);
setAllMovies(data.results)
}
useEffect(()=>{
  fetchData();
},[]);

// console.log(allMovies);

 return (
  <div className='row'> 
    <h2 style={{color:"white",marginTop:"10px"}}>{props.title}</h2>
    <div className='movie_row'>
      {
        allMovies?.map(item=>(
          <img src={`${base_url}${item.poster_path}`} alt="" className='movie' />
        ))
      }
    </div>
    </div>
  )
}

export default Row