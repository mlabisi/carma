import React, {Component} from 'react';
import Discover from "../containers/Discover"

class DiscoverPage extends Component {
    render() {
        return (
            <div>
                <div> Welcome to Carma </div>
                <div>
                    <Discover />
                </div>
            </div>
        )
    }
}

export default DiscoverPage;