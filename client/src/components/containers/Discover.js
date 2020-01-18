import React, {Component} from 'react'
import CarListing from "../presentation/CarListing";

class Discover extends Component {
    render () {
        return ( <div>
            <h2>Potential Matches</h2>
            <ul>
                <li><CarListing id={1} title={"Hyundai Accent"} teaser={"Used 2012 Hyundai Accent in Torrance, CA"}/></li>
                <li><CarListing id={2} title={"Tesla Model 3"} teaser={"New Tesla Model 3 in Pomona, CA"}/></li>
            </ul>
        </div>)
    }
}

export default Discover