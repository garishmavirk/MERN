import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Dashboard from "../Dashboard";
import ByFilter from "./byfilter";
import Status from "./Status";
import "./employeesStyles.css";
import Card from "./Card";
import employees from "./employees";

export default class Fetch extends Component {
  constructor(props) {
    super(props);

    this.onChangeempName = this.onChangeempName.bind(this);
    this.onChangefilter = this.onChangefilter.bind(this);
    this.Render1 = this.Render1.bind(this);
    this.Render2 = this.Render2.bind(this);
  
    this.state = {
      empName: '',
      filter: ''
    }
    
  }


  
  onChangeempName(e){
    this.setState({empName: e.target.value});
  }

  onChangefilter(e){
    this.setState({filter: e.target.value});
    console.log(this.state.filter);
  }

  Render1(e){
    e.preventDefault();
    //ReactDOM.render(<Dashboard />, document.getElementById("root"));
    console.log("on submit name");
    
    const user = {
      empName: this.state.empName
    }
    
    console.log(user);
    console.log("user.name" + user.empName);

   axios.post('http://localhost:5000/page1/findByName', user)
   .then(res => {
     const data = res.data;
    ReactDOM.render(
      <ByFilter
      user = {res.data}
       />, document.getElementById("root"));
  })
   .catch(err => console.log("errorrr--->>in searching name"));
  }


  Render2(e){
    e.preventDefault();
    //ReactDOM.render(<Dashboard />, document.getElementById("root"));
    console.log("on submit filter");
    
    const filterStatus = {
      filter: this.state.filter
    }
    
    console.log(filterStatus);
    console.log("status.filter" + filterStatus.filter);

   axios.post('http://localhost:5000/page1/findByFilter', filterStatus)
   .then(res => {
     const data = res.data;
     this.setState( { posts: data });
    ReactDOM.render(
      <ByFilter
      user = {res.data}
       />, document.getElementById("root"));
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
            <label className="searchlabel" for="fname">Search by Name</label>
            <br />
            <input type="text" id="fname" name="fname" placeholder=" Employee Name" onChange={this.onChangeempName} />
            <button type="button" className="searchbysubmit" onClick ={this.Render1}>Search</button>
            <br /><br /> 
            <label className="searchlabel" for="fname">Search by Filter</label>
            <br />
          <input list="browsers" placeholder=" Select" onChange={this.onChangefilter} />
          <datalist id="browsers" >
            <option value="At Office" />
            <option value="Working From Home" />
            <option value="On Leave" />
            <option value="On Sick Leave" />
            <option value="Business Trip" />
          </datalist>
          <button type="button" className="searchbysubmit" onClick ={this.Render2}>Search</button>
          <br /><br />
            <br />
          </fieldset>
          <br />
          
        </form>
        <br /><br />
      </div>     );
     }
}

