import React from 'react'
import ReactDOM from 'react-dom/client'
import {LoginPage} from './auth/pages/LoginPage'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginPage/>
  </React.StrictMode>,
)
