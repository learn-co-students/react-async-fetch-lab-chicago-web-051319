// create your App component here
import React, { Component } from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spacePeople: []
    }
  }

  render() {
    return (
      <div>
      {this.state.spacePeople.map(person => person.name)}
      </div>
  )
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
      spacePeople: data.people
      })
    })
  }
}

export default App
