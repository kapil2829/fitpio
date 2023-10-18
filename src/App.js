import React from 'react'

import './styles/Nevbar.css';
import './styles/Graph.css';
import './styles/first.css';
import './styles/main.css';
import './styles/upper.css';
import './styles/bottom.css';

import Nevbar from './components/nevbar';
import Right from './components/Right';



const App = () => {
  return (
    <>
    <div className="mainpage">
      <Nevbar />
      <Right />
    </div>
    </>
  )
}
export default App
