import React, { useContext, useState } from 'react';
import {UserContext} from '../context/UserContext';
import {UserForm} from './UserForm';

export const UserModalForms = () => {

  const { userSelected, handlerCloseForm } =useContext(UserContext);

  return (
    <>
      <div className="abril-modal animacion fadeIn">
        <div className="modal" style={ {display: "block"} } tabIndex="-1">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  { userSelected.id > 0 ? 'Editar' : 'Crear' }
                </h5>
              </div>
              <div className="modal-body">
                <UserForm
                  userSelected={userSelected}
                  handlerCloseForm={handlerCloseForm}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
