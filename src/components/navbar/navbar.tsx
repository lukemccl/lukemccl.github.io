import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './navbar.scss'

export interface NavbarProps {
    sections: string[];
};

export const Navbar = (props: NavbarProps) => {

    const { sections } = props;

    const profileImage = () => (
        <div className='profile-avatar'>
            <img className='profile-image' src='https://avatars.githubusercontent.com/u/32748875' />
            Luke McClure
        </div>
    );

    const externalLinks = () => (
        <div className='external-icons'>
            <a className='icon' href='https://www.linkedin.com/in/luke-mcclure/'>
                <FontAwesomeIcon  icon={faLinkedin} />
            </a>
            <a className='icon' href='https://github.com/lukemccl'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    );

    const menu = () => (
        <ul className='menu'>
            {sections.map((section => 
                <li className='menu-item'>
                    <a href={`#${section}`}>{section}</a>
                </li>
            ))}
        </ul>
    );

    return (
        <header className='navbar'>
            {profileImage()}
            {menu()}
            {externalLinks()}
        </header>
    );
}