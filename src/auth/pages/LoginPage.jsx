import React, { useState } from 'react';
import Swal from 'sweetalert2';

const initialLoginForm={
  username: '',
  password: '',
}

export const LoginPage = () => {
  const [loginForm, setLoginForm] = useState(initialLoginForm)
  const { username, password }= loginForm;

  const onInputChange= ({target})=>{
    const {name, value} = target;
    //console.log(name + ': ' + target.value);

    setLoginForm({
      ...loginForm,
        [name]: value,
    })
    //console.log(loginForm);
  }

  const onSubmit=(event)=>{
    //console.log('submit');
    event.preventDefault();

    if(!username || !password){
      //console.log("ingrese user y password");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario y Password requeridos ",
      });
    }
    //Implementamos el login
    if( username==="admin" && password ==="12345" ){
      //handlerLogin();
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Username o password invalidos",
      });
    }
    //Reiniciamos los datos del formulario
    setLoginForm(initialLoginForm);
  }

  return (
    <>
      <div className="modal" style={ {display: 'block'} } tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
            </div>
            <form onSubmit={onSubmit}>
              <div className="modal-body">
                <input
                  className='form-control my-3 w-75'
                  type="text"
                  placeholder='UserName'
                  name="username"
                  value={username}
                  onChange={onInputChange}
                />
                <input
                  className='form-control my-3 w-75'
                  type="password"
                  placeholder='Password'
                  name="password"
                  value={password}
                  onChange={onInputChange}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
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
