/*
 * @Author: LinRenJie
 * @Date: 2023-01-14 19:02:00
 * @LastEditTime: 2023-01-15 12:19:08
 * @Description: 
 * @FilePath: /react/src/main.tsx
 * @Email: xoxosos666@gmail.com
 */
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
