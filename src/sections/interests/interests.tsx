import React from 'react';
import { PowerliftingInterest } from './powerlifting/powerlifting';

import './interests.scss';

export const Interests = () => {

    return <div className='section interests' id='Interests'>
        <div className='section-header'>
            <h4 className='section-title'>Interests</h4>
            <h6 className='section-subtitle'>Things I like to do in my spare time</h6>
        </div>
        <div className='section-body'>
            <PowerliftingInterest />
        </div>
    </div>;
}