import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className = 'navbar text-primary'>
            <ul>
                <Link to = '/'>Nidhi Bhanushali</Link>
                <Link to = '/about'>About</Link>
                <Link to = '/blog'>Blogs</Link>
                <Link to = '/project'>Projects</Link>
            </ul>
        </div>
    )
}

export default Navbar