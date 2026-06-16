import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClientProvider } from './contexts/ClientContext.tsx'
// import { BlogProvider } from './contexts/BlogContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BlogProvider>
      <App />
    </BlogProvider> */}
    <ClientProvider>
      <App />
    </ClientProvider>
  </StrictMode>,
)
