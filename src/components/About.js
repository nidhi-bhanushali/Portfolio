import React from 'react'
import {Data} from '../profileData'

const About = () => {
    return (
        <div className='container'>
            <h3 className='mt all-center'>About Me</h3>
            <p className='text-light'>{Data.bio}</p>
        </div>
    )
}

export default About
