import React from 'react';

import { Navbar } from './navbar/navbar';
import { Welcome } from '../sections/welcome/welcome';
import { Career } from '../sections/career/career';
import { Projects } from '../sections/projects/projects';
import { Hobbies } from '../sections/hobbies/hobbies';
import { Contact } from '../sections/contact/contact';

import './App.scss';

function App() {
  return (
    <div className="App line-in-middle">

      <Navbar sections={['Home', 'Career', 'Projects', 'Hobbies', 'Contact']}/>

      <div className='app-body'>
        <Welcome />
        <Career />
        <Projects />
        <Hobbies />
        <Contact />
      </div>
    </div>
  );
}

export default App;
