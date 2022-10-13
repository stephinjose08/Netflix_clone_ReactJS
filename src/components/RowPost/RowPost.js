
import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios  from '../axios'
import { API_Key, image_url } from '../constants/constants'
import YouTube  from 'react-youtube'
function RowPost(props) {
    const [movies,setMovie]=useState([])
    const [urld, seturld] = useState('')
   useEffect(() => {
   axios.get(props.url).then((Response)=>{
   setMovie(Response.data.results)
})     
}, [])
const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay:1,
    },
  };
const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_Key}&language=en-US`).then(Response=>
        {
            console.log(Response.data)
            if (Response.data.results!==0){
                seturld(Response.data.results[0])
            }
        })
}

  return (
    <div className='row'>
    
    <h2>{props.title}</h2>
    <div className='posters'>
        {movies.map((movie)=>
                <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'smallposter':'poster' }alt='poster' src={`${image_url+movie.backdrop_path}`} />

       
                )}
        
    </div>
:
    {urld &&< YouTube videoId={urld.key} opts={opts}/>}
</div>
  )
}

export default RowPost