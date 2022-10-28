import React, { Component } from "react";
class LoginForm extends Component {
//creating a ref object
username = React.createRef();


  handleSubmit = (e) => {
    e.preventDefault();
    //call the server
    console.log("Submitted");
  };

//i have to delete the ref object and remove from input field of username.

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input autoFocus ref={this.username} id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;