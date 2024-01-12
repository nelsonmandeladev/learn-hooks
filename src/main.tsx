import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ShareDataProvider } from './providers/ShareDataProvider.tsx'
import DataCompontA from './DataCompontA.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShareDataProvider>
      <App />
      <DataCompontA />
    </ShareDataProvider>
  </React.StrictMode>,
)
