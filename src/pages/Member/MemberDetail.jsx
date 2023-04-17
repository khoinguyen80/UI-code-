import { Button, Form, Input } from 'antd'
import React from 'react'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  //   required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
}
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values)
}
export default function MemberDetail() {
  return (
    <Form
      {...layout}
      name='nest-messages'
      style={{
        maxWidth: 600,
        padding: '15px 10px 60px',
      }}
      validateMessages={validateMessages}
      onFinish={onFinish}
    >
      <Form.Item
        name={['user', 'firstName']}
        label='First_name'
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Input defaultValue={'John'} />
      </Form.Item>
      <Form.Item
        name={['user', 'lastName']}
        label='Last_name'
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Input defaultValue={'Brown'} />
      </Form.Item>
      <Form.Item
        label='Email'
        name={['user', 'email']}
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input defaultValue={'john@gmail.com'} />
      </Form.Item>

      <Form.Item label='Slack id' name={['user', 'slackId']}>
        <Input defaultValue={'312421'} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button htmlType='submit' type='primary'>
          Edit
        </Button>
      </Form.Item>
    </Form>
  )
}
