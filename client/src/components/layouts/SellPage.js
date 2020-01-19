import React, {Component} from 'react';
import Sell from "../containers/Sell"

class SellPage extends Component {
    render() {
        return (
            <div>
                <div> <h1>My Listings</h1> </div>
                <div>
                    <Sell/>
                </div>
            </div>
        )
    }
}

export default SellPage;