import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SpinnerContextProvider from './context/SpinnerContext.jsx'

createRoot(document.getElementById('root')).render(
  <SpinnerContextProvider>

    <StrictMode>
    <App />
  </StrictMode>,
  </SpinnerContextProvider>
  
)
