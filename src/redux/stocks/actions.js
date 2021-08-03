export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';

export const addToWATCHLIST = id => {
    return {
        type: ADD_TO_WATCHLIST,
        id
    };
};
export const removeFromWATCHLIST = id => {
    return {
        type: REMOVE_FROM_WATCHLIST,
        id,
    };
};
