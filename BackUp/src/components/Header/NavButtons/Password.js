import React from 'react';
import TextField from 'material-ui/lib/text-field';

export default class Password extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var style = {
            fontSize: 13,
            padding: 10,
            width: 100
        };
        return (
            <TextField hintText="password" style={style}  type="password"/>
        );
    }
}