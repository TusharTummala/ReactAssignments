




import React, { useState } from 'react';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';

const Assignment1 = () => {
 
  const [content,setContent] = useState("Hello, world!");
  
  const [showLocalImages, setShowLocalImages] = useState(false);

  
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  const handleImageSourceToggle = () => {
    setShowLocalImages(!showLocalImages);
  };

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
           
              <h5 className="card-title">Dynamic Content</h5>
              <p className="card-text">{content}</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              
              <h5 className="card-title">Array Items</h5>
              {items.map((item, index) => (
                <p key={index} className="card-text">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
             
              <h5 className="card-title">Bootstrap Test</h5>
              <button className="btn btn-primary" onClick={handleImageSourceToggle}>
                {showLocalImages ? "Show CDN Images" : "Show Local Images"}
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
            
              <h5 className="card-title">{showLocalImages ? "Local Images" : "CDN Images"}</h5>
              {showLocalImages ? (
                <>
                  <img src={image1} alt="Local Image 1" className="img-fluid mb-2" />
                  <img src={image2} alt="Local Image 2" className="img-fluid" />
                </>
              ) : (
                <>
                  <img src="https://picsum.photos/200/300?random" alt="Random Image 1 from CDN" className="img-fluid mb-2" />
                  <img src="https://picsum.photos/300/200?random" alt="Random Image 2 from CDN" className="img-fluid" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment1;
