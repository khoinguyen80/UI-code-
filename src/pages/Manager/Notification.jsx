import ContentLayout from '@root/layouts/ContentLayout'
import { Col, Row, Switch, Button } from 'antd'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'

export const ColStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 10px;
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
  font-size: 25px;
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
const onChange = (checked) => {
  console.log(`switch to ${checked}`)
}

export default function ManagerGroupDetail() {
  return (
    <>
      <ContentLayout>
        <Row>
          <Col span={6}>
            <SubTitle>Slack</SubTitle>
          </Col>
          <Col span={18}>
            <ColStyled>
              <Button type='primary'>+ New Member</Button>
            </ColStyled>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <FieldLeft>Day off channel</FieldLeft>
          </Col>
          <Col span={14}>
            <FieldRight>
              <InputContainer>
                <UserTag style={{ color: 'white', paddingRight: '5px' }}>
                  <AiOutlineClose
                    style={{ marginLeft: '5px', marginTop: '4px' }}
                  />
                  day off
                </UserTag>
                <UserTag style={{ color: 'white', paddingRight: '5px' }}>
                  <AiOutlineClose
                    style={{ marginLeft: '5px', marginTop: '4px' }}
                  />
                  general
                </UserTag>
              </InputContainer>
            </FieldRight>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <FieldLeft>HR channel</FieldLeft>
          </Col>
          <Col span={14}>
            <FieldRight>
              <InputContainer>
                <UserTag style={{ color: 'white', paddingRight: '5px' }}>
                  <AiOutlineClose
                    style={{ marginLeft: '5px', marginTop: '4px' }}
                  />
                  hr-management
                </UserTag>
              </InputContainer>
            </FieldRight>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <FieldLeft>Mapping user by email</FieldLeft>
          </Col>
          <Col span={14}>
            <FieldRight>
              <Switch defaultChecked onChange={onChange} />
            </FieldRight>
          </Col>
        </Row>
      </ContentLayout>
    </>
  )
}
