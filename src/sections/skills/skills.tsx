import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { blue, blueGrey, red, yellow } from '@mui/material/colors';
import React from 'react';
import { SkillCard } from './skill-card/skill-card';

import './skills.scss';

export type Skill = {
    name: string;
    icon: string | IconProp;
    color: string;
    experiences: string[];
}

export const Skills = () => {

    const skills = [
        {
            name: 'Java',
            color: red[600],
            icon: 'devicon-java-plain',
            experiences: ['Spring Boot', 'JUnit', 'Selenium']
        },
        {
            name: 'Python',
            color: yellow[600],
            icon: 'devicon-python-plain',
            experiences: ['NumPy', 'Pandas', 'PyTorch', 'Jupyter']
        },
        {
            name: 'TypeScript',
            color: blue[600],
            icon: 'devicon-typescript-plain',
            experiences: ['React', 'Bootstrap', 'Jest']
        },
        {
            name: 'Other',
            color: blueGrey[600],
            icon: faEllipsis,
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