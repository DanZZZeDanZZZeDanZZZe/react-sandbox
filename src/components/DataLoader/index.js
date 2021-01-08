import React from 'react'
 
class DataLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    const headers =  { 'Content-Type': 'application/json' }
    fetch(this.props.url, { headers })
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result
        })
      })
  }

  render() {
    return (
      this.props.children(this.state.data)
    )
  }
}


export default DataLoader