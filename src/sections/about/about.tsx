import { ButtonGroup } from 'reactstrap';
import { faLaptopCode, faBrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DirectionalSection } from '../../components/directional-section/directional-section';
import ThumbsUp from '../../assets/imgs/about/thumbsup.avif';

import './about.scss';

export const About = () => {

    const picture = [<div className='avatar-col'><img className='avatar-image' src={ThumbsUp} alt='Headshot'/></div>]
    const text = 
    <div className='about-text'>
        <div className='about-text-title'>
            <FontAwesomeIcon icon={faBrain} />
            <h4>Artificial Intelligence</h4>
        </div>
        <div className='about-text-body'>
            <p>
                My main interest is AI, both my undergraduate and masters dissertations were exploring different areas of the field.
            </p>
            <p>
                I've touched many areas in the field through university labs and dissertations as well as personal data projects.
            </p>
        </div>
        <div className='about-text-title'>
            <FontAwesomeIcon icon={faLaptopCode}/>
            <h4>Software Development</h4>
        </div>
        <div className='about-text-body'>
            <p>
                I like to write code - you can often find me writing python scripts or working on spreadsheets to explore and track aspects of my life.
            </p>
            <p>
                My career to date has been in full-stack software engineering.
            </p>
        </div>
           
        <ButtonGroup>
            <a href='CV-Luke-McClure.pdf' className='btn btn-info' role='button'>Download</a>
            <a href='mailto:lukemcclure71@gmail.com' className='btn btn-info' role='button'>Contact Me</a>
        </ButtonGroup>
    </div>

    return <div id='About' className='section about'>
        <div className='section-header'>
            <h4 className='section-title'>About</h4>
            <h6 className='section-subtitle'>A little about me</h6>
        </div>
        <div className='section-body'>
            <DirectionalSection 
                direction='right'
                title=''
                body={text}
                altBody={picture}
                card={false}
            />
        </div>
    </div>;
}