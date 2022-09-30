import React from 'react';

import { Navbar } from './navbar/navbar';
import { About } from '../sections/about/about';
import { Career } from '../sections/career/career';
import { Projects } from '../sections/projects/projects';
import { Interests } from '../sections/interests/interests';
import { Contact } from '../sections/contact/contact';

import './App.scss';

function App() {
  return (
    <div className="App line-in-middle">
      <Navbar sections={['About', 'Career', 'Projects', 'Interests', 'Contact']}/>
      <div className='app-body'>
        <About />
        <Career />
        <Projects />
        <Interests />
        <Contact />
      </div>
    </div>
  );
}

export default App;
