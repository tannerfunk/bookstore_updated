import React from 'react';

//very simple page that just links to external baconsale site
function PodcastsPage() {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
        >
          <div className="text-center mb-4">
            <h1>My Podcasts</h1>
            <h4><a href="https://baconsale.com/">Check out our stuff!</a></h4>
          </div>
          
          
      </div>
    );
  }
  
  export default PodcastsPage;