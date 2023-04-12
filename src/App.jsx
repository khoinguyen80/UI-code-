import Auth from '@root/Auth/Auth'
import MainLayouts from '@root/layouts/MainLayout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TestStyle from './layouts/TestStyle'
import ManagerGroupDetail from './components/ManagerGroupDetail/ManagerGroupDetail'
import CreateMember from './components/CreateMember/Createmember'

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
        <Route exact element={<TestStyle />} path='/teststyle' />
        <Route element={<CreateMember />} path='createmember' />
        <Route
          exact
          element={<ManagerGroupDetail />}
          path='/managergroupdetail'
        />
      </Routes>
    </BrowserRouter>
  )
}
