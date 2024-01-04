import React, { useState } from 'react';

const initialUserForm = {
  username: '',
  password:"",
  email:"",
}

export const UserForm = () => {

  const [ userForm, setUserForm ] = useState(initialUserForm);

  const { username, password, email }= userForm;

  const onInputChange=({target})=>{
    const { name, value }=target;
    setUserForm({
      ...userForm,
      [name]: value,
    })
  }

  const onSubmit = (event)=>{
    event.preventDefault();
    //console.log(userForm);
    if(!username || !password || !email){
      alert('Debe completar los campos en el formulario');
      return;
    }
    //Guardar el user form en el listado del formulario
    setUserForm(initialUserForm);
  }

  return (
    <>
      <form onSubmit={ onSubmit }>
        <input
          className='form-control my-3 w-75'
          placeholder='Username'
          type="text"
          name={username}
          onChange={onInputChange}
        />
        <input
          className='form-control my-3 w-75'
          placeholder='Password'
          type="password"
          name={password}
        onChange={onInputChange}
        />
        <input
          className='form-control my-3 w-75'
          placeholder='Email'
          type="text"
          name={email}
          onChange={onInputChange}
        />
        <button
          className='btn btn-primary btn-sm'>
        Crear
        </button>
      </form>
    </>
  );
}
