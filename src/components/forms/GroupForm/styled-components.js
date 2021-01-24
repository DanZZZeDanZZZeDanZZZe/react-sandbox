import styled from "styled-components";

const StyledForm = styled.form.attrs(props => ({
  formColor: props.formColor || 'inital'
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: 30rem;
  border: 1px solid black;
  background-color: ${props => props.formColor};
`

const StyledInput = styled.input`
  box-sizing: border-box;
  grid-column: span 2;
` 
const StyledLabel = styled.label`
  display: grid;
  grid: 1rem auto / 1fr auto;
  margin: 1rem 0;
  width: 80%;
  grid-gap: .4rem;
` 
const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 10rem;
  grid-column: span 2;
` 

const Error = styled.span`
  grid-row-start: 1;
  grid-column-end: -1;
  text-align: right;
  color: red;
` 

export {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTextarea,
  Error,
}