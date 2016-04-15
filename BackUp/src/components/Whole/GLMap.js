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

export  default GLMap;