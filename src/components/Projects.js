import React , { Fragment } from 'react'
import { ProjectList } from '../profileData'

const Projects = () => {
    return (
        <div className = "container mt">
        <h3 className = "all-center mb">My Projects</h3>
        <div className = "card">
        {ProjectList.map(project => {
            return (
                <div className="border"> 
                <p className="text-light">{project.name}</p>
                <a href = {project.link}>{project.link}</a>
                <p className="text-light">{project.desc}</p>
                </div>
            )
        })}
        </div>
        </div>
    )
}

export default Projects
