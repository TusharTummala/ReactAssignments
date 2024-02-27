

// // // export default Assignment1;
// // import image1 from './images/image1.jpg';
// // import image2 from './images/image2.jpg';

// // import React, { useState } from 'react';

// // const Assignment1 = () => {
// //   // State for dynamic content
// //   const [content, setContent] = useState("Hello, world!");

// //   // Array for iteration
// //   const items = ["Item 1", "Item 2", "Item 3"];

// //   return (
// //     <div className="container mt-5">
// //       <div className="row">
// //         <div className="col-md-6 mb-4">
// //           <div className="card">
// //             <div className="card-body">
// //               {/* Dynamic content */}
// //               <h5 className="card-title">Dynamic Content</h5>
// //               <p className="card-text">{content}</p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="col-md-6 mb-4">
// //           <div className="card">
// //             <div className="card-body">
// //               {/* Array iteration */}
// //               <h5 className="card-title">Array Items</h5>
// //               {items.map((item, index) => (
// //                 <p key={index} className="card-text">{item}</p>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="row">
// //         <div className="col-md-6 mb-4">
// //           <div className="card">
// //             <div className="card-body">
// //               {/* Bootstrap test */}
// //               <h5 className="card-title">Bootstrap Test</h5>
// //               <button className="btn btn-primary">Bootstrap Button</button>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="col-md-6 mb-4">
// //           <div className="card">
// //             <div className="card-body">
// //               {/* Using CDN links */}
// //               <h5 className="card-title">CDN Images</h5>
// //               <img src="https://picsum.photos/200/300?random" alt="Random Image 1 from CDN" className="img-fluid mb-2" />
// //               <img src="https://picsum.photos/300/200?random" alt="Random Image 2 from CDN" className="img-fluid" />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="row">
// //         <div className="col-md-6">
// //         <div className="card">
// //   <div className="card-body">
// //     {/* Using local images */}
// //     <h5 className="card-title">Local Images</h5>
// //     <img src={image1} alt="Local Image 1" className="img-fluid mb-2" />
// //     <img src={image2} alt="Local Image 2" className="img-fluid" />
// //   </div>
// // </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Assignment1;



// import React, { useState } from 'react';
// import image1 from './images/image1.jpg';
// import image2 from './images/image2.jpg';

// const Assignment1 = () => {
//   // State for dynamic content
//   const [content, setContent] = useState("Hello, world!");

//   // Array for iteration
//   const items = ["Item 1", "Item 2", "Item 3"];

//   return (
//     <div className="container-fluid py-5" style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
//       <div className="row justify-content-center">
//         <div className="col-md-6 mb-4">
//           <div className="card">
//             <div className="card-body">
//               {/* Dynamic content */}
//               <h5 className="card-title">Dynamic Content</h5>
//               <p className="card-text">{content}</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-6 mb-4">
//           <div className="card">
//             <div className="card-body">
//               {/* Array iteration */}
//               <h5 className="card-title">Array Items</h5>
//               {items.map((item, index) => (
//                 <p key={index} className="card-text">{item}</p>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row justify-content-center">
//         <div className="col-md-6 mb-4">
//           <div className="card">
//             <div className="card-body">
//               {/* Bootstrap test */}
//               <h5 className="card-title">Bootstrap Test</h5>
//               <button className="btn btn-primary">Bootstrap Button</button>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-6 mb-4">
//           <div className="card">
//             <div className="card-body">
//               {/* Using CDN links */}
//               <h5 className="card-title">CDN Images</h5>
//               <img src="https://picsum.photos/200/300?random" alt="Random Image 1 from CDN" className="img-fluid mb-2" />
//               <img src="https://picsum.photos/300/200?random" alt="Random Image 2 from CDN" className="img-fluid" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               {/* Using local images */}
//               <h5 className="card-title">Local Images</h5>
//               <img src={image1} alt="Local Image 1" className="img-fluid mb-2" />
//               <img src={image2} alt="Local Image 2" className="img-fluid" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Assignment1;



import React, { useState } from 'react';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';

const Assignment1 = () => {
  // State for dynamic content
  const [content, setContent] = useState("Hello, world!");
  // State to track image source selection
  const [showLocalImages, setShowLocalImages] = useState(false);

  // Array for iteration
  const items = ["Item 1", "Item 2", "Item 3"];

  const handleImageSourceToggle = () => {
    setShowLocalImages(!showLocalImages);
  };

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              {/* Dynamic content */}
              <h5 className="card-title">Dynamic Content</h5>
              <p className="card-text">{content}</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              {/* Array iteration */}
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
              {/* Bootstrap test */}
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
              {/* Using images based on the toggle state */}
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
