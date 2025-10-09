import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error("No Root found");

createRoot(rootEl).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
)
