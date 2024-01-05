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

const initialUserForm = {
  id: 0,
  username: '',
  password:"",
  email:"",
}

{/*TODO: USER APP*/}
export const UsersApp = () => {

  const [users, dispatch] =useReducer(userReducer, initialUsers);
  const [userSelected, setUserSelected]= useState(initialUserForm);

  const handlerAddUser =(user)=>{
    //console.log(user);

    let type;

    if (user.id ===0 ){
      type ='addUser';
    }else{
      type ='updateUser';
    }

    dispatch({
      //type: type,
      type,
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

  //seleccionar a usuario
  const handlerUserSelectedForm=(user)=>{
    console.log(user);
    setUserSelected({ ...user })
  }

  return (
    <>
      <div className='container my-4'>
        <h2>User App</h2>
        <div className="row">
          <div className="col">
            <UserForm
              userSelected={userSelected}
              handlerAddUser={handlerAddUser}
              initialUserForm ={initialUserForm}
            />
          </div>
          <div className="col">
            {
              users.length ===0
                ? <div className="alert alert-warning">No hay usuarios en el sistema</div>
                : <UsersList
                    users={users}
                    handlerRemoveUser={handlerRemoveUser}
                    handlerUserSelectedForm={handlerUserSelectedForm}
                  />
            }
          </div>
        </div>
      </div>
    </>
  );
}
