import React from "react";
import Alerts from './Alerts';
import Link from './Link';

export default class Body extends React.Component {

    render() {
        var style = {
            position: 'fixed',
            width:'100%'
        }
        return (
            <div className="container-fluid text-center" style={style}>
                <div className="row content">
                    <div className="col-sm-1 sidenav">
                        <Link />
                    </div>
                    <div className="col-sm-10 text-left">

                    </div>
                    <div className="col-sm-1 sidenav">
                    <Alerts />
                    </div>
                </div>
            </div>
        );
    }
}

