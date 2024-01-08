import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import {UserContext} from '../context/UserContext';

export const UserForm = ({
  userSelected,
  handlerCloseForm
}) => {

  const { initialUserForm, handlerAddUser } = useContext(UserContext);

  const [ userForm, setUserForm ] = useState(initialUserForm);

  const { id, username, password, email }= userForm;

  useEffect(()=>{
    setUserForm({
      ...userSelected,
      password: '', //limpiamos el password
    })
  },[userSelected])

  const onInputChange=({target})=>{
    const { name, value }=target;
    setUserForm({
      ...userForm,
      [name]: value,
    })
  }

  const onSubmit =(event)=>{
    event.preventDefault();
    if(!username || ( !password && id===0 ) || !email){

      Swal.fire({
        title: "Error de validacion",
        text: "Debe completar los campos en el formulario",
        icon: "error"
      });
      return;
    }

    if(!email.includes('@')){
      Swal.fire({
        title: "Error de validacion email",
        text: "El email debe ser valido, incluir un @",
        icon: "error"
      });
      return;
    }

    //console.log(userForm);
    handlerAddUser(userForm);
    //Guardar el user form en el listado del formulario
    setUserForm(initialUserForm);
  }

  const onCloseForm=()=>{
    handlerCloseForm();
    setUserForm(initialUserForm);
  }

  return (
    <>
      <form onSubmit={ onSubmit }>
        <input
          className='form-control my-3 w-75'
          placeholder='Username'
          name="username"
          value={username}
          onChange={onInputChange}
        />
        {/* Todo: otra forma es { { id>0 ? '' : 'Crear' } }*/}

        { id>0 || <input
            className='form-control my-3 w-75'
            placeholder='Password'
            type="password"
            value={password}
            name="password"
          onChange={onInputChange}
          />
        }
        <input
          className='form-control my-3 w-75'
          placeholder='Email'
          value={email}
          name="email"
          onChange={onInputChange}
        />
        <input
          type="hidden"
          name="id"
          value={id}
        />
        <button
          className='btn btn-primary btn-sm'
          type='submit'
        >
          { id>0 ? 'Editar' : 'Crear' }
        </button>

        {
        !handlerCloseForm ||<button
            type='button'
            className='btn btn-primary my-2 btn-sm'
            onClick={()=> onCloseForm()}
          >
            Cerrar
          </button>
        }

      </form>
    </>
  );
}
