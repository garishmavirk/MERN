import React from 'react';
import "./geolocation.css";

class GeoLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: "N/A",
            longitude: "N/A"
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleError);
        } else {
          alert("GeoLocation is not supported by this browser");
        }
      }

      getCoordinates(position) {
          console.log(position);
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
            }
    }


    render() {
        return (
            <div className="map">
                <h2>GeoLocation</h2>
                <button onClick={this.getLocation}>Get location</button>
                <br />
                <h2>
                latitude: {this.state.latitude}</h2>
                <br />
                <h2>
                longitude: {this.state.longitude}</h2>
                <img src="http://maps.googleapis.com/maps/api/geocode/json?latlng=[28],[46]&sensor=true" alt='' />
            </div>
        )
    }
}

export default GeoLocation;