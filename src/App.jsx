import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const audio = document.getElementById('background-audio');
    audio.play().catch(error => {
      console.log('Autoplay blocked:', error);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>جمعة مباركة</h1>
        <p>كل جمعة وأنتم إلى الله أقرب</p>
        <img src="/img/handseekinghelp.png" alt="Hand Seeking Help" className="jummah-image" />
      </header>

      {/* Native HTML5 Audio for Background Music */}
<audio id="background-audio" src="/audio/062.mp3" autoPlay loop  />

      
      {/* Footer */}
      <footer className="footer">
        <p>Powered by: <span className="footer-name">Balikis Omolewa</span></p>
      </footer>
    </div>
  );
}

export default App;
