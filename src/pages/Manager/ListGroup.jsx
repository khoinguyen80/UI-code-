import ContentLayout from '@root/layouts/ContentLayout'
import { Col, Row, Button, Table } from 'antd'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { ColStyled } from './Manager.styled'
// import { AiOutlineClose } from 'react-icons/ai'
// import {
//   ColStyled,
//   FieldLeft,
//   FieldRight,
//   InputContainer,
//   SubTitle,
//   UserTag,
// } from './ManagerGroupDetail'

export default function ListGroup() {
  const dataSource = [
    {
      key: '1',
      name: 'HR',
      member: 'Hung',
      master: 'Nguyen',
    },
    {
      key: '2',
      name: 'KSA',
      member: 'Kien',
      master: 'Quoc',
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Member(s)',
      dataIndex: 'member',
      key: 'member',
      render: (dataIndex) => (
        <>
          <AiOutlineUser style={{ marginLeft: '5px' }} />
          <>{dataIndex.charAt(0)}</>
        </>
      ),
    },
    {
      title: 'Master(s)',
      dataIndex: 'master',
      key: 'master',
      render: (dataIndex) => (
        <>
          <AiOutlineUser style={{ marginLeft: '5px' }} />
          <>{dataIndex.charAt(0)}</>
        </>
      ),
    },
  ]
  return (
    <>
      <ContentLayout>
        <Row>
          <Col span={24}>
            <ColStyled>
              <Button type='primary'>+ New Member</Button>
            </ColStyled>
          </Col>
        </Row>
        <Col span={6}>
          <Table columns={columns} dataSource={dataSource} />;
        </Col>
      </ContentLayout>
    </>
  )
}
