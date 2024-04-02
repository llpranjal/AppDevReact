import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mynavbar from './navbar'

function Home() {
  const [showImages, setShowImages] = useState(false);
  
  const items = [
    { src: "Orange-colored-cat-yawns-displaying-teeth.webp", width: '400' },
    { src: "catgif.gif", width: '300' },
    { src: 'sleepy.jpg', width: '300' }
  ];

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>Click the button below to see cute cats!</p>
      <button onClick={() => setShowImages(!showImages)}>
        {showImages ? 'Hide Cats' : 'Show Cats'}
      </button>

      {showImages && (
        <div>
          <h3>Cute Photos Of Cats</h3>
          <div>
            {items.map((item, index) => (
              <img key={index} src={item.src} width={item.width} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
