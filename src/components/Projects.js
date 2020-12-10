import React , { Fragment } from 'react'
import { ProjectList } from '../profileData'

const Projects = () => {
    return (
        <div className = "container">
        <h3>My Projects</h3>
        <div className = "card grid-2">
        {ProjectList.map(project => {
            return (
                <div className="border"> 
                <p className="text-light">{project.name}</p>
                <a href = {project.link}>{project.link}</a>
                </div>
            )
        })}
        </div>
        </div>
    )
}

export default Projects
