import image from '@root/assets/Login.jpg'
import { loginRequest } from '@root/redux/actions'
import { Checkbox, Form, Input, Button } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { AuthStyled } from './Auth.styled'

const Auth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const handleSubmitForm = (e) => {
    e.preventDefault()
    dispatch(loginRequest(username, password))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
    toast.error('Login failed')
  }
  return (
    <AuthStyled className='login-page'>
      <div className='login-box'>
        <div className='illustration-wrapper'>
          <img alt='Login image' src={image} />
        </div>
        <Form
          initialValues={{ remember: true }}
          name='login-form'
          onFinish={handleSubmitForm}
          onFinishFailed={onFinishFailed}
        >
          <p className='form-title'>Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              className='login-form-button'
              htmlType='submit'
              type='primary'
            >
              LOGIN
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              className='login-form-button'
              htmlType='submit'
              style={{ background: '#e63946' }}
              type='primary'
            >
              LOGIN WITH GOOGLE
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AuthStyled>
  )
}
export default Auth
