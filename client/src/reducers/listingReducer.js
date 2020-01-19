import constants from '../constants/actionTypes'

let initialState = {
    listings: []
};

export default (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch (action.type) {
        case constants.LISTING_ADDED:
            updated['listings'] = action.listing
            return updated
        default:
            return state
    }
}