"use client"
import React,{useEffect} from 'react';
import { useAppSelector,useAppDispatch } from './hooks/hooks';
import { fetchAllMangas } from './redux/actions';
import {Manga} from './types/types';
import NavBar from './components/NavBar/NavBar';


const Home: React.FC = () => {
 
  const dispatch = useAppDispatch();
  const mangas = useAppSelector((state) => state.mangas.mangasAll);
  console.log(mangas);
  
  useEffect(()=>{
    dispatch(fetchAllMangas())
  },[dispatch])

  return (
    <main>
      <NavBar/>
      <p>asddassd</p>
      {mangas.map((manga: Manga) => (
        <div key={manga.id}>
          <h3>{manga.tittle}</h3>
          <p>{manga.description}</p>
        </div>
      ))}
    </main>
  )
}
export default Home