import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import ExpensiveComponent from './Usememo &callback/Usememo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    < ExpensiveComponent />
  </StrictMode>,
)
