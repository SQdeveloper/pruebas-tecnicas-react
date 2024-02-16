import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BookContextProvider from './components/Context/BookContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookContextProvider>
      <App />
    </BookContextProvider>
  </React.StrictMode>,
)
