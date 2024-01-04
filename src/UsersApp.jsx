import React, { useState } from 'react';
import {UserForm} from './components/UserForm';
import {UsersList} from './components/UsersList';

const initialUsers=[
  {
    id:1,
    username: 'Jose',
    password: '12345',
    email: 'jose@gmail.com'
  },
]

{/*TODO: USER APP*/}
export const UsersApp = () => {


  return (
    <>
      <div className='container my-4'>
        <h2>User App</h2>
        <div className="row">
          <div className="col">
            <UserForm/>
          </div>
          <div className="col">
            <UsersList users={initialUsers}/>
          </div>
        </div>
      </div>
    </>
  );
}
