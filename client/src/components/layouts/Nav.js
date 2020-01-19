import React, {Component} from "react";
import {Link} from 'react-router-dom'
import {connect} from "react-redux";

class Nav extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Carma</h1>
                </div>
                <div>
                    {this.props.children}
                    <ul>
                        <li><Link to={`/`}>Discover</Link></li>
                        <li><Link to={'/sell'}>Sell</Link></li>
                        <li><Link to={'/likes'}>Likes</Link></li>
                        <li><Link to={'/account'}>My Account</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav