import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Theme from './Theme.jsx'
import Myapp from './Component/Myapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Theme/> */}
    <Myapp/>
  </StrictMode>,
)
