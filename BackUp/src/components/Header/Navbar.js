import React from 'react';
import Maps from "./Navlist/Maps";
import Assets from "./Navlist/Assets";
import Help from "./Navlist/Help";
import Reports from "./Navlist/Reports";
import Home from "./Navlist/Home";
import Logo from "./Logo";

export default class Navbar extends React.Component {
    render() {

        return (
            <div >
                <nav className="navbar navbar-inverse" width="40px">
                    <div className="container-fluid">
                        <div className="navbar-header">

                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Logo />
                        </div>

                        <div className="collapse navbar-collapse" id="myNavbar">

                            <ul className="nav navbar-nav">
                                <Home />
                                <Maps />
                                <Assets />
                                <Reports />
                                <Help />
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
            
        );
    }
}

