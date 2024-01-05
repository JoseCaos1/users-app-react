import {useReducer, useState} from "react";
import Swal from "sweetalert2";
import {userReducer} from "../reducers/usersReducer";

const initialUsers=[
  {
    id:1,
    username: 'Jose',
    password: '12345',
    email: 'jose@gmail.com'
  },
]

const initialUserForm = {
  id: 0,
  username: '',
  password:"",
  email:"",
}

export const useUsers =()=>{

  const [users, dispatch] =useReducer(userReducer, initialUsers);
  const [userSelected, setUserSelected]= useState(initialUserForm);

  //Agregar o actualizar
  const handlerAddUser =(user)=>{
    let type;
    let title;
    let icon;

    if (user.id ===0 ){
      type ='addUser';
      title: "Usuario creado";
    }else{
      type ='updateUser';
      title: "Usuario actualizado"
    }

    dispatch({
      type,
      payload: user,
    });

    Swal.fire({
      title,
      text: `El usuario ha sido ${user.id === 0  ? 'creado' : 'actualizado'} con exito`,
      icon: "question"
    });
  }

  const handlerRemoveUser =(id)=>{

    Swal.fire({
      title: "¿Estas seguro que desea eliminar?",
      text: "Cuidado el usuario sera eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"

    }).then((result) => {
      if (result.isConfirmed) {

        dispatch({
          type: 'removeUser',
          payload: id,
        });

        Swal.fire({
          title: "Usuario Eliminado!",
          text: "El usuario a sido eliminado con exito",
          icon: "success"
        });
      }
    });
  }

  const handlerUserSelectedForm=(user)=>{
    console.log(user);
    setUserSelected({ ...user })
  }

  return{
    users,
    userSelected,
    initialUserForm,

    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
  }
}
