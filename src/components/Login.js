import React, { Component } from "react";
import ReactDOM from "react-dom";
import login from "./login.png";
import GoogleLogin from "react-google-login";
import "./style.scss";
import Dashboard from "./Dashboard";
import axios from "axios";

var wfh, atOffice, totalWorking=0, total;
var h, o, l, sl, b;
var arr = {
  h: 0,
  o: 0,
  l: 0,
  sl: 0,
  b: 0
}

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
    var leave = {
      filter: 'On Leave'
    }
   console.log("filter:"+leave.filter);
   axios.post('http://localhost:5000/page1/findByFilter', leave)
   .then(res => {
     l = res.data.length;
     arr.l = l;
     console.log("on leave:"+arr.l);
      
  })
   .catch(err => console.log("errorrr--->>in filtering"));


   var sickleave = {
    filter: 'On Sick Leave'
  }
 console.log("filter:"+sickleave.filter);
 axios.post('http://localhost:5000/page1/findByFilter', sickleave)
 .then(res => {
   sl = res.data.length;
   arr.sl = sl;
   console.log("on sick leave:"+arr.sl);
    
})
 .catch(err => console.log("errorrr--->>in filtering"));
    
 var businesstrip = {
  filter: 'Business Trip'
}
console.log("filter:"+businesstrip.filter);
axios.post('http://localhost:5000/page1/findByFilter', businesstrip)
.then(res => {
 b = res.data.length;
 arr.b = b;
 console.log("business trip:"+arr.b);
  
})
.catch(err => console.log("errorrr--->>in filtering"));
   
   axios.post('http://localhost:5000/page2/find', user)
   .then(res => {console.log(res.data); 
    if (res.data.empID === user.empID){
    console.log("going to dashboard"); 
     
      axios.get('http://localhost:5000/page1/')
      .then(res => {
        total = res.data.length;
        console.log("total:"+total);

        var filterStatus = {
          filter: 'At Office'
        }
    
       axios.post('http://localhost:5000/page1/findByFilter', filterStatus)
       .then(res => {
         atOffice = res.data.length;
         arr.o = atOffice;
         console.log("at office:"+arr.o);
         totalWorking = totalWorking + atOffice;
         console.log(totalWorking);
      })
       .catch(err => console.log("errorrr--->>in filtering"));
    
       filterStatus = {
        filter: 'Working From Home'
      }
    
        axios.post('http://localhost:5000/page1/findByFilter', filterStatus)
        .then(res => {
          wfh = res.data.length;
          arr.h = wfh;
          console.log("wfh:"+arr.h);
          totalWorking = totalWorking + wfh;
          console.log(totalWorking);
          var details = {
            totalEmployees: total,
            working: totalWorking,
            o: arr.o,
            h: arr.h,
            l: arr.l,
            sl: arr.sl,
            b: arr.b
          }
          console.log(details);
          
          ReactDOM.render(<Dashboard employees = {details}/>, document.getElementById("root"));
        })
        .catch(err => console.log("errorrr--->>in filtering"));

        })
      .catch(err => {console.log("errorrr");});
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

