import React from 'react';
import joel from '../JoelHiltonHeadshot.jpg';

// home page that includes a photo
function HomePage() {
    return (
      <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
      >
        <div className="text-center mb-4">
            <h1>Joel Hilton Movie Collection App</h1>
            <h5>Come, <em>be entertained.</em></h5>
            <img src={joel} alt="Joel" className="img-fluid rounded" style={{ maxWidth: '300px' }} />
        </div>
        
        
      </div>
    );
  }
  
  export default HomePage;