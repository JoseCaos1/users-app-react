import {useReducer} from "react";
import Swal from "sweetalert2";
import {loginReducer} from "../reducers/loginReducer";
import {loginUser} from "../services/authServices";
import { useNavigate } from "react-router-dom";

//Si existe una login ya no, caso contrario si existe un login le pasamos este por defecto
const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
  isAuth : false,
  user: undefined,
}

export const useAuth =()=>{

  const [login, dispatch]=useReducer(loginReducer, initialLogin);
  const navigate=useNavigate()

  const handlerLogin=({username, password})=>{
    const isLogin= loginUser({username, password});

    if (isLogin){
      const  user = { username : 'admin'}
      dispatch({
        type: 'login',
        payload: user,
      });
      sessionStorage.setItem('login', JSON.stringify({
        isAuth: true,
        user,
      }));
      navigate('/users')
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Username o password invalidos",
      });
    }
  }

  const handlerLogout=()=>{
    dispatch({
      type: 'logout',
    });
    sessionStorage.removeItem('login')
  }

  return{
    login,
    handlerLogin,
    handlerLogout,
  }
}
