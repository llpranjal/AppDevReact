import { useState } from 'react'
import './App.css'

function Home() {
  const [catImages, setCatImages] = useState([]);

  const addCatImage = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      if (!response.ok) {
        throw new Error('Failed to fetch cat image');
      }
      const data = await response.json();
      const cat = {
        src: data[0].url,
        width: data[0].width,
      };
      setCatImages([...catImages, cat]);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  return (
    <div>
      <div>
        <img src = 'fishcat.jpg'></img>
      </div>
      <h1>Pranjal's Cutie Patootie Cat Generator</h1>

      <div className = "spam"> 
      <p>Click the button below to add a cute cat! <strong>SPAM IT!!!</strong></p>

      </div>
      <div className = 'addButton'>
        <button onClick={addCatImage}>Add Cat</button>
      </div>

      <div>
        <div className = 'catText'>
          <img className = 'leftArrow' src = 'down arrow.gif'></img>
          <h3>Cute Photos Of Cats</h3>
          <img className = 'rightArrow' src = 'down arrow.gif'></img>

        </div>
        <div className="cat-images">
          {catImages.map((cat, index) => (
            <img key={index} src={cat.src} alt={`Cat ${index}`} width={cat.width} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;