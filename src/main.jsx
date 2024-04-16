import React from 'react'
import ReactDOM from 'react-dom/client'
import PrimaryPage from './primary-page.jsx'
import './App.css'
import Context from 'src/Context/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <PrimaryPage />
    </Context>
  </React.StrictMode>,
)
