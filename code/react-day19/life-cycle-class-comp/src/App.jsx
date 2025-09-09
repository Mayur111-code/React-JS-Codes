import React from "react";

export default class App extends React.Component {

  //phase 1

  //1
  constructor(props) {
    super(props)
    this.state=({
      name:"mayur",
      skill:"developer",

      color:'tomato'


    })
    console.log("constructor called ..!!");
    
  }

  //3
  //used to acces current state props data we can performa opertation that it and return state props data
  //pass 2 parameters-state and props 
  //rearly used -and it called each and every rendering
  //its compulsury return something
  static getDerivedStateFromProps(props, state ){
    console.log(props);
    
    console.log(state);
    
console.log("getDerivedStateFromProps called...!!");
return null;
  }

//4

//used to perform side effect on our application
//and ist similer like a useeddfect hook 
//called after rendering method 
//like sideeffect means event trigger network requwst api calling time iterval etc to used 
//called after rendering
componentDidMount(){
  console.log("componentDidMount called..!!");
  setInterval(() => {
    this.setState({
      color:'yellow'
    })
  }, 5000);

  setTimeout(() => {
    this.setState({
      color:'blue'
    })
  }, 3000);
  
}



handlestate = () =>{
this.setState ({
name:"yash",
  skill:"react dev"
})
}

colorhandler=()=>{
  this.setState({
    color:'purple'
  })
}

  //2 render
  //pure method only returns jsx code does not interact dom element 
  render(){

    console.log("render method called''!!");
    

    return(
<>

<h1>Rreact life-cycle and its phases and its methods</h1>
<h2>Mouting phase and its methods</h2>
<h3>constructor</h3>
<h3>render</h3>
<h3>static getDerivedstateFromProps</h3>
<h3>ComponentDidMount (most imp)</h3>
<hr />
<h2 style={{color:this.state.color}}>your name : {this.state.name} </h2>
<h2>your skill: {this.state.skill} </h2>
<button onClick={()=> this.handlestate()}>update state</button>
<br />
<hr />
<button onClick={()=> this.colorhandler()}>update color</button>
</>
    )
  }
}