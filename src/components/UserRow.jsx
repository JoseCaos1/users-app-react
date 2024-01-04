import React, { useState } from 'react';

export const UserRow = ({ handlerRemoveUser ,id, username, email }) => {

  const onRemoveUser=(id)=>{
    handlerRemoveUser(id);
  }

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
        >
          update
        </button>
        <button
          type='button'
          className='btn btn-danger btn-sm'
          onClick={()=>onRemoveUser(id)}
        >
          Delete
        </button>
        </td>
      </tr>
    </>
  );
}
