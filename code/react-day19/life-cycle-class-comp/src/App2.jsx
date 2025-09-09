import React, { Component } from 'react'

export default class App2 extends Component {
// 1
//1
    constructor(){

        console.log("constructor called..!!");
        
        super()
        this.state = ({
           empid:'#123',
           empRole:'Developer',
           empCTC:"10lpa",
           empAddress:'pune' 
        })
        console.log("constructor called..!!");
        
    }
//2
static getDerivedStateFromProps(props , state){
    console.log("getDerivedStateFromProps called..!!");
    
    console.log(state);
    
    return null;
}

//4
componentDidMount(){
    console.log("componentDidMount called..!!");
    
}

//updating phase
//1 

//should i render or not after state props changes / updates 
//use case- when react doesnt want to render state props chnages
//in simple no render state props  changes on our application and webpages in used to class componet
//bydefult its return true 
//and pass two arguments ==> nextprops , nextstate its means return updated state , props data
//updating phase is called update somthing 
//used to performance optimization

shouldComponentUpdate(nextprops, nextstate){
   
    console.log("shouldComponentUpdate called..!!");
    console.log(nextstate);
    return true;
    

}

//2 
//getsnapchat before upadte return privious props and state 
//its called after render method 
//takes privious state and props snapshot before update
getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate called..!!");
    console.log(prevState);
    return null;
    
}


//Note : @react-refresh:228 App2: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.


//componentDidUpdate




componentDidUpdate(prevProps, prevState, snapshot){
console.log("componentDidUpdate called..!!");
if (this.state.empRole !== prevState.empRole) {
    console.log(this.state.empRole)
}
return null; 

}



updatestate = () =>{
    this.setState ({
        empRole:"Mern stack with AI",
        empAddress:"Nashik"
    })
}



//3
  render() {

    console.log("render called..!!");
    

    return (
      <div>
        <h1>component life cycle</h1>
        <h2>updating phase</h2>
        <h3>shouldcomponentUpdate</h3>
        <h3>getsnapshootbeforeupdate</h3>
        <h3>componentdidupdate</h3>
        <hr />

        <h2>Emp id : {this.state.empid} </h2>
        <h2>Emp Role : {this.state.empRole} </h2>
        <h2>Emp Address : {this.state.empAddress} </h2>

        <button onClick={()=> this.updatestate()}>update state</button>
      </div>
    )
  }
}
