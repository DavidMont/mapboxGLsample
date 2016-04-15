import React from "react";
import Map from "./Map";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';




export default class Whole extends React.Component {

    render() {
        return (
            <form>
                <Map />
                <Header />
                <Body />
            </form>
        );
    }
}
