import React, {Component} from "react";
import CarListingDetail from "../presentation/CarListingDetail";
import {connect} from 'react-redux'
import {fetchDetails} from "../../actions/actions";

class Listing extends Component {
    componentDidMount() {
        this.props.dispatch(fetchDetails(this.props.match.params.id));
    }

    render() {
        return (
            <div>
                <h2>Listing Details</h2>
                <ul>
                    {!this.props.detailsLoading ? <CarListingDetail details = {this.props.details} /> : <div>Loading</div>}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        details: state.store.details,
        detailsLoading: state.store.detailsLoading
    }
};

export default connect(mapStateToProps)(Listing)