import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children}){
  return (<div className='layoutall'>
    <Table>
    <thead>
      <Tr>
        <Th><Header/></Th>
        </Tr>
    </thead>
    <tbody>
      <Tr>
        <Td>{children}  </Td>
      </Tr>
      <Tr>
        <Th><Footer/></Th>
      </Tr>
    </tbody>
    </Table>

    </div>
  )
}


const Table = styled.table`
  border: 1px solid black;
  min-width: 1000px;
  height: 500px;
  margin: auto;
  margin-top: 10vh;
`
const Th = styled.th`
  border: 1px solid black;
  
`
const Tr = styled.tr`
  border: 1px solid black;
`
const Td = styled.td`
  border: 1px solid black;
`

