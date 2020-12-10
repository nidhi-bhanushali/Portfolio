import React from 'react'
import { SkillList } from '../profileData'

const Skills = () => {
    return (
        <div>
            <ul className='card container grid-3 mt'>
                {SkillList.map(skill => {
                    return(
                    <li className='text-light'>{skill}</li>
                    )})}
            </ul>

        </div>
    )
}

export default Skills
