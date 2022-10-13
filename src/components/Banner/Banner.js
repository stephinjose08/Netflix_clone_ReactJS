import React, { useState,useEffect } from 'react'
import './Banner.css'
import axios from '../axios'
import { API_Key,image_url } from '../constants/constants'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => { 
    axios.get(`trending/all/week?api_key=${API_Key}&language=en-US'`).then((Response)=>{
        setMovie(Response.data.results[parseInt(Math.random() * 10)])
        console.log(Response)
    })
     
    }, [])
    
  return (
    <div 
    style={{backgroundImage:`url(${movie ?image_url+ movie.backdrop_path
        :""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title|| movie.name:""}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview  :""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
  )
}

export default Banner