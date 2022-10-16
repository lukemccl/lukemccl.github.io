import React, { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faComputer, faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './career.scss'

export const Career = () => {

    type CareerItem = {
        icon: IconProp;
        type: 'school' | 'uni' | 'work';
        name: string;
        result?: string;
        date: string;
        place: string;
        description: ReactNode;
    }

    const careerItems = [
        {
            icon: faComputer,
            type: 'work',
            name: 'Software Engineer',
            date: '2022-Present',
            place: 'aPriori Technologies',
            description: <></>
        },
        {  
            icon: faGraduationCap,
            type: 'uni',
            name: 'MEng Computer Science with Artifical Intelligence',
            result: '1st Class Honours',
            date: '2017-2022',
            place: 'University of Southampton',
            description: <></>
        },
        {
            icon: faComputer,
            type: 'work',
            name: 'Software Engineer Summer Intern',
            date: '2019-2019',
            place: 'JP Morgan',
            description: <></>
        },
        {
            icon: faSchool,
            type: 'school',
            name: 'A-Levels',
            result: '3A\'s',
            date: '2010-2017',
            place: 'Bangor Grammar School',
            description: <></>
        }
    ] as CareerItem[];

    return <div id='Career' className='section career'>
        <div className='section-header'>
            <h4 className='section-title'>Career</h4>
            <h6 className='section-subtitle'>My education & career to date</h6>
        </div>
        <div className='section-body'>
            <VerticalTimeline >
                {careerItems.map(item => 
                    <VerticalTimelineElement
                        key={item.name}
                        date={item.date}
                        icon={<FontAwesomeIcon icon={item.icon} />}
                        iconStyle={{backgroundColor: 'white'}} >

                        <h5 className='vertical-timeline-element-title'>{item.name}{item.result ? ': ' + item.result : ''}</h5>
                        <h6 className='vertical-timeline-element-subtitle'>{item.place}</h6>
                    </VerticalTimelineElement>
                )}
            </VerticalTimeline>
        </div>
    </div>;
}