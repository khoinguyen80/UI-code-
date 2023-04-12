import { UserOutlined } from '@ant-design/icons'
import { Col, Row, Avatar, Input } from 'antd'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import styled from 'styled-components'
import { Button } from '../Style/Button'

const { TextArea } = Input

export const ColStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 10px;
  }
`
export const Title = styled.div`
  padding-left: 30px;
  padding-top: 25px;
  font-size: 30px;
  font-weight: bold;
`
export const SubTitle = styled.div`
  padding-left: 30px;
  padding-top: 25px;
  font-size: 30px;
  font-weight: bold;
`
export const FieldLeft = styled.div`
  padding-left: 30px;
  padding-top: 25px;
  font-size: 20px;
`
export const FieldRight = styled.div`
  padding-left: 30px;
  padding-top: 25px;
  font-size: 20px;
`

export const InputContainer = styled.div`
  border: black solid 1px;
  border-radius: 5px;
  width: 100%;
  height: 150px;
  display: flex;
`
export const UserTag = styled.div`
  border: black solid 1px;
  border-radius: 25px;
  height: 30px;
  width: auto;
  margin-left: 15px;
  margin-top: 10px;
  background-color: #bfbfbf;
  position: relative;
  font-size: 20px;
`

export default function ManagerGroupDetail() {
  return (
    <>
      <Row>
        <Col span={4}>
          <Title>Branding</Title>
        </Col>
        <Col span={20}>
          <ColStyled>
            <Button $primary>+ New Member</Button>
            <Button $primary>Log off</Button>
            <Avatar icon={<UserOutlined />} size={50} />
          </ColStyled>
        </Col>
      </Row>
      <Row>
        <SubTitle>Basic Information</SubTitle>
      </Row>
      <Row>
        <Col span={2}>
          <FieldLeft>Name</FieldLeft>
        </Col>
        <Col span={4}>
          <FieldRight>
            <TextArea disabled={true} rows={1} style={{ resize: 'none' }} />
          </FieldRight>
        </Col>
      </Row>
      <Row>
        <Col span={2}>
          <FieldLeft>Masters</FieldLeft>
        </Col>
        <Col span={12}>
          <FieldRight>
            <InputContainer>
              <UserTag style={{ color: 'white', paddingRight: '5px' }}>
                <AiOutlineUser style={{ marginLeft: '5px' }} />
                Khoa Nguyen
              </UserTag>
              <UserTag style={{ color: 'white', paddingRight: '5px' }}>
                <AiOutlineUser style={{ marginLeft: '5px' }} />
                Van Tran
              </UserTag>
            </InputContainer>
          </FieldRight>
        </Col>
      </Row>
      <Row>
        <Col span={2}>
          <FieldLeft>Members</FieldLeft>
        </Col>
        <Col span={12}>
          <FieldRight>
            <InputContainer>
              <UserTag style={{ color: 'white', paddingRight: '5px' }}>
                <AiOutlineUser style={{ marginLeft: '5px' }} />
                Khoa Nguyen
              </UserTag>
              <UserTag style={{ color: 'white', paddingRight: '5px' }}>
                <AiOutlineUser style={{ marginLeft: '5px' }} />
                Van Tran
              </UserTag>
              <UserTag style={{ color: 'white', paddingRight: '5px' }}>
                <AiOutlineUser style={{ marginLeft: '5px' }} />
                Huy Tran
              </UserTag>
              <UserTag style={{ color: 'white', paddingRight: '5px' }}>
                <AiOutlineUser style={{ marginLeft: '5px' }} />
                Nam Nguyen
              </UserTag>
            </InputContainer>
          </FieldRight>
        </Col>
      </Row>
      <Row>
        <Col span={22} style={{ marginTop: '150px' }}>
          <ColStyled>
            <Button $dellete>Cancel</Button>
            <Button $primary>Send</Button>
          </ColStyled>
        </Col>
      </Row>
    </>
  )
}
