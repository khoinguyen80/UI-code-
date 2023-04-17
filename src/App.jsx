import MainLayouts from '@root/layouts/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FormReviewRequest from './pages/Account/Request/FormReviewRequest'
import Dashboard from './pages/Dashboard/Dashboard'
import ListGroup from './pages/Manager/ListGroup'
import ManagerGroupDetail from './pages/Manager/ManagerGroupDetail'
import Notification from './pages/Manager/Notification'
import CreateMember from './pages/Member/CreateMember'
import CreateRequest from './pages/User/CreateRequest'
import DayoffDetail from './pages/Account/DayoffDetail'

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
          <Route
            exact
            element={<CreateRequest />}
            path='staff/create-request'
          />
          <Route element={<CreateMember />} path='createmember' />
          <Route exact element={<Notification />} path='manager/notification' />
          <Route
            exact
            element={<ManagerGroupDetail />}
            path={`manager/groups/detail`}
          />
          <Route
            exact
            element={<FormReviewRequest />}
            path='/account/list-request'
          />
          <Route element={<ListGroup />} path='manager/groups' />
          <Route
            exact
            element={<DayoffDetail />}
            path='/account/dayoff/detail'
          />
        </Routes>
      </MainLayouts>
    </BrowserRouter>
  )
}
