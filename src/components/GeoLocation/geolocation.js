import React from 'react';
import "./geolocation.css";
import Header from "../Header";
import Map1 from "./map";
import axios from "axios";
import img from "./img.jpg";

class GeoLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empName: '',
            latitude: "N/A",
            longitude: "N/A",
            userAddress: "N/A",
            message: "Your Location"
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.getUserAddress = this.getUserAddress.bind(this);
        this.onChangeempName = this.onChangeempName.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChangeempName(e){
      this.setState({empName: e.target.value});
    }

    onClick(e){
      e.preventDefault();
      //ReactDOM.render(<Dashboard />, document.getElementById("root"));
      console.log("on clicking get location");
      
      const user = {
        empName: this.state.empName
      }
      
      console.log(user);
      console.log("user.name" + user.empName);
  
     axios.post('http://localhost:5000/page1/findByName', user)
     .then(res => {
       var location = res.data[0];
       this.setState({
        latitude: res.data[0].latitude,
        longitude: res.data[0].longitude
    });
    console.log(res.data[0].latitude + res.data[0].longitude)
    })
     .catch(err => console.log("errorrr--->>in searching name"));
    }

    getLocation() {
      console.log("locate "+this.state.empName);
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleError);
        } else {
          alert("GeoLocation is not supported by this browser");
        }
      }

      getCoordinates(position) {
          console.log(position.coords);
          this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
          })
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


    getUserAddress(){

    }

    render() {
        return (
            <div className="map">
              <Header />
                <input type="text" id="location" name="location" placeholder=" Enter Employee Name" onChange={this.onChangeempName} />
                <br />
                <button class="getLocation" onClick={this.onClick}>Get location</button>
                <br />
                <h2>
                latitude: {this.state.latitude}</h2>
                <h2>
                longitude: {this.state.longitude}</h2>
                <div class="mapImg">
                {
                    (this.state.latitude!=="N/A") && (this.state.longitude!=="N/A") ?
                    
                    <Map1 />
                    :
                    <img class="imgalt" src={img} alt="Find Geolocation of your Employees"/>

                }
                </div>
            </div>
        )
    }
}

export default GeoLocation;