import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';

export default class Link extends React.Component {

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
            left:    0,
            bottom:   0
        }
        return (
            <div style={padding}>
                <FloatingActionButton mini={true} secondary={true} onTouchTap={this.handleToggle.bind(this)}>
                    Links
                </FloatingActionButton>

                <LeftNav width={400} open={this.state.open}>
                    <div onTouchTap={this.handleToggle.bind(this)} style={bottom}>Click me to close</div>

                </LeftNav>
            </div>
        );
    }
}