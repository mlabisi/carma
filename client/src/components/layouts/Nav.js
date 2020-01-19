import React, {Component} from "react";
import {Link} from 'react-router-dom'

class Nav extends Component{
    render() {
        return (
            <div>
                <div>
                    <h1>Carma</h1>
                </div>
                <div>
                    {this.props.children}
                    <ul>
                        <li><Link to={'/'}>Discover</Link></li>
                        <li><Link to={'/matches'}>Matches</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav