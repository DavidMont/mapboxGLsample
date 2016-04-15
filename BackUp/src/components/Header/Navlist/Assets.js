import React from "react";


export default class Assets extends React.Component {
    render() {
        return (
            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Assets <span className="caret"></span></a>
                <ul className="dropdown-menu">
                    <li><a href="#">Vehicles</a></li>
                    <li><a href="#">Vehicles Group</a></li>
                </ul>
            </li>
        );
    }
}
