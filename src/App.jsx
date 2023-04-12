import MainLayouts from '@root/layouts/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard/Dashboard'
import CreateUser from './pages/User/CreateUser/CreateUser'
import ListUser from './pages/User/ListUser/ListUser'

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
      <MainLayouts>
        <Routes>
          <Route exact element={<Dashboard />} path='/dashboard' />
          <Route exact element={<ListUser />} path='/user/list' />
          <Route exact element={<CreateUser />} path='/user/create' />
        </Routes>
      </MainLayouts>
    </BrowserRouter>
  )
}
