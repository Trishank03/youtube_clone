import React from 'react'

  /* The following line can be included in your src/index.js or App.js file */

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { useEffect,useState } from 'react';
function Home() {
    const [videos, setVideos] = useState([]);
    const key="AIzaSyBv63rq0x3ZeR9h7wTLffeDhnSMOs7iI5w";
    //useEffect
    useEffect(()=>{

        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyBv63rq0x3ZeR9h7wTLffeDhnSMOs7iI5w`)
          .then(response=>response.json())
          .then(data=>setVideos(data.items))
          .catch(err=>console.log(err))
        },[])

  return (
    <div className='Home  container-fluid container-fluid-sm'>
         <h1 className='text-white mb-4 '>Most Popular YouTube Videos</h1>
      <ul >
      <div className='design row row-cols-1 row-col-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-auto-3'>
        {videos.map((video) => ( <div className='col'>
          <li key={video.id}>
       
          <iframe width="250px" heigth="250px"  src={"https://www.youtube.com/embed/"+video.id.videoId} controls></iframe>
          
          {/* <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} /> */}
            <p className='text-white'>{video.snippet.title}</p>
          </li>
          </div>
        ))}
        </div>
      </ul>
    </div>
  )
}

export default Home;