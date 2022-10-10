import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

export const Skills = () => {
    type Skill = {
        name: string;
        icon: IconProp;
        length: number;
        experiences: string[];
    }

    const skills = [
        {
            name: 'Java',
            length: 5,
            experiences: ['Spring Boot', 'JUnit', 'Selenium']
        },
        {
            name: 'Python',
            length: 3,
            experiences: ['NumPy', 'Pandas', 'Matplotlib', 'PyTorch', 'Jupyter']
        },
        {
            name: 'TypeScript',
            length: 2,
            experiences: ['React', 'Bootstrap', 'Jest']
        },
    ] as Skill[];
    
    return <div id='Skills' className='section skills'>
        <div className='section-header'>
            <h4 className='section-title'>Skills</h4>
            <h6 className='section-subtitle'>Things I would say I'm good at</h6>
        </div>
        <div className='section-body'>

        </div>
    </div>;
}