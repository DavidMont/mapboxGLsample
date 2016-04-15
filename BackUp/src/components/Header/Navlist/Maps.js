import React from "react";


export default class Maps extends React.Component {
    render() {
        return (
            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Maps <span className="caret"></span></a>
                <ul className="dropdown-menu">
                    <li><a href="#">Live Map</a></li>
                    <li><a href="#">Active Geo-Fences</a></li>
                    <li><a href="#">Geo-Fence Groups</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">Location Groups</a></li>
                    <li><a href="#">Trip Plan</a></li>
                    <li><a href="#">Trip Player</a></li>
                </ul>
            </li>
        );
    }
}
