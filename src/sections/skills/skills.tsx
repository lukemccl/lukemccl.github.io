import React, { ReactElement } from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { blue, blueGrey, red, yellow } from '@mui/material/colors';
import { SkillCard } from './skill-card/skill-card';

import './skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JavaPlainIcon, PythonPlainIcon, TypescriptPlainIcon } from "react-devicons";

export type Skill = {
    name: string;
    icon: ReactElement;
    color: string;
    experiences: string[];
}


export const Skills = () => {
    const skills = [
        {
            name: 'Java',
            color: red[600],
            icon: <JavaPlainIcon  size="2em" color="white"/>,
            experiences: ['Spring Boot', 'JUnit', 'Selenium']
        },
        {
            name: 'Python',
            color: yellow[600],
            icon: <PythonPlainIcon  size="2em" color="white"/>,
            experiences: ['NumPy', 'Pandas', 'PyTorch', 'Jupyter']
        },
        {
            name: 'TypeScript',
            color: blue[600],
            icon: <TypescriptPlainIcon  size="2em" color="white" />,
            experiences: ['React', 'Bootstrap', 'Jest']
        },
        {
            name: 'Other',
            color: blueGrey[600],
            icon: <FontAwesomeIcon icon={faEllipsis} />,
            experiences: ['Lua', 'Bash', 'Haskell']
        },
    ] as Skill[];
    
    return <div id='Skills' className='section skills'>
        <div className='section-header'>
            <h4 className='section-title'>Skills</h4>
            <h6 className='section-subtitle'>Things I would say I'm good at</h6>
        </div>
        <div className='section-body'>
            <div className='skills-section row'>
                {skills.map(skill => <SkillCard key={skill.name} skill={skill}/>)}
            </div>
        </div>
        <div className='section-header'>
            <h4 className='section-title'>Tools</h4>
            <h6 className='section-subtitle'>The software I like to use</h6>
        </div>
    </div>;
}