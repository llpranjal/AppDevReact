import React from 'react';

export default function createNavBar( {items}){
    return (
        <nav>
          <h1>Photo Album</h1>
          <h3>Cute Photos Of Cats</h3>
          {items.map((item, index) => (
            <img key={index} src={item.src} width={item.width} />
          ))}
        </nav>
      );
    }