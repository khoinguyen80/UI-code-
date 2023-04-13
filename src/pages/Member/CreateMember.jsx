import Breadcrumbs from '@root/components/BreadCrumb/BreadCrumb'
import ContentLayout from '@root/layouts/ContentLayout'
import { Card, Row, Col, Form, Input, Button, Space } from 'antd'
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}
const CreateMember = () => (
  <>
    <Breadcrumbs items={['Members', 'Create members']} title='Create User' />
    <ContentLayout>
      <div className='site-card-border-less-wrapper'>
        <Card
          bordered={true}
          className='card-boxshadow'
          style={{
            width: '100%',
          }}
          title='Create Member'
        >
          <Row>
            <Col span={8}>
              <Form
                initialValues={{ password: 'password' }}
                layout={'vertical'}
                validateMessages={validateMessages}
              >
                <Form.Item
                  name={['password']}
                  style={{ display: 'none' }}
                ></Form.Item>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      label='First Name'
                      name={['firstName']}
                      rules={[
                        {
                          required: true,
                          message: 'Please type first name!',
                        },
                      ]}
                    >
                      <Input
                        placeholder={'First Name'}
                        style={{ width: '90%' }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label='Last Name'
                      name={['lastName']}
                      rules={[
                        {
                          required: true,
                          message: 'Please type last name!',
                        },
                      ]}
                    >
                      <Input placeholder={'Last Name'} />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  label='Email'
                  name={['email']}
                  rules={[
                    {
                      required: true,
                      type: 'email',
                    },
                  ]}
                >
                  <Input placeholder={'Email'} />
                </Form.Item>
                <Form.Item
                  label='Slack ID'
                  name={['slackid']}
                  rules={[
                    {
                      required: true,
                      message: 'Please type slack id!',
                    },
                  ]}
                >
                  <Input placeholder={'Slack Id'} type='string' />
                </Form.Item>
                <Form.Item>
                  <Space direction='horizontal' size={15}>
                    <Button type='primary'>Submit</Button>
                    <Button danger type='primary'>
                      Cancel
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Card>
      </div>
    </ContentLayout>
  </>
)
export default CreateMember
