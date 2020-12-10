import React from 'react'
import {Data} from '../profileData';

const Bio = () => {
    return (
        <div className='container'>
            <h3 className='mt'>A little about me</h3>
            <p className='text-light'>{Data.bio}</p>
        </div>
    )
}

export default Bio
