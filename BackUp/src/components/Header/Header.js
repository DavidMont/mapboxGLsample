import React from 'react';
import Navigation from './NavButtons/Navigation';
import Logo from './Logo';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    
    handleToggle() {this.setState({open: !this.state.open})};
    
    render() {
        return (
                <div>
                    <Navigation />
                </div>
        );
    }
}

