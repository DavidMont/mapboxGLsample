import React from "react";


export default class Maps extends React.Component {
    render() {
        return (
            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Help <span className="caret"></span></a>
                <ul className="dropdown-menu">
                    <li><a href="#">Help Topics</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About CLiCTraQ</a></li>
                </ul>
            </li>
        );
    }
}
