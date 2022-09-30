import React, { ReactNode } from 'react';

import './directional-section.scss';

export interface DirectionalSectionProps {
    title: string;
    subtitle: ReactNode;
    body: ReactNode[];
    direction?: 'left' | 'right';
};

export const DirectionalSection = (props: DirectionalSectionProps) => {

    const {
        title,
        subtitle,
        body,
        direction = 'left'
    } = props;

    const titlePanel = () => {
        return (
            <div className='directional-section-title-panel col'>
                <h3 className='card-title'>{title}</h3>
                {subtitle}
            </div>
        );
    }

    const bodyCols = () => (
        body.map(b => <div className='col'>{b}</div>)
    )

    return <div className='directional-section card'>
        <div className='card-body row'>
            {direction === 'left' ? titlePanel() : bodyCols()}
            {direction === 'left' ? bodyCols() : titlePanel()}
        </div>
    </div>;
}