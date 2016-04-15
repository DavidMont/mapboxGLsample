import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class Help extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    handleChange(event, index, value){ this.setState({value})}

    render() {
        return (
            <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
                <MenuItem value={1} primaryText="Help Topics"/>
                <MenuItem value={2} primaryText="Contact Us"/>
                <MenuItem value={3} primaryText="About CLiCTraQ"/>
            </DropDownMenu>
        );
    }
}