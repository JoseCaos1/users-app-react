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
    //console.log(target.value);
    const { name, value }=target;
    setUserForm({
      ...userForm,
      [name]: value,
    })
    console.log(userForm);
  }

  return (
    <>
      <form>
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
