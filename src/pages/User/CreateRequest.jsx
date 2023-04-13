// import { PlusOutlined } from '@ant-design/icons'
import Breadcrumbs from '@root/components/BreadCrumb/BreadCrumb'
import ContentLayout from '@root/layouts/ContentLayout'
import {
  Form,
  Input,
  Radio,
  DatePicker,
  Typography,
  ConfigProvider,
} from 'antd'
import { Button } from '../../components/Style/Button'
const { TextArea } = Input
const { Title } = Typography
const CreateRequest = () => {
  const convertDay = (day) => {
    const dayStr = String(day.$d).split(' ')
    return [dayStr[1], dayStr[2], dayStr[3]].join(' ')
  }
  const onFinish = (values) => {
    console.log(convertDay(values.fromDay))
    console.log(values)
  }
  return (
    <>
      <Breadcrumbs items={['Staff', 'Create Request']} title='Create Request' />
      <ContentLayout>
        <ConfigProvider
          styles={{ margin: '0 auto' }}
          theme={{
            token: {
              colorPrimary: '#94AF9F',
            },
          }}
        >
          <Form
            labelCol={{ span: 4 }}
            layout='horizontal'
            style={{
              maxWidth: 700,
              margin: '0 auto',
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
              padding: '30px 0 30px 50px',
              marginTop: 50,
            }}
            wrapperCol={{ span: 14 }}
            onFinish={onFinish}
          >
            <Title
              level={2}
              style={{ margin: 40, textAlign: 'center', color: '#94AF9F' }}
            >
              Create Day Off Request
            </Title>
            <Form.Item label='Type of day off: ' name='typeDayOff'>
              <Radio.Group>
                <Radio value='off'> Off </Radio>
                <Radio value='remote'> Remote </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label='From' name='fromDay'>
              <DatePicker />
            </Form.Item>

            <Form.Item label='To' name='toDay'>
              <DatePicker />
            </Form.Item>

            <Form.Item label='Quantity' name='quantity'>
              <Input />
            </Form.Item>
            <Form.Item label='Reason' name='reason'>
              <TextArea rows={4} />
            </Form.Item>

            <div style={{ textAlign: 'center' }}>
              <Button $primary htmlType='submit'>
                Create Request
              </Button>
            </div>
          </Form>
        </ConfigProvider>
      </ContentLayout>
    </>
  )
}

export default () => <CreateRequest />
