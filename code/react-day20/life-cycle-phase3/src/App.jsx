import React from "react";
import Child from "./Child";
 export default class App extends React.Component{

  //1-mouting phase- initial phase of our component

  //1
  constructor(){
    console.log("constructor called..!!");
    
    super()
    this.state = ({
      name:"mayur",
      skill:"React",
show:true
      
    })
  }

  //3

static getDerivedStateFromProps(props, state){
  console.log("getDerivedStateFromProps called..!!");
  console.log(state);
  
  return null;
  
}

//4

componentDidMount(){
  console.log("componentDidMount called..!!");
  
}

//updating phase 
//2-1
shouldComponentUpdate(nextprops, nextstate){
  console.log("shouldComponentUpdate called''!!");
  console.log(nextstate);
  return true;
}

//2-2
getSnapshotBeforeUpdate(prevprops, prevstate){
  console.log("getSnapshotBeforeUpdate called..!!");
  return null;
}

componentDidUpdate(prevprops,prevstate,snapshot){
  console.log("componentDidUpdate called..!!");
  return null;
}

updatestate=()=>{
  this.setState({
    name:"mayur borse",
    skill:"React Developer"
  })
}

handlecomp=()=>{
  this.setState({
    show:!this.state.show
  })
}


  
//2 
  render(){

    console.log("render called..!!");

    
    return(
      <>
      <h1>component lifecycle unmouting phas - remove component from the dom tree</h1>
      <hr />
      <h3>componentwillunmount</h3>

      <hr />

<button onClick={()=> this.handlecomp()}>Toggle component</button>

{
  this.state.show ? <Child/> : 'Component is unmoute remove dom tree '
}
      

      <hr />

      <h3>Name : {this.state.name} </h3>
      <h3>Skill : {this.state.skill} </h3>


      <button onClick={()=> this.updatestate()}>update</button>
      </>
    )
  }
 }

