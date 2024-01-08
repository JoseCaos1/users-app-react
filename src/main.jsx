import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { AuthProvider } from './auth/context/AuthProvider'
import {UserApp} from './UsersApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserApp/>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
