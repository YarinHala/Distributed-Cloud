import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    active = {
        backgroundColor: "#212F3D",
        color: "white",
        fontWeight: "bold"
    };
    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
    };
    render() {
        return (
            <div style={this.header}>
                <NavLink exact to="/" activeStyle={this.active}>
                Get All Top Book
                </NavLink>
                <NavLink to="/StoryById" activeStyle={this.active}>
                Get top Book By ID
                </NavLink>
                <NavLink to="/StoryByIdAndPrice" activeStyle={this.active}>
                Best Stars Price
                </NavLink>
            </div>
);}}
export default Header;