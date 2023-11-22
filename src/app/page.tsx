"use client"
import React,{useEffect} from 'react';
import { useAppSelector,useAppDispatch } from './hooks/hooks';
import Manga from './types/types';
import { fetchAllMangas } from './redux/actions';


const Home: React.FC = () => {
 
  const dispatch = useAppDispatch();
  const mangas = useAppSelector((state) => state.mangas.mangasAll);
  console.log(mangas);
  
  useEffect(()=>{
    dispatch(fetchAllMangas())
  },[dispatch])

  return (
    <main>
      <p>asddassd</p>
      {mangas.map((manga: Manga) => (
        <div key={manga.id}>
          <h3>{manga.tittle}</h3>
          <p>{manga.description
}</p>
        </div>
      ))}
    </main>
  )
}
export default Home