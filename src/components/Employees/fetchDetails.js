import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Dashboard from "../Dashboard";
import ByName from "./byname";
import Status from "./Status";
import "./employeesStyles.css";

export default class Fetch extends Component {
  constructor(props) {
    super(props);

    this.onChangeempName = this.onChangeempName.bind(this);
    this.onChangefilter = this.onChangefilter.bind(this);
    this.Render1 = this.Render1.bind(this);
  
    this.state = {
      empName: '',
      filter: '',
      posts: []
    }
    
  }


  
  onChangeempName(e){
    this.setState({empName: e.target.value});
  }

  onChangefilter(e){
    this.setState({filter: e.target.value});
    console.log("status---->>>" + this.state.filter);
  }

  Render1(e){
    e.preventDefault();
    //ReactDOM.render(<Dashboard />, document.getElementById("root"));
    console.log("on submit");
    
    const user = {
      empName: this.state.empName,
      filter: this.state.filter
    }
    
    console.log(user)
    console.log(user.empName);
    console.log(user.filter);

   axios.post('http://localhost:5000/page1/findByName', user)
   .then(res => {
     const data = res.data;
     this.setState( { posts: data });
    console.log(this.state.posts); 
    if (res.data.empName === user.empName){
    console.log(user.empName);
    ReactDOM.render(
    <ByName
    name={this.state.empName}
    status={res.data.status}
    tel={res.data.phone}
     />, document.getElementById("root"));

  }
  })
   .catch(err => console.log("errorrr in name"));
   //window.location = '/';
  }

  Render2(e){
    e.preventDefault();
    //ReactDOM.render(<Dashboard />, document.getElementById("root"));
    console.log("on submit filter");
    
    const status = {
      filter: this.state.filter
    }
    
    console.log(status)
    console.log(status.filter);

   axios.post('http://localhost:5000/page1/findByFilter', status)
   .then(res => {
     const data = res.data;
     this.setState( { posts: data });
    console.log(this.state.posts); 
    if (res.data.status === status.filter){
    console.log(res.data);
  }
  })
   .catch(err => console.log("errorrr--->>in filtering"));
   //window.location = '/';
  }


  render() {
    const responseGoogle = response => {
      console.log(response);
    }
    return (
        <div className="display">
        <form>
          <fieldset className="space">
            <legend className="space">Status</legend>
            <label className="space" for="fname">Search by Name</label>
            <br />
            <input type="text" id="fname" name="fname" placeholder=" Employee Name" onChange={this.onChangeempName} />
            <button type="button" className="submit" onClick ={this.Render1}>Search</button>
            <br /><br /> 
            <label className="space" for="fname">Search by Filter</label>
            <br />
          <input list="browsers" placeholder=" Select" onChange={this.onChangefilter} />
          <datalist id="browsers" >
            <option value="At Office" />
            <option value="Working From Home" />
            <option value="On Leave" />
            <option value="On Sick Leave" />
            <option value="Business Trip" />
          </datalist>
          <button type="button" className="submit" onClick ={this.Render2}>Search</button>
          <br /><br />
            <br />
          </fieldset>
          <br />
          
        </form>
        <br /><br />
      </div>     );
     }
}

