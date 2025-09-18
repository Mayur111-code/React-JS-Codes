import React, { Component } from 'react'

export default class App1 extends Component {
    constructor(){
        super()
        this.state = {
            userName:"",
            userEmail:"",
            userPass:"",
            userSkill:"",
            userProfile:null
        }
    }

    DataHandler = (e) =>{
        const {name, value, type, files} = e.target;
        if(type==='file'){
 this.setState({[name]:files[0]})

        } else{
this.setState({ [name]:value })
        }
    }

    saveForm = (e)=>{
        e.preventDefault()
        alert("sucess")
        console.log(this.state);

        this.setState({
            userName:"",
            userEmail:"",
            userPass:"",
            userSkill:"",
            userProfile:null
        })
        
    }

  render() {
    return (
      <>
      
       <div className="container-fluid text-dark fw-bold">
                <div className="row">
                    <div className="col-md-12 text-center bg-dark p-3">
                        <h2 className="text-warning">User Registration Form</h2>
                    </div>

                    <form onSubmit={this.saveForm}>
                        <div className="col-md-12 my-3">
                            <label htmlFor="userName" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.userName}
                                onChange={this.DataHandler}
                                id="userName"
                                name="userName"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="userEmail" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={this.state.userEmail}
                                onChange={this.DataHandler}
                                id="userEmail"
                                name="userEmail"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="userPass" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={this.state.userPass}
                                onChange={this.DataHandler}
                                id="userPass"
                                name="userPass"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="col-md-12 mb-3">
                            <label htmlFor="userSkill" className="form-label">Skill</label>
                            <select
                                className="form-select"
                                id="userSkill"
                                value={this.state.userSkill}
                                onChange={this.DataHandler}
                                name="userSkill"
                                required
                            >
                                <option value="HTML">--Select Skill--</option>
                                <option value="HTML">HTML</option>
                                <option value="CSS">CSS</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="ReactJS">ReactJS</option>
                                <option value="NodeJS">NodeJS</option>
                            </select>
                        </div>

                        <div className="col-md-12 mb-3">
                            <label htmlFor="userProfile" className="form-label">Profile Picture</label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={this.DataHandler}
                                id="userProfile"
                                name="userProfile"
                            />
                        </div>

                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary fw-bold my-3">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
      
      
      </>
    )
  }
}
