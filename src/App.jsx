import Auth from '@root/Auth/Auth'
import MainLayouts from '@root/layouts/MainLayout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        position='top-center'
        rtl={false}
        theme='light'
      />
      <Routes>
        <Route element={<Auth />} path='/login' />
        <Route exact element={<MainLayouts />} path='/dashboard' />
      </Routes>
    </BrowserRouter>
  )
}
