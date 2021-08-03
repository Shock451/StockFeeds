import {
    ADD_TO_WATCHLIST,
    REMOVE_FROM_WATCHLIST,
} from './actions';

const initialState = {
    watchlist: [
        {
            key: 1,
            name: 'TSLA',
            company: 'Tesla, Inc.',
            price: '2,023.34',
            delta: 9.14,
            headline: `Tesla, Inc. Has $16.24 Million Holdings in Delta Air...`,
            summary: `Tesla Inc. lessened its stake in Delta Air Lines, Inc. (NYSE:DAL) by 47.6% in the 2nd...`,
            time: `8/26/20, 07:47 PM`,
            source: `Seeking Alpha - Long Ideas`,
            about: `Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. The company specializes in electric vehicle manufacturing, battery energy storage from home to grid scale and, through its acquisition of`,
        },
        {
            key: 2,
            name: 'JRJC',
            company: 'China Finance Online Co.',
            price: '2,023.34',
            delta: 9.14,
            headline: `China Finance: Take Advantage Of The First Mover Advantage`,
            summary: `China Finance is a company that has been heavily covered for both the right and wrong reasons. Initially formed in 2004 by...`,
            time: `5:30 AM`,
            source: `Fox Report`,
            about: `Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. The company specializes in electric vehicle manufacturing, battery energy storage from home to grid scale and, through its acquisition of`,
        },
        {
            key: 3,
            name: 'VXRT',
            company: 'Vaxart, Inc.',
            price: '23.34',
            delta: -16.14,
            headline: `Vaxart: Take Advantage Of The First Mover Advantage`,
            summary: `Vaxart is a company that has been heavily covered for both the right and wrong reasons. Initially formed in 2004 by...`,
            time: `10:42 AM`,
            source: `Ticker Report`,
            about: `Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. The company specializes in electric vehicle manufacturing, battery energy storage from home to grid scale and, through its acquisition of`,
        },
        {
            key: 4,
            name: 'SOLO',
            company: 'Electrameccanica Vehicles',
            price: '3.34',
            delta: -0.14,
            headline: `Electrameccanica Vehicles: Take Advantage Of The First Mover Advantage`,
            summary: `Electrameccanica Vehicles is a company that has been heavily covered for both the right and wrong reasons. Initially formed in 2004 by...`,
            time: `1:14 PM`,
            source: `US News`,
            about: `Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. The company specializes in electric vehicle manufacturing, battery energy storage from home to grid scale and, through its acquisition of`,
        },
        {
            key: 5,
            name: 'RHUB',
            company: 'Rhubtech, LLC.',
            price: '8,023.34',
            delta: -3.1,
            headline: `Rhubtech: Take Advantage Of The First Mover Advantage`,
            summary: `Rhubtech, LLC. is a company that has been heavily covered for both the right and wrong reasons. Initially formed in 2004 by...`,
            time: `9:42 PM`,
            source: `Fox Report`,
            about: `Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. The company specializes in electric vehicle manufacturing, battery energy storage from home to grid scale and, through its acquisition of`,
        },
        {
            key: 6,
            name: 'TSLA',
            company: 'Tesla, Inc.',
            price: '2,023.34',
            delta: 9.14,
            headline: `Tesla, Inc. Has $16.24 Million Holdings in Delta Air...`,
            summary: `Tesla Inc. lessened its stake in Delta Air Lines, Inc. (NYSE:DAL) by 47.6% in the 2nd...`,
            time: `8/26/20, 07:47 PM`,
            source: `Seeking Alpha - Long Ideas`,
            about: `Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. The company specializes in electric vehicle manufacturing, battery energy storage from home to grid scale and, through its acquisition of`,
        },
        {
            key: 7,
            name: 'JRJC',
            company: 'China Finance Online Co.',
            price: '2,023.34',
            delta: 9.14,
            headline: `China Finance: Take Advantage Of The First Mover Advantage`,
            summary: `China Finance is a company that has been heavily covered for both the right and wrong reasons. Initially formed in 2004 by...`,
            time: `5:30 AM`,
            source: `Fox Report`,
            about: `Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. The company specializes in electric vehicle manufacturing, battery energy storage from home to grid scale and, through its acquisition of`,
        },
        {
            key: 8,
            name: 'VXRT',
            company: 'Vaxart, Inc.',
            price: '23.34',
            delta: -16.14,
            headline: `Vaxart: Take Advantage Of The First Mover Advantage`,
            summary: `Vaxart is a company that has been heavily covered for both the right and wrong reasons. Initially formed in 2004 by...`,
            time: `10:42 AM`,
            source: `Ticker Report`,
            about: `Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. The company specializes in electric vehicle manufacturing, battery energy storage from home to grid scale and, through its acquisition of`,
        },
        {
            key: 9,
            name: 'SOLO',
            company: 'Electrameccanica Vehicles',
            price: '3.34',
            delta: -0.14,
            headline: `Electrameccanica Vehicles: Take Advantage Of The First Mover Advantage`,
            summary: `Electrameccanica Vehicles is a company that has been heavily covered for both the right and wrong reasons. Initially formed in 2004 by...`,
            time: `1:14 PM`,
            source: `US News`,
            about: `Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. The company specializes in electric vehicle manufacturing, battery energy storage from home to grid scale and, through its acquisition of`,
        },
        {
            key: 10,
            name: 'RHUB',
            company: 'Rhubtech, LLC.',
            price: '8,023.34',
            delta: -3.1,
            headline: `Rhubtech: Take Advantage Of The First Mover Advantage`,
            summary: `Rhubtech, LLC. is a company that has been heavily covered for both the right and wrong reasons. Initially formed in 2004 by...`,
            time: `9:42 PM`,
            source: `Fox Report`,
            about: `Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. The company specializes in electric vehicle manufacturing, battery energy storage from home to grid scale and, through its acquisition of`,
        },
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WATCHLIST:
            return {
                ...state,
                // watchlist: state.products.map(product =>
                //     product.id === action.id ? { ...product, selected: true, quantity: 1 } : product,
                // ),
            };
        case REMOVE_FROM_WATCHLIST:
            return {
                ...state,
                // products: state.products.map(product =>
                //     product.id === action.id
                //         ? { ...product, selected: false, quantity: 0 }
                //         : product,
                // ),
            };
        default:
            return state;
    }
};