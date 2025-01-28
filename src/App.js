import React from 'react';
import DefaultOptions from './components/DefaultOptions';

import './App.css';

function App() {
  return (
    <>
    <h1 className='text-4xl font-bold m-auto text-center p-10'>XZoom</h1>
    <p className='text-3xl font-semibold ml-28 p-3'>Demo</p>
    <ul  className='ml-28 text-blue-400 '>
      ◾<a href='/DefaultOptions'>Default Options</a><br/>
      {/* ◾<a href='/OutputWindow'>Output Window</a><br/>
      ◾<a href='/LensOption'>Lens Option</a><br/>
      ◾<a href='/FencyBox'>WIth Fency Box</a><br/>
      ◾<a href='/MagnificPopUp'>With Magnific PopUp</a><br/> */}
    </ul>
    <DefaultOptions/>
    </>
  );
}

export default App;
