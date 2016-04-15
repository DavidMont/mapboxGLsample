import React from "react";


export default class LeftNav extends React.Component {
    render() {
        var ops = {
            width: "40px",
            height: "40px",
            backgroundColor:"#c0c0c0",
            backgroundImage: "./download.jpg"
        }
        return (
                <div className="container-fluid text-center">

                        <h3>1</h3>
                        <h3>2</h3>
                        <h3>3</h3>
                        <div style={ops}>4</div>
                </div>

        );
    }
}
