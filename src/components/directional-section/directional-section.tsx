import React, { ReactNode } from 'react';

import './directional-section.scss';

export interface DirectionalSectionProps {
    title: string;
    body: ReactNode;
    altBody: ReactNode[];
    direction?: 'left' | 'right';
    card?: boolean;
};

export const DirectionalSection = (props: DirectionalSectionProps) => {

    const {
        title,
        body,
        altBody,
        direction = 'left',
        card = true
    } = props;

    const titlePanel = () => {
        return (
            <div className='directional-section-title-panel col'>
                <h3 className='card-title'>{title}</h3>
                {body}
            </div>
        );
    }

    const bodyCols = () => (
        altBody.map(b => <div className='col'>{b}</div>)
    )

    return (
        <div className={`directional-section ${card ? 'card' : ''}`}>
            <div className={`row ${card ? 'card-body' : ''}`} >
                {direction === 'left' ? titlePanel() : bodyCols()}
                {direction === 'left' ? bodyCols() : titlePanel()}
            </div>
        </div>
    );
}