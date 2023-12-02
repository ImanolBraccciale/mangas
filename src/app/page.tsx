"use client"
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './hooks/hooks';
import { fetchAllMangas } from './redux/actions';
import { Generes, Manga } from './types/types';
import NavBar from './components/NavBar/NavBar';
import Link from 'next/link';


const Home: React.FC = () => {

  const dispatch = useAppDispatch();
  const mangas = useAppSelector((state) => state.mangas.mangasAll);
  console.log(mangas);

  useEffect(() => {
    dispatch(fetchAllMangas())
  }, [dispatch])

  return (
    <main>
      <NavBar />
      <p>asddassd</p>
      {mangas.map((manga:Manga) => (
        <div key={manga.ID_Manga}>
          <Link href={`/detilManga/${manga.ID_Manga}`}>
            <h3 >{manga.tittle}</h3>
            <p>{manga.description}</p>
          </Link>
          
          {
           manga.generes.map((genres)=>(
            <div key={genres.name}>{genres.name}</div>
           ))
          }
        </div>
      ))}
    </main>
  )
}
export default Home