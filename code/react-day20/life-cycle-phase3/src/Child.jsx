import React, { Component } from 'react'

export default class Child extends Component {

  componentWillUnmount(){
    console.log("componentWillUnmount called..!!");
    
  }
  
  render() {
    return (
      <div>
        <h1>Child Component</h1>
      </div>
    )
  }
}
