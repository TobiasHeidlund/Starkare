import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import EnableAnalytics from './componets/enableAnalytics';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <EnableAnalytics/>
      <App/>
    </HelmetProvider>
  </React.StrictMode>,
)
