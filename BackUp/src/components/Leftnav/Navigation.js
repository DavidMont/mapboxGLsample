import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';


export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle() {this.setState({open: !this.state.open})};

    render() {
        return (
            <div>
                <IconButton left="50" tooltip="Show NavigationBar" touch={true} tooltipPosition="bottom-right" onTouchTap={this.handleToggle.bind(this)}>
                    
                </IconButton>
                <LeftNav width={200} openRight={true} open={this.state.open} >
                    <AppBar title="CliCTraQ" onTouchTap={this.handleToggle.bind(this)} />
                </LeftNav>
            </div>
        );
    }
}