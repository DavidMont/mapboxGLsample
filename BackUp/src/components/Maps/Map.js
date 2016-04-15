import * as React from "react";
var Map = React.createClass({
  getInitialState: function() {
    return {
      mapToken: 'pk.eyJ1IjoianJvam9vIiwiYSI6IjU5YWMxNTI2MzA2MzlmNWUxNWNhOGE2M2QwZTI2YTExIn0.cNrKr17Aley6AYfK245vlA',
      mapView: {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v8',
        center: [-122.6, 45.5],
        zoom: 9
      }
    };
  },

  render: function() {
    return (
        <div className="Map">
          <GLMap view={this.state.mapView} token={this.state.mapToken}/>
        </div>
    )
  }
});

var GLMap = React.createClass({
  propTypes: {
    view: React.PropTypes.object,
    token: React.PropTypes.string
  },

  render: function() {
    var mapStyle = {
      position: 'absolute',
      top:0,
      bottom:0,
      width:'100%',
      height:'100%',
      zIndex: -1
    };

    return (
        <div>
          <div id='map' style={mapStyle}></div>
        </div>
    )
  },

  componentDidMount: function() {
    var el = ReactDOM.findDOMNode();
    mapboxgl.accessToken = this.props.token;
    this.map = new mapboxgl.Map(this.props.view);
  },

  componentWillUnmount: function() {
    this.map.remove();
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode());
  }
});

export default Map;

