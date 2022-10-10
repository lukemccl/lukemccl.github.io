import React from 'react';

import { Navbar } from './navbar/navbar';
import { Home } from '../sections/home/home';
import { About } from '../sections/about/about';
import { Career } from '../sections/career/career';
import { Skills } from '../sections/skills/skills';
import { Projects } from '../sections/projects/projects';
import { Interests } from '../sections/interests/interests';
import { Contact } from '../sections/contact/contact';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar sections={['Home', 'About', 'Career', 'Skills', 'Projects', 'Interests']}/>
      <div className='app-body'>
        <Home />
        <About />
        <Career />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </div>
    </div>
  );
}

export default App;
