import React, { useReducer, useState } from 'react';
import {UserForm} from './components/UserForm';
import {UsersList} from './components/UsersList';
import {userReducer} from './reducers/usersReducer';

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

  const [users, dispatch] =useReducer(userReducer, initialUsers);

  const handlerAddUser =(user)=>{
    //console.log(user);
    dispatch({
      type: 'addUser',
      payload: user,
    })
  }

  const handlerRemoveUser =(id)=>{
    //console.log(id);
    dispatch({
      type: 'removeUser',
      payload: id,
    })
  }

  return (
    <>
      <div className='container my-4'>
        <h2>User App</h2>
        <div className="row">
          <div className="col">
            <UserForm
              handlerAddUser={handlerAddUser}
            />
          </div>
          <div className="col">
            <UsersList
              users={users}
              handlerRemoveUser={handlerRemoveUser}
            />
          </div>
        </div>
      </div>
    </>
  );
}
