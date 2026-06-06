import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./style.css"
import { ShoesProvider } from './ShoesContext.jsx'

createRoot(document.getElementById('root')).render(
  <ShoesProvider>
    <App />
  </ShoesProvider>
)
