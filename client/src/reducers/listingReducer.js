import constants from '../constants/actionTypes'

let initialState = {
    listings: [],
    details: {},
    profile: {},
    detailsLoading: true
};

export default (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch (action.type) {
        case constants.LISTING_RECEIVED:
            updated['listings'] = action.listing;
            return updated;
        case constants.DETAILS_RECEIVED:
            updated['details'] = action.details;
            updated['detailsLoading'] = false;
            return updated;
        case constants.DETAILS_LOADING:
            updated['detailsLoading'] = true;
            return updated;
        case constants.PROFILE_RECEIVED:
            updated['profile'] = action.profile;
            return updated;
        default:
            return state
    }
}