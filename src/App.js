import styled from 'styled-components';
import GroupForm from './components/forms/GroupForm';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`

function App() {
  return (
    <Wrapper>
      <GroupForm formColor="pink"/>
    </Wrapper>
  )
}

export default App
