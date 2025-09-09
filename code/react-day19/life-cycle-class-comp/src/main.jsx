import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App  name="abc" skill="java" /> */}
    <App2/>
  </StrictMode>,
)
