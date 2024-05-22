import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BookProvider } from './context/bookContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BookProvider>
    <App />
  </BookProvider>
)
