import React, { useState, useEffect, useRef } from 'react';
import Questions from './components/Questions/Questions';
import qs from './data/questions';
import programs from './data/programs';

function App() {
  return (
    <Questions qs={qs} programs={programs}></Questions>
  )
};

export default App;
