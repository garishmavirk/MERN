import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import img from "./img.jpeg";
import "./setStatus.css";
import Header from "../../Header";

export default class SetStatus extends Component {
  constructor(props) {
    super(props);
    this.Render1 = this.Render1.bind(this);
    this.Render2 = this.Render2.bind(this);
    this.Render3 = this.Render3.bind(this);
    this.Render4 = this.Render4.bind(this);
    this.Render5 = this.Render5.bind(this);
    this.onClick = this.onClick.bind(this);

    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.getUserAddress = this.getUserAddress.bind(this);

    this.state = {
      status: '',
      message: '',
      latitude: "N/A",
      longitude: "N/A",
      userAddress: "N/A"
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

  setNA(){
    this.setState({
      latitude: "N/A", 
      longitude: "N/A"
    });
    console.log("insise function "+this.state.latitude);
    console.log("this also "+this.state.longitude);
  }


  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleError);
    } else {
      alert("GeoLocation is not supported by this browser");
    }
  }

  getCoordinates(position) {
      this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
      });
      console.log("inside function "+this.state.latitude);
      console.log("this also "+this.state.longitude);
    }

    getUserAddress(){

    }

  handleError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
      default:
        alert("An unknown error occurred.")
      }
    }



  onClick(e){
    e.preventDefault();
    //ReactDOM.render(<Dashboard />, document.getElementById("root"));
    console.log("on clicking set this as state");
    
    
    const user = {
      status: this.state.status,
      empID: "E001"
    }
    
    console.log("user.status " + user.status);
    
    if(user.status.length > 1){
        console.log("status fetching...")
        //this.setState({message: "Status updated successfully!! ["+user.status+"]"});
        axios.post('http://localhost:5000/page1/findByempID', user)
        .then(res => {
          if (res.data.empID === user.empID){
            console.log(res.data._id);
            console.log("id matched");
            axios.patch('http://localhost:5000/page1/updateStatus/'+res.data._id, user)
            .then(res => {
              if(user.status==="On Leave" || user.status==="On Sick Leave"){
                console.log("On leave or sick leave (inside if)");
                this.setNA();
                }
              if(user.status!=="On Leave" && user.status!=="On Sick Leave"){
                console.log("inside other if");
                this.getLocation();
                }
              this.setState({message: "Status updated successfully!! ["+user.status+"]"});
            })
        .catch(err => {console.log("some errorrr");});
          }
        })
        .catch(err => {console.log("some errorrr");});
      }
    else{
      this.setState({message: "First select which status you want to set!!"});
  }
}



  render() {
    return (
        <div className="set">
          <Header />
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
                <button type="button" className="righthalfbutton" onClick ={this.Render1}>At Office</button><br />
                <button type="button" className="righthalfbutton" onClick ={this.Render2}>Working From Home</button><br />
                <button type="button" className="righthalfbutton" onClick ={this.Render3}>On Leave</button><br />
                <button type="button" className="righthalfbutton" onClick ={this.Render4}>On Sick Leave</button><br />
                <button type="button" className="righthalfbutton" onClick ={this.Render5}>Business Trip</button><br />
                <button className="setit" onClick ={this.onClick}>Set it as your status</button>
                <br />
                {this.state.message}
                </div>
            </div>
        </div>);
     }
}

