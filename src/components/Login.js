import React, { Component } from "react";
import ReactDOM from "react-dom";
import login from "./login.png";
import GoogleLogin from "react-google-login";
import "./style.scss";
import Dashboard from "./Dashboard";
import axios from "axios";

export var user = {
  empID: '',
  password: ''
}
export class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeempID = this.onChangeempID.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
    this.state = {
      empID: '',
      password: '',
      message: ''
    }
  }

  onChangeempID(e){
    this.setState({empID: e.target.value});
  }

  onChangepassword(e){
    this.setState({password: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    
    user = {
      empID: this.state.empID,
      password: this.state.password
    }
    
    console.log(user)
    console.log(user.empID);
    console.log(user.password);

   axios.post('http://localhost:5000/page2/find', user)
   .then(res => {console.log(res.data); 
    if (res.data.empID === user.empID){
    console.log("hereeeee on page2"); ReactDOM.render(<Dashboard />, document.getElementById("root"));
  }
  })
   .catch(err => {console.log("errorrr");this.setState({message: "Incorrect Username or password!!"});});
   //window.location = '/';



  }
  
  
  render() {
    const responseGoogle = response => {
      console.log(response);
    }
    return (
    <div className="base-container" ref={this.props.containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={login} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input onChange={this.onChangeempID} type="text" name="username" value={this.state.empID} placeholder="EmployeeID" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={this.onChangepassword} type="password" name="password" value={this.state.password}
 placeholder="Password" />
             <p>{this.state.message}</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick ={this.onSubmit}>
          Login
        </button>
        <div>
          <hr />
          <GoogleLogin
            clientId="438061893790-glmbsu74odfm47jdsil3ri74cgnkarn0.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
     );
     }
}

