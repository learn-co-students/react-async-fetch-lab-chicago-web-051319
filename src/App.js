import React, { Component } from 'react';


export default class App extends Component {

  state={
    people:[]
  }

  render(){
    return(
      <div>
      {this.state.people.map(person => person.name)}
      </div>
    )
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data=>{
      this.setState({
        people:data.people
      })
    })
  }
}
