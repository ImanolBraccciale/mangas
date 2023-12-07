"use client"
import { useAppSelector,useAppDispatch } from "../../hooks/hooks";
import { fetchMangasID } from "@/app/redux/actions"
import Link from "next/link";
 
import { useEffect } from "react"

interface Props {
    params: {
        id: string;
    };
}
const DetailManga:React.FC<Props> =   (props) => {
    const id = props.params.id
    const dispatch = useAppDispatch()
    const mangaid = useAppSelector((state:any) => state.mangas.mangaID);
    const  chapters =mangaid.chapters
    
    useEffect(() => {
    dispatch(fetchMangasID(id));
 
    }, [dispatch,id]);
 
    return (
        <>
        <p>asdas</p>
        <h1>{mangaid.tittle}</h1>
        <p>{mangaid.description}</p>
        <p>{mangaid.status}</p>
        {
            chapters?.map((chapter:any)=> (
                <div key={chapter.ID_Chapter}>
                    <h3>{chapter.tittle}</h3>
                    <p>{chapter.Number}</p>

                </div>
            ))
        }
          <Link href="/formChapter" > 
        <button >Crear capitulo</button>
          </Link>
        </>
    )
}
export default DetailManga