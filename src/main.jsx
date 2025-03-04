import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pagination from './Pagination.jsx'
import { Provider } from 'react-redux'
import store from './app/store'
import { ToastContainer } from "react-toastify";


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Pagination />
    <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
  </Provider>
)
