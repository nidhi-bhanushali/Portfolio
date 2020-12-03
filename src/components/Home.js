import React from 'react'
import {Data , ProjectList , BlogList} from '../profileData'
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
        <h3>My Skills</h3>
        <div>
        <h3>My Projects</h3>
        <div className = "card">
        {ProjectList.map(project => {
            return (
                <div className="border"> 
                <p className="text-light">{project.name}</p>
                <a href = {project.link}>{project.link}</a>
                </div>
            )
        })}
        </div>
        <div>
        <h3>My Blogs</h3>
        <div className = "card">
        {BlogList.map(blog => {
            return (
                <div className="border"> 
                <p className="text-light">{blog.name}</p>
                <a href = {blog.link}>{blog.link}</a>
                </div>
            )
        })}
        </div>
        </div>
        </div>
        </div>
    )
}

export default Home
