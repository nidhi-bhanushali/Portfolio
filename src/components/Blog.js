import React from 'react'
import {BlogList} from '../profileData';

const Blog = () => {
    return (
        <div className = "container mt">
        <h3 className="all-center mb">My Blogs</h3>
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
    )
}

export default Blog
