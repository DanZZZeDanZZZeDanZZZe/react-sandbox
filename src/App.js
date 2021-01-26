import styled from 'styled-components';
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
      <ColorPicker setValue={(color) => console.log(color)}/>
    </Wrapper>
  )
}

export default App
