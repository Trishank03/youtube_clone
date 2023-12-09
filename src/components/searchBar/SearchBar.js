import React from 'react'
import { useState,useEffect } from 'react'

function SearchBar() {
 
 
  const [input,setInput]=useState("");
  const [videos, setVideos] = useState([]);
  const key="AIzaSyBv63rq0x3ZeR9h7wTLffeDhnSMOs7iI5w"
  
  useEffect(()=>{
  if(input!=undefined){
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=${key}&q=${input}`)
        .then(response=>response.json())
        .then(data=>setVideos(data.items))
        .catch(err=>console.log(err))
  }
      },[input])
    
  
  return (
    <div className='  container-fluid container-fluid-sm' style={{backgroundColor:"#000000"}}>
      <div className=' mb-3 pb-3'>
       <input  className='w-50' type='text' placeholder='search' to="search"  onChange={event=>{
          setInput(event.target.value)
          
        }}></input>
      </div>
       <ul >
      <div className='designing row row-cols-1 row-col-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-auto-3'>
        {videos.map((video) => ( <div className='col'>
          <li key={video.id}>
       
          <iframe width="250px" heigth="250px" src={"https://www.youtube.com/embed/"+video.id.videoId} controls></iframe>
          
       
            <p className='text-white'>{video.snippet.title}</p>
          </li>
          </div>
        ))}
        </div>
      </ul>
      
  
    </div>
  )
}

export default SearchBar