import React from 'react';
import TextField from 'material-ui/lib/text-field';

export default class Username extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var style = {
            fontSize: 13,
            padding: 10,
            marginRight: 10,
            width: 100
        };
        return (
            <TextField hintText="username" style={style}/>
        );
    }
}