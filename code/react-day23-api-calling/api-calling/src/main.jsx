import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App4 from './App4.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"; 
import App5 from './App5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App5/>
  </StrictMode>,
)
