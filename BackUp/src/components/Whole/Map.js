import * as React from "react";
import GLMap from './GLMap';
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

export default Map;

