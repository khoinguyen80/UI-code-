import ContentLayout from '@root/layouts/ContentLayout'
import { Table, Col, Row, Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const ColStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Link to={'detail'}>{text}</Link>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
]
const data = [
  {
    key: '1',
    name: 'John Brown',
    email: 'john@gmail.com',
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'jim@gmail.com',
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'joe@gmail.com',
  },
]

export default function ManagerMember() {
  return (
    <>
      <ContentLayout>
        <Row>
          <Col span={24}>
            <ColStyled>
              <Link to={'/createmember'}>
                <Button type='primary'>+ New Member</Button>
              </Link>
            </ColStyled>
          </Col>
        </Row>
        <Col span={6}>
          <Table columns={columns} dataSource={data} />;
        </Col>
      </ContentLayout>
    </>
  )
}
