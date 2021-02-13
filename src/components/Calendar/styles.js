import styled from 'styled-components';

export const Calendar = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
  height: 40rem;
  width: 100rem;
`;

export const ControlBoard = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, minmax(max-content, 7rem));
  align-content: center;
  justify-content: center;
  gap: 2rem;
  padding: .5rem;
  border: 1px solid black;

  & select{
    grid-column: span 2;
  }
`;

export const CalendarHolder = styled.div.attrs(props => {
  const sizes = {
    'day': [1, 1],
    'week': [3, 3],
    'month': [7, 4]
  }

  return {
    sizes: sizes[props.range] ?? sizes['day']
  }
})`
  border: 1px solid black;
  display: grid;
  grid-template-rows: repeat(${props => props.sizes[0]}, 1fr);
  grid-template-columns: repeat(${props => props.sizes[1]}, 1fr);
`;

export const Day = styled.div`
  display: grid;
  grid-template-rows: minmax(max-content, 3rem) repeat(auto, minxmax(max-content, 2rem));
`;