import { Breadcrumb } from 'antd'
import styled from 'styled-components'

const BreadcrumbStyled = styled.div`
  background: '#f5f5f5';
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 64px;
  padding: 10px 20px 10px 15px;
  font-weight: bold;
`
const TitleStyled = styled.div`
  font-size: 24px;
`

const Breadcrumbs = ({ items, title = 'undefined' }) => (
  <BreadcrumbStyled>
    <TitleStyled>{title}</TitleStyled>
    <Breadcrumb style={{ color: '#333' }}>
      {items &&
        items.map((item, index) => (
          <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
        ))}
    </Breadcrumb>
  </BreadcrumbStyled>
)
export default Breadcrumbs
