import React from 'react'

import Spinner from "../Spinner"

function DataComponent(props) {
  return (
    props.data 
        ? props.children(props.data)
        : <Spinner/>
  )
}

 

export default DataComponent