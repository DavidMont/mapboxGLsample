import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class Maps extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};

    }

    handleChange(event, index, value){ this.setState({value} )}

    render() {
        return (
            <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
                <MenuItem value={1} primaryText="Live Map"/>
                <MenuItem value={2} primaryText="Active Geo-Fences"/>
                <MenuItem value={3} primaryText="Geo-Fence Groups"/>
                <MenuItem value={4} primaryText="Locations"/>
                <MenuItem value={5} primaryText="Location Groups"/>
                <MenuItem value={6} primaryText="Locations"/>
                <MenuItem value={7} primaryText="Locations"/>
            </DropDownMenu>
        );
    }
}