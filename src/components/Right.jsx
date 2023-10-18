import React from 'react';
import Upper from './upper';
import Graph from './Graph';
import First from './first';
import Bottom from './bottom';


const Right = () => {
  return (
    <div className="rightpartmain">
        <Upper />
        <First />
        <Graph />
        <Bottom />
    </div>
  )
}

export default Right