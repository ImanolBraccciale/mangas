"use client"
import React,{useEffect} from 'react';
import { useAppSelector,useAppDispatch } from './hooks/hooks';
import { fetchAllMangas } from './redux/actions';
import NavBar from './components/NavBar/NavBar';
import Link from 'next/link';


const Home: React.FC = () => {
 
  const dispatch = useAppDispatch();
  const mangas = useAppSelector((state) => state.mangas.mangasAll);

   
  
  useEffect(()=>{
    dispatch(fetchAllMangas())
  },[dispatch])

  return (
    <main>
      <NavBar/>
      <p>asddassd</p>
      {mangas.map((manga: any) => (
      <Link href={`/DetailManga/${manga.ID_Manga}`}>
        <div key={manga.tittle}>
          <h3>{manga.tittle}</h3>
          <p>{manga.description}</p>
        </div>
      </Link>
      ))}
    </main>
  )
}
export default Home