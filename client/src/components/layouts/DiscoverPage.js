import React, {Component} from 'react';
import Discover from "../containers/Discover"

class DiscoverPage extends Component {
    render() {
        return (
            <div>
                <div> <h1>Your Personal Marketplace</h1> </div>
                <div>
                    <Discover/>
                </div>
            </div>
        )
    }
}

export default DiscoverPage;