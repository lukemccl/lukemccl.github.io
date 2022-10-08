import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './navbar.scss'
import { Button } from 'reactstrap';

export interface NavbarProps {
    sections: string[];
};

export const Navbar = (props: NavbarProps) => {

    const { sections } = props;

    const externalLinks = () => (
        <div className='external-icons'>
            <a className='icon' href='https://www.linkedin.com/in/luke-mcclure/'>
                <FontAwesomeIcon  icon={faLinkedin} />
            </a>
            <a className='icon' href='https://github.com/lukemccl'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className='icon' href='https://www.instagram.com/l.mccl/'>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
    );

    const scrollToMenu = (id: string) => {
        const section = document.getElementById(id) as HTMLDivElement
        const header = document.getElementById('header') as HTMLDivElement
        window.scroll({top: section.getBoundingClientRect().top - header.getBoundingClientRect().bottom + window.scrollY, behavior: 'smooth'})
    };

    const menu = () => (
        <ul className='menu'>
            {sections.map((section => 
                <li key={section} className='menu-item'>
                    <Button key={`${section}-btn`} onClick={() => scrollToMenu(section)}>{section}</Button>
                </li>
            ))}
        </ul>
    );

    return (
        <header id='header' className='navbar sticky-top'>
            {menu()}
            {externalLinks()}
        </header>
    );
}