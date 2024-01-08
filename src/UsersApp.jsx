import {useAuth} from './auth/hooks/useAuth';
import {LoginPage} from './auth/pages/LoginPage';
import {Navbar} from './components/layout/Navbar';
import {UsersPage} from './pages/UsersPage';
import {Routes, Route, Navigate} from 'react-router-dom';
import {UserRoutes} from './routes/UserRoutes';

export const UserApp = () => {

  const { login, handlerLogin, handlerLogout }=useAuth();
  return (
    <Routes>
      {
        login.isAuth
          ? (<>
              <Route path='/*' element={<UserRoutes
                login={login} handlerLogout={handlerLogout} />}/>
              </>)
            :<>
              <Route path='/login'
                element={<LoginPage handlerLogin={handlerLogin}/>} />
              <Route path='/*' element={ <Navigate to='/login' /> } />
            </>


      }

    </Routes>
  );
}
