import React from 'react';
import { ButtonGroup } from 'reactstrap';

import ThumbsUp from '../../assets/imgs/about/thumbsup.jpg';
import { DirectionalSection } from '../../components/directional-section/directional-section';

import './about.scss';

export const About = () => {

    const picture = [<div className='avatar-col'><img className='avatar-image' src={ThumbsUp} alt='Headshot'/></div>]
    const text = 
    <>
        <h5>Full-Stack engineer & AI practitioner</h5>
        <p>
            <b>

            <ul>
                <li>
                    Software Engineering
                    <p>
                        I like to write code - my jobs have been to build websites
                    </p>
                </li>
                <li>
                    Artificial Intelligence
                    <p>
                        My main interest is AI, with it being the focus of my Master's at university
                    </p>
                </li>
            </ul>
            </b>

        </p>
        <ButtonGroup>
            <a href='CV-Luke-McClure.pdf' className='btn btn-info' role='button'>Download</a>
            <a href='mailto:lukemcclure71@gmail.com' className='btn btn-info' role='button'>Contact Me</a>
        </ButtonGroup>
    </>
    return <div id='About' className='section about'>
        <div className='section-header'>
            <h4 className='section-title'>About</h4>
            <h6 className='section-subtitle'>A little about me</h6>
        </div>
        <div className='section-body'>
            <DirectionalSection 
                direction='right'
                title='Luke McClure'
                body={text}
                altBody={picture}
                card={false}
            />
        </div>
    </div>;
}