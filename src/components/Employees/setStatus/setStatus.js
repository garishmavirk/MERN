import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import img from "./img.jpeg";
import "./setStatus.css";

export default class SetStatus extends Component {
  constructor(props) {
    super(props);
    this.Render1 = this.Render1.bind(this);
    this.Render2 = this.Render2.bind(this);
    this.Render3 = this.Render3.bind(this);
    this.Render4 = this.Render4.bind(this);
    this.Render5 = this.Render5.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      status: '',
      message: ''
    }
  }


  Render1(e){
    e.preventDefault();
    this.setState({status: "At Office"});
  }
  Render2(e){
    e.preventDefault();
    this.setState({status: "Working From Home"});
  }
  Render3(e){
    e.preventDefault();
    this.setState({status: "On Leave"});
  }
  Render4(e){
    e.preventDefault();
    this.setState({status: "On Sick Leave"});
  }
  Render5(e){
    e.preventDefault();
    this.setState({status: "Business Trip"});
  }


  onClick(e){
    e.preventDefault();
    //ReactDOM.render(<Dashboard />, document.getElementById("root"));
    console.log("on clicking set this as state");
    
    const user = {
      status: this.state.status
    }
    
    console.log(user);
    console.log("user.status" + user.status);
    
    if(user.status.length > 1){
        console.log("status fetching...")
        this.setState({message: "Status updated successfully!! ["+user.status+"]"});
   /*axios.post('http://localhost:5000/page1/findByName', user)
   .then(res => {
     const data = res.data;
    this.setState({message: "Status updated successfully!! ["+user.status+"]"});
  })
   .catch(err => console.log("errorrr--->>in searching name"));*/
  }
  else{
    this.setState({message: "First select which status you want to set!!"});
  }
}



  render() {
    return (
        <div className="set">
            <div className="lefthalf">
                <div className="setbox">
                <p>Set Your Status</p>
                </div>
                <div>
                    <img className="setimg" src={img} />
                </div>
            </div>
            <div className="righthalf">
                <div class="righthalfinside">
                <button type="button" className="righthalfbutton" onClick ={this.Render1}>At Office</button>
                <button type="button" className="righthalfbutton" onClick ={this.Render2}>Working From Home</button>
                <button type="button" className="righthalfbutton" onClick ={this.Render3}>On Leave</button>
                <button type="button" className="righthalfbutton" onClick ={this.Render4}>On Sick Leave</button>
                <button type="button" className="righthalfbutton" onClick ={this.Render5}>Business Trip</button>
                <button className="setit" onClick ={this.onClick}>Set it as your status</button>
                <br />
                {this.state.message}
                </div>
            </div>
        </div>);
     }
}

