import React, { useState } from 'react';
import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';
import car4 from '../images/car4.jpg';

function DefaultOptions() {
  const [selectedImage, setSelectedImage] = useState(car1);
  const [zoom, setZoom] = useState({ visible: false, x: 0, y: 0, boxX: 0, boxY: 0 });

  const handleImageClick = (selectedImage) => {
    setSelectedImage(selectedImage);
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; 
    const y = ((e.clientY - rect.top) / rect.height) * 100; 


    // for box sizes
    const boxX = e.clientX - rect.left - 50;
    const boxY = e.clientY - rect.top - 50; 

    setZoom({ visible: true, x, y, boxX, boxY });
  };

  const handleMouseLeave = () => {
    setZoom({ visible: false, x: 0, y: 0 });
  };

  return (
    <>
      <h1 className='text-3xl p-5 ml-28'>Default Option</h1>
      <div className='flex'>
        
        {/* Main Div for Image is here */}
        <div
          className='w-96 h-96 ml-32 cursor-crosshair relative'
          style={{
            boxShadow: '0px 0px 2px 2px rgba(0, 0, 0, 0.22)',
            position: 'relative',
            width: '380px',
            height: '380px',
            overflow: 'hidden',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img src={selectedImage} className='w-full h-full' alt='selectedImage' />
          
          {/* Pointer box show code */}
          {zoom.visible && (
            <div
              style={{
                position: 'absolute',
                width: '100px',
                height: '100px',
                border: '1px solid black',
                left: `${zoom.boxX}px`,
                top: `${zoom.boxY}px`,
                pointerEvents: 'none',
                background: 'rgba(255,255,255,0.5)',
                
              }}
            />
          )}
        </div>



        {/* Zoom Image Display code is here */}


        {zoom.visible && (
          <div
            className="zoom-container"
            style={{
              width: '380px',
              height: '380px',
              marginLeft: '7rem',
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: '300%',
              backgroundPosition: `${zoom.x}% ${zoom.y}%`,
              border: '1px solid #ccc',
              boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.22)',
            }}
          />
        )}
      </div>


      {/* Options for car are here*/}


      <div className='flex ml-28 pl-7 mb-20'>
        <img
          src={car1}
          className={`w-20 h-20 border ml-2 mt-0.5 cursor-pointer ${selectedImage === car1 ? 'border-blue-500' : 'border'}`}
          onClick={() => handleImageClick(car1)}
          alt='car1'
        />
        <img
          src={car2}
          className={`w-20 h-20 border ml-2 mt-0.5 cursor-pointer ${selectedImage === car2 ? 'border-blue-500' : 'border'}`}
          onClick={() => handleImageClick(car2)}
          alt='car2'
        />
        <img
          src={car3}
          className={`w-20 h-20 border ml-2 mt-0.5 cursor-pointer ${selectedImage === car3 ? 'border-blue-500' : 'border'}`}
          onClick={() => handleImageClick(car3)}
          alt='car3'
        />
        <img
          src={car4}
          className={`w-20 h-20 border ml-2 mt-0.5 cursor-pointer ${selectedImage === car4 ? 'border-blue-500' : 'border'}`}
          onClick={() => handleImageClick(car4)}
          alt='car4'
        />
      </div>

    </>
  );
}

export default DefaultOptions;
