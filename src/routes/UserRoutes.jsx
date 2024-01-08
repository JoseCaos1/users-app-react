import React, { useState } from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {Navbar} from '../components/layout/Navbar';
import {UserProvider} from '../context/UserProvider';
import {useUsers} from '../hooks/useUsers';
import {RegisterPage} from '../pages/RegisterPage';
import {UsersPage} from '../pages/UsersPage';

export const UserRoutes = ( {login, handlerLogout} ) => {

  return (
    <>
      <UserProvider>
        <Navbar login={login} handlerLogout={handlerLogout}/>
        <Routes>
          <Route path='users' element={<UsersPage
            users={users}
            userSelected={userSelected}
            initialUserForm={initialUserForm}
            visibleForm={visibleForm}
            handlerAddUser={handlerAddUser}
            handlerRemoveUser={handlerRemoveUser}
            handlerUserSelectedForm={handlerUserSelectedForm}
            handlerOpenForm={handlerOpenForm}
            handlerCloseForm={handlerCloseForm}
          />} />

          <Route path='users/register' element={<RegisterPage
            handlerAddUser={handlerAddUser}
            initialUserForm={initialUserForm} />} />

          <Route path='users/edit/:id' element={<RegisterPage
            users={users}
            handlerAddUser={handlerAddUser}
            initialUserForm={initialUserForm} />} />

          <Route path='/' element={<Navigate to="/users" />}/>
        </Routes>
      </UserProvider>
    </>
  );
}
