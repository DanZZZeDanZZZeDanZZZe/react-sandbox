import styled from 'styled-components';
import DataLoader from './components/DataLoader';
import NoteCard from './components/NoteCard';

const  Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`

function App() {
  return (
    <Wrapper>
      <NoteCard {...{url: 'https://swapi.dev/api/people/1/'}}/>
    </Wrapper>
  )
}

export default App
