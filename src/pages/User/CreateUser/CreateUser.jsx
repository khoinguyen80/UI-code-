import { PlusOutlined } from '@ant-design/icons'
import Breadcrumbs from '@root/components/BreadCrumb/BreadCrumb'
import ContentLayout from '@root/layouts/ContentLayout'

import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from 'antd'

const { RangePicker } = DatePicker
const { TextArea } = Input

const CreateUser = () => (
  <>
    <Breadcrumbs items={['Users', 'Create user']} title='Create User' />

    <ContentLayout>
      <Form
        labelCol={{
          span: 4,
        }}
        layout='horizontal'
        style={{
          maxWidth: 600,
        }}
        wrapperCol={{
          span: 14,
        }}
      >
        <Form.Item label='Checkbox' name='disabled' valuePropName='checked'>
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label='Radio'>
          <Radio.Group>
            <Radio value='apple'> Apple </Radio>
            <Radio value='pear'> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Input'>
          <Input />
        </Form.Item>
        <Form.Item label='Select'>
          <Select>
            <Select.Option value='demo'>Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='TreeSelect'>
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label='Cascader'>
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label='DatePicker'>
          <DatePicker />
        </Form.Item>
        <Form.Item label='RangePicker'>
          <RangePicker />
        </Form.Item>
        <Form.Item label='InputNumber'>
          <InputNumber />
        </Form.Item>
        <Form.Item label='TextArea'>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label='Switch' valuePropName='checked'>
          <Switch />
        </Form.Item>
        <Form.Item label='Upload' valuePropName='fileList'>
          <Upload action='/upload.do' listType='picture-card'>
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label='Button'>
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </ContentLayout>
  </>
)
export default CreateUser
