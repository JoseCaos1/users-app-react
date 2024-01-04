import React, { useState } from 'react';

export const UserForm = () => {
  return (
    <>
      <form>
        <input
          className='form-control my-3 w-75'
          placeholder='Username'
          type="text"
          name="username"
        />
        <input
          className='form-control my-3 w-75'
          placeholder='Password'
          type="text"
          name="password"
        />
        <input
          className='form-control my-3 w-75'
          placeholder='Email'
          type="text"
          name="email"
        />
      </form>
    </>
  );
}
