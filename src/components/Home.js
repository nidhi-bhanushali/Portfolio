import React from 'react'
import {Data} from '../profileData'
import image from '../images/profile.jpeg'
import Bio from './Bio'
import Skills from './Skills'

const Home = () => {
    return (
        <div className = "all-center">
        <div className = "grid-2">
            <img src={image} alt={Data.alt} className="img"></img>
            <div>
            <h4 className = "large text-primary my-2">{Data.name}</h4>
            <p className = "text-light">{Data.desc}</p>
            <br>
            </br>
           
            </div>
        </div>
        <Bio/>
        <Skills/>
        </div>
    )
}

export default Home
