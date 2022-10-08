import React from 'react';
import { Card, CardHeader, CardImg, CardImgOverlay, CardSubtitle, CardTitle } from 'reactstrap';

import CancerExplorationImg from '../../assets/imgs/cancer.png';
import CarsImg from '../../assets/imgs/cars.png';
import DissMp4 from '../../assets/mp4s/projects/diss.mp4';
import CarMp4 from '../../assets/mp4s/projects/mountaincar.mp4';
import SiteMp4 from '../../assets/mp4s/projects/website.mp4';

import './projects.scss';

export const Projects = () => {

    type Project = {
        name: string;
        src: string;
        type: 'img' | 'mp4';
        description: string;
        link: string; 
        color: string;
    }

    const renderCard = (project: Project) => {
        
        const hoverOn = (event : React.MouseEvent) => {
            if(project.type==='mp4'){
                const target = document.getElementById(project.name) as HTMLVideoElement
                target.play()
            }
        }

        const hoverOff = (event : React.MouseEvent) => {
            if(project.type==='mp4'){
                const target = document.getElementById(project.name) as HTMLVideoElement
                target.pause()
            }
        }

        return (
            <Card className='project-card' key={project.name} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                {project.type === 'img'
                ? <CardImg className='card-background' src={project.src} />
                : <video   className='card-background' src={project.src} id={project.name} disableRemotePlayback loop muted playsInline></video> }
                <a href={project.link} style={{ color: `${project.color}` }}>
                    <CardImgOverlay>
                        <h4 className='card-title'>{project.name}</h4>
                        <p className='card-body'>{project.description}</p>
                    </CardImgOverlay>
                </a>         
            </Card>
        );
    };
    
    const renderCards = () => {
        const projects = [
            {
                name: 'Cancer Exploration',
                src: CancerExplorationImg,
                type: 'img',
                description: 'An exploration of the genetic structure of cancers using machine learning techniques.',
                link: 'https://github.com/lukemccl/CancerExploration',
                color: 'black'
            },
            {
                name: 'Gym Form Check',
                src: DissMp4,
                type: 'mp4',
                description: 'A Computer Vision project to classify correct form in the gym.',
                link: 'https://github.com/lukemccl/GymFormCheck',
                color: 'white'
            },
            {
                name: 'This website',
                src: SiteMp4,
                type: 'mp4',
                description: 'This website, which is built using ReactJS and deployed using GitHub Pages.',
                link: 'https://github.com/lukemccl/lukemccl.github.io',
                color: 'white'
            },
            {
                name: 'Used Car Regression',
                src: CarsImg,
                type: 'img',
                description: 'A project to predict the price of a used car given data sourced from craigslist.',
                link: 'https://github.com/lukemccl/UsedCarsML',
                color: 'black'
            },
            {
                name: 'Machine Learning Labs',
                src: CarMp4,
                type: 'mp4',
                description: 'A series of labs to explore both deep learning and reinforcement learning.',
                link: 'https://github.com/lukemccl/ML-Labs',
                color: 'black'
            },
        ] as Project[];

        return projects.map(renderCard)
    }

    return (
        <div id='Projects' className='section projects'>
            <div className='section-header'>
                <h4 className='section-title'>Projects</h4>
                <h6 className='section-subtitle'>A showcase of some of my proudest projects</h6>
            </div>
            <div className="section-body row row-cols-auto project-cards">
                {renderCards()}
            </div>
        </div>    
    );
}