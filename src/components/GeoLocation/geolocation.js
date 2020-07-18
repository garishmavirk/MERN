import React from 'react';
import "./geolocation.css";
import Header from "../Header";
import Map1 from "./map";

class GeoLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: "N/A",
            longitude: "N/A",
            userAddress: "N/A"
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.getUserAddress = this.getUserAddress.bind(this);
    }

    getLocation() {
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
                <h2>GeoLocation</h2>
                <button class="getLocation" onClick={this.getLocation}>Get location</button>
                <br />
                <h2>
                latitude: {this.state.latitude}</h2>
                <h2>
                longitude: {this.state.longitude}</h2>
                <p>Address: {this.state.userAddress}</p>
                <div class="mapImg">
                {
                    this.state.latitude && this.state.longitude ?
                    <Map1 />
                    :
                    null

                }
                </div>
            </div>
        )
    }
}

export default GeoLocation;