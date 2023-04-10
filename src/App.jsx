import Auth from '@root/Auth/Auth'
import MainLayouts from '@root/layouts/MainLayout'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true)

  const handleLogin = () => {
    // TODO: implement login logic here
    setLoggedIn(true)
  }
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
        <Route element={<Auth onLogin={handleLogin} />} path='/login' />
        <Route
          element={loggedIn ? <MainLayouts /> : <Navigate to='/login' />}
          path='/dashboard'
        />
      </Routes>
    </BrowserRouter>
  )
}
