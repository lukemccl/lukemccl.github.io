
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileLines, faPhone,  } from '@fortawesome/free-solid-svg-icons';

import './contact.scss';

export const Contact = () => {

    type ContactType = {
        name: string;
        icon: IconProp;
        link?: string;
    };

    const renderCard = (header: string, body: ContactType[]) => (
        <Card className='contact-card'>
            <CardHeader className='contact-header'>{header}</CardHeader>
            <CardBody>
                {body.map(b => 
                    b.link 
                    ? <a key={b.name} href={b.link} className='contact-item'>
                        <FontAwesomeIcon icon={b.icon} size='4x'/>
                        {b.name}
                    </a>
                    : <div key={b.name} className='contact-item'>
                        <FontAwesomeIcon icon={b.icon} size='4x'/>
                        {b.name}
                    </div>
                )}
            </CardBody>
        </Card>
    );

    const professional = () => 
        renderCard('Professional', [
            {name: 'LinkedIn', icon: faLinkedin, link: 'https://www.linkedin.com/in/luke-mcclure/'},
            {name: 'lukemcclure71@gmail.com', icon: faEnvelope, link: 'mailto:lukemcclure71@gmail.com'}
        ]);

    const personal = () => 
        renderCard('Personal', [
            {name: 'Instagram', icon: faInstagram, link: 'https://www.instagram.com/l.mccl/'},
            {name: 'GitHub', icon: faGithub, link: 'https://github.com/lukemccl'}
        ]);

    const other = () => 
        renderCard('Other', [
            {name: 'Phone', icon: faPhone},
            {name: 'CV', icon: faFileLines, link: 'CV-Luke-McClure.pdf'}
        ]);  

    return (
        <div
            id='Contact'
            className='section contact'>
            <div className='section-header'>
                <h4>Contact</h4>
                <h6>A few ways to get in contact with me</h6>
            </div>
            <div className='section-body row row-cols-auto contact-cards'>
               {professional()}
                {personal()}
                {other()}
            </div>
        </div>
    );
}