import * as React from "react";
import GLMap from "./GLMap";
import FloatingActionButton from 'material-ui/lib/floating-action-button';

var map = React.createClass({
  getInitialState: function() {
    return {
      mapToken: 'pk.eyJ1IjoianJvam9vIiwiYSI6IjU5YWMxNTI2MzA2MzlmNWUxNWNhOGE2M2QwZTI2YTExIn0.cNrKr17Aley6AYfK245vlA',
      mapView: {
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v8',
          center: [-74.50, 40],
          zoom: 9
      },
    };
  },

    fly : function() {
        // Fly to a random location by offsetting the point -74.50, 40
        // by up to 5 degrees.
        map.flyTo({
            center: [
                -74.50 + (Math.random() - 0.5) * 10,
                40 + (Math.random() - 0.5) * 10]
        });
    },

  render: function() {
    return (
        <div className="map" >
          <GLMap view={this.state.mapView} token={this.state.mapToken}  />
            <FloatingActionButton secondary={true} onTouchTap={this.fly}>
                Fly!
            </FloatingActionButton>
        </div>
    )
  }
});


export default map;

