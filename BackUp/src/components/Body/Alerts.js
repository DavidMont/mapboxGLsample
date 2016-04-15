import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import FloatingActionButton from 'material-ui/lib/floating-action-button';

export default class Alerts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle  () { this.setState({open: !this.state.open})}


    render() {
        var padding = {
            padding: 10
        }
        var bottom = {
            position: 'absolute',
            right:    0,
            bottom:   0
        }
        return (
            <div style={padding}>
                <FloatingActionButton mini={true} secondary={true} onTouchTap={this.handleToggle.bind(this)}>
                    Alerts
                </FloatingActionButton>

                <LeftNav width={400} openRight={true} open={this.state.open}>
                    <div onTouchTap={this.handleToggle.bind(this)} style={bottom}>Click me to close</div>
                    
                </LeftNav>
            </div>
        );
    }
}