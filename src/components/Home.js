import React from 'react'
import {Data} from '../profileData'
import image from '../images/profile.jpeg'

const Home = () => {
    return (
        <div className = "all-center">
        <div className = "grid-2">
            <img src={image} alt={Data.alt} className="img"></img>
            <div>
            <h4 className = "large text-primary my-2">{Data.name}</h4>
            <p className = "text-light">{Data.desc}</p>
            </div>
        </div>
        
        
        </div>
    )
}

export default Home
