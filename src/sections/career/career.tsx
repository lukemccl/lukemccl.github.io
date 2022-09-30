import React, { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faComputer, faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './career.scss'

export const Career = () => {
    const careerItem = (icon: IconProp, name: string, date: string, title: string, body: ReactNode) => (
        <li className="timeline-item mb-5">
        <span className="timeline-icon">
            <FontAwesomeIcon icon={icon} />
            <span> {name} </span>
            <span className="text-muted mb-2">{date}</span>
        </span>
        <h6 className="fw-bold">{title}</h6>
        <p>{body}</p>
    </li>
    );

    return <div id='Career' className='section career'>
        <section className="py-5">

        <ul className='timeline-with-icons'>
            {careerItem(faSchool, 'Bangor Grammar School', '2010-2017', 'A-Level: 3A\'s', <></>)}
            {careerItem(faGraduationCap, 'University of Southampton', '2017-2022', 'MEng Computer Science with Artifical Intelligence', <></>)}
            {careerItem(faComputer, 'JP Morgan', '2019-2019', 'Summer Intern Software Engineer', <></>)}
            {careerItem(faComputer, 'aPriori Technologies', '2022-Present', 'Software Engineer', <></>)}
        </ul>
        </section>
    </div>;
}