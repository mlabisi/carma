import actionTypes from "../constants/actionTypes";

function listingAdded(listing) {
    return {
        type: actionTypes.LISTING_ADDED,
        listing: listing
    }
}