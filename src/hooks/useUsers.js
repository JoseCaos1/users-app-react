import {useReducer, useState} from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {userReducer} from "../reducers/usersReducer";
import {findAll} from "../services/userService";

const initialUsers=[]

const initialUserForm = {
  id: 0,
  username: '',
  password:"",
  email:"",
}

export const useUsers =()=>{

  const [users, dispatch] =useReducer(userReducer, initialUsers);
  const [userSelected, setUserSelected]= useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false)
  const navigate =useNavigate();

  const getUsers = async()=>{
    const result = await findAll();
    console.log(result);
    dispatch({
      type: 'loadingUsers',
      payload: result.data,
    })
  }

  //Agregar o actualizar
  const handlerAddUser =(user)=>{

    dispatch({
      type :(user.id ===0) ? 'addUser' : 'updateUser',
      payload: user,
    });

    Swal.fire({
      title: (user.id ===0) ? 'Usuario creado' : 'Usuario actualizado',
      text: `El usuario ha sido ${user.id === 0  ? 'creado' : 'actualizado'} con exito`,
      icon: "success"
    });
    handlerCloseForm();
    navigate('/users')
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
    setVisibleForm(true)
    setUserSelected({ ...user })
  }

  const handlerOpenForm = ()=>{
    setVisibleForm(true)
  }
  const handlerCloseForm = ()=>{
    setVisibleForm(false)
    setUserSelected(initialUserForm)
  }

  return{
    users,
    userSelected,
    initialUserForm,
    visibleForm,

    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    getUsers
  }
}
