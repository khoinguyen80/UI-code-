import image from '@root/assets/Login.jpg'
import SlackButton from '@root/slack/SlackNottification'
import { Checkbox, Form, Input, Button } from 'antd'
import { toast } from 'react-toastify'
import { AuthStyled } from './Auth.styled'

const Auth = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
    toast.success('Welcome back!')
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className='form-title'>Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder='Username' />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='Password' />
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
        <SlackButton />
      </div>
    </AuthStyled>
  )
}
export default Auth
