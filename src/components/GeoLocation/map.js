import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./geolocation.css";

const mapStyles = {
  width: "50%",
  height: "53%"
};

class Map1 extends Component {
  constructor(props) {
    super();
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <div>
        <Map className="mapImginside"
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 26.8467088,
            lng: 80.9461592
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"This is test name"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBYNepLgidm7EgZKRHh9umjG8WtSnXDbiw"
})(Map1);
