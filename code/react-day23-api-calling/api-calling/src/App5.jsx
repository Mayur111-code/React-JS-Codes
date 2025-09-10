import React, { Component } from 'react'

export default class App5 extends Component {
    constructor(){
        super()
        this.state = ({
          data: [],
        })
    }

    componentDidMount(){
        fetch("https://fakestoreapi.com/user")
        .then((result)=>{
            result.json()
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res,
                }) ;
            }).catch((err)=>{
                console.log("data is a not fetched", err);
                
            })
        },[])
    }

  render() {



    console.log("data fetched" ,this.state);
    
    return (
      <div>


<div className="container">
  <div className="row">
    {this.state.data.map((user, index) => (
      <div className="col-md-12 mb-4" key={index}>
        <h2>User ID: {user.id}</h2>
        <p><strong>Name:</strong> {user.name.firstname} {user.name.lastname}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address.number}, {user.address.street}, {user.address.city} - {user.address.zipcode}</p>
        <p><strong>Geo Location:</strong> Lat: {user.address.geolocation.lat}, Long: {user.address.geolocation.long}</p>
        <hr />
      </div>
    ))}
  </div>
</div>



        
      </div>
    )
  }
}
