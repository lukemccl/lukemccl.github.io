import React from 'react';
import { PowerliftingInterest } from './powerlifting/powerlifting';

import './interests.scss';

export const Interests = () => {

    return <div className='section interests' id='Interests'>
        <PowerliftingInterest />
    </div>;
}