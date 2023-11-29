import { useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store/store'
 
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector

export const useUserState = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessages, setErrorMessages] = useState({ emailError: "", passwordError: "" });

  return {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    errorMessages, 
    setErrorMessages
  };
};

export const postMangaState = ()=>{
  const [tittle, setTittle] =useState("")
  const [description, setDescription] =useState("")
  const [allSelectedGeneres,setAllSelectedGeneres]= useState<string[]>([])
  return {
    tittle,
    setTittle,
    description,
    setDescription,
    allSelectedGeneres,
    setAllSelectedGeneres
  }
}