import React, { useReducer, useState } from 'react';
import Swal from 'sweetalert2';
import {LoginPage} from './auth/pages/LoginPage';
import {loginReducer} from './auth/reducers/loginReducer';
import {Navbar} from './components/layout/Navbar';
import {UsersPage} from './pages/UsersPage';

//Si existe una login ya no, caso contrario si existe un login le pasamos este por defecto
const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
  isAuth : false,
  user: undefined,
}

export const UserApp = () => {

  const [login, dispatch]=useReducer(loginReducer, initialLogin);

  const handlerLogin=({username, password})=>{
    console.log(username + " "+ password);

    if( username==="admin" && password ==="12345" ){
      const  user = { username : 'admin'}
      dispatch({
        type: 'login',
        payload: user,
      });
      sessionStorage.setItem('login', JSON.stringify({
        isAuth: true,
        user,
      }));
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

  return (
    <>
      {
        login.isAuth
          ? (<>
            <Navbar
              login={login}
              handlerLogout={handlerLogout}/>
            <UsersPage/>
            </>)
        : <LoginPage handlerLogin={handlerLogin}/>
      }

      {/*<UsersPage/>*/}
    </>
  );
}
