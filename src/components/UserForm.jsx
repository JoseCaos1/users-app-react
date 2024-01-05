import React, { useEffect, useState } from 'react';

export const UserForm = ({ userSelected, handlerAddUser, initialUserForm }) => {

  const [ userForm, setUserForm ] = useState(initialUserForm);

  const { id, username, password, email }= userForm;

  useEffect(()=>{
    setUserForm({
      ...userSelected,
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
    if(!username || !password || !email){
      alert('Debe completar los campos en el formulario');
      return;
    }
    console.log(userForm);
    handlerAddUser(userForm);
    //Guardar el user form en el listado del formulario
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
        <input
          className='form-control my-3 w-75'
          placeholder='Password'
          type="password"
          value={password}
          name="password"
        onChange={onInputChange}
        />
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
      </form>
    </>
  );
}
