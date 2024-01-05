import {UserForm} from './components/UserForm';
import {UserModalForms} from './components/UserModalForms';
import {UsersList} from './components/UsersList';
import {useUsers} from './hooks/useUsers';

export const UsersApp = () => {

const {
    users,
    userSelected,
    initialUserForm,
    visibleForm,

    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm
  }=useUsers();

  return (
    <>

      { !visibleForm ||
      <UserModalForms
        userSelected ={userSelected}
        initialUserForm={initialUserForm}
        handlerAddUser={handlerAddUser}
        handlerCloseForm={handlerCloseForm}
        />
      }

      <div className='container my-4'>
        <h2>User App</h2>
        <div className="row">
          <div className="col">
            { visibleForm || <button
              className='btn btn-primary my-2'
              onClick={ handlerOpenForm }
            >
              Nuevo Usuario
            </button>
            }
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
