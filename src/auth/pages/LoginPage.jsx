import React, { useState } from 'react';

export const LoginPage = () => {
  return (
    <>
      <div className="modal" style={ {display: 'block'} } tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
            </div>
            <form>
              <div className="modal-body">
                <input
                  className='form-control my-3 w-75'
                  type="text"
                  placeholder='UserName'
                  name="username"
                />
                <input
                  className='form-control my-3 w-75'
                  type="password"
                  placeholder='Password'
                  name="password"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
