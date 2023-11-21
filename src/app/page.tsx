"use client"

import React  from 'react';
 import {useAppSelector } from './hooks/hooks';
 import Manga from './types/types';


 const Home: React.FC =()=> {
 
  const mangas = useAppSelector((state) => state.mangas.mangasAll);

  return (
   <main>
    
   {mangas.map((manga:Manga) => (
        <div key={manga.id}>
          <h3>{manga.title}</h3>
          <p>{manga.genre}</p>
        </div>
      ))}
   </main>
  )
}
export default Home