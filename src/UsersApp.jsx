import {UserForm} from './components/UserForm';
import {UsersList} from './components/UsersList';
import {useUsers} from './hooks/useUsers';

export const UsersApp = () => {

const {
    users,
    userSelected,
    initialUserForm,

    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
  }=useUsers();

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
            <button
              className='btn btn-primary my-2'
            >
              Nuevo Usuario
            </button>
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
