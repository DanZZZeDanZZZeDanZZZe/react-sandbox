import styled from 'styled-components';
import SideMenu from './components/SideMenu';

const  Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`

function App() {
  return (
    <Wrapper>
      <SideMenu/>
    </Wrapper>
  )
}

export default App
