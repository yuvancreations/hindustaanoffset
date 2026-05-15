import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Deployment Trigger: 2026-05-15T18:18:00Z
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
