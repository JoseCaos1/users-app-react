import React, { useContext, useState } from 'react';
import {NavLink} from 'react-router-dom';
import {UserContext} from '../context/UserContext';

export const UserRow = ({
  id,
  username,
  email,
  password }) => {

  const { handlerUserSelectedForm, handlerRemoveUser } = useContext(UserContext);
  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>
          <button
            type='button'
            className='btn btn-secondary btn-sm'
            onClick={()=> handlerUserSelectedForm({
              id,
              username,
              email,
            })}
          >
            update
          </button>
        </td>
        <td>
          <NavLink
            className={'btn btn-secondary btn-sm'}
            to={'/users/edit/' + id}>
            Update Route
          </NavLink>
        </td>
        <td>
          <button
            type='button'
            className='btn btn-danger btn-sm'
            onClick={()=>handlerRemoveUser(id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
