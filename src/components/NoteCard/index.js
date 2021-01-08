import React from 'react'

import styled from 'styled-components'
import DataComponent from '../DataComponent'
import DataLoader from '../DataLoader'

const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid black;
`

const Title = styled.h3`
  
`

const Text = styled.textarea`
  
`

class NoteCard extends React.Component {
  render() {
    const {url} = this.props
    return (
      <Wrapper>
        <DataLoader {...{url}}> 
          {(data) => (
            <>
              <DataComponent data={data?.name}>
                {(data) => <Title>{data}</Title>}
              </DataComponent>

              <DataComponent data={data?.height}>
                {(data) => <Text defaultValue={data}></Text>}
              </DataComponent>
            </>
          )}
        </DataLoader>
      </Wrapper>
    )
  }
}

export default NoteCard