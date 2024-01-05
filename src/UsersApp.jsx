import React, { useReducer, useState } from 'react';
import Swal from 'sweetalert2';
import {LoginPage} from './auth/pages/LoginPage';
import {loginReducer} from './auth/reducers/loginReducer';
import {UsersPage} from './pages/UsersPage';

const initialLogin = {
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
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Username o password invalidos",
      });
    }

  }
  return (
    <>
      {
        login.isAuth
        ? <UsersPage/>
        : <LoginPage handlerLogin={handlerLogin}/>
      }

      {/*<UsersPage/>*/}
    </>
  );
}
