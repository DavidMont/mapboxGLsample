import React from 'react';
import Snackbar from 'material-ui/lib/snackbar';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    };

    handleRequestClose() {
        this.setState({
            open: false,
        });
    };

    render() {
        var footer = {
            position: 'fix',
            width: 100
        }
        return (
            <footer className="container-fluid text-center" >
            <div style={footer}>
                <RaisedButton
                    onTouchTap={this.handleTouchTap.bind(this)}
                    label="Add to my calendar"
                />
                <Snackbar
                    open={this.state.open}
                    message="Event added to your calendar"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose.bind(this)}
                />
            </div>
                </footer>
        );
    }
}
