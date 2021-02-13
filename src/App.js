import styled from 'styled-components';
import Calendar from './components/Calendar';
import ColorPicker from './components/ColorPicker';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`

function App() {
  return (
    <Wrapper>
      <Calendar/>
    </Wrapper>
  )
}

export default App
