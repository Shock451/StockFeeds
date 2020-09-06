import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Dimensions, Platform, PixelRatio } from 'react-native';

import { material } from 'react-native-typography';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

const palette = {
    primary: '#6E4E8C',
    secondary: '#DEF4FF',
    regular: '#587B7F',
    premium: '#D66853',
    classic: '#040403',
    white: '#ffffff',
    black: '#000000',
    light: '#DEF4FF',
    darkish: '#A6A1C6',
    grey: '#999999',
    primaryLight: '#8565A3',
    darkRed: '#CC0000',
};

const spacing = (unit: Number) => moderateScale(unit * 8);

const util = StyleSheet.create({
    // margin & padding 0 - 3
    m0: {
        margin: moderateScale(spacing(0)),
    },
    m1: {
        margin: moderateScale(spacing(1)),
    },
    m2: {
        margin: moderateScale(spacing(2)),
    },
    m3: {
        margin: moderateScale(spacing(3)),
    },
    p0: {
        padding: moderateScale(spacing(0)),
    },
    p1: {
        padding: moderateScale(spacing(1)),
    },
    p2: {
        padding: moderateScale(spacing(2)),
    },
    p3: {
        padding: moderateScale(spacing(3)),
    },

    my0: {
        marginVertical: moderateScale(spacing(0)),
    },
    my1: {
        marginVertical: moderateScale(spacing(1)),
    },
    my2: {
        marginVertical: moderateScale(spacing(3)),
    },
    my3: {
        marginVertical: moderateScale(spacing(3)),
    },
    py0: {
        paddingVertical: moderateScale(spacing(0)),
    },
    py1: {
        paddingVertical: moderateScale(spacing(1)),
    },
    py2: {
        paddingVertical: moderateScale(spacing(2)),
    },
    py3: {
        paddingVertical: moderateScale(spacing(3)),
    },


    mt0: {
        marginTop: moderateScale(spacing(0)),
    },
    mt1: {
        marginTop: moderateScale(spacing(1)),
    },
    mt2: {
        marginTop: moderateScale(spacing(2)),
    },
    mt3: {
        marginTop: moderateScale(spacing(3)),
    },
    pt0: {
        paddingTop: moderateScale(spacing(0)),
    },
    pt1: {
        paddingTop: moderateScale(spacing(1)),
    },
    pt2: {
        paddingTop: moderateScale(spacing(2)),
    },
    pt3: {
        paddingTop: moderateScale(spacing(3)),
    },


    mb0: {
        marginBottom: moderateScale(spacing(0)),
    },
    mb1: {
        marginBottom: moderateScale(spacing(1)),
    },
    mb2: {
        marginBottom: moderateScale(spacing(2)),
    },
    mb3: {
        marginBottom: moderateScale(spacing(3)),
    },
    pb0: {
        paddingBottom: moderateScale(spacing(0)),
    },
    pb1: {
        paddingBottom: moderateScale(spacing(1)),
    },
    pb2: {
        paddingBottom: moderateScale(spacing(2)),
    },
    pb3: {
        paddingBottom: moderateScale(spacing(3)),
    },


    mx0: {
        marginHorizontal: moderateScale(spacing(0)),
    },
    mx1: {
        marginHorizontal: moderateScale(spacing(1)),
    },
    mx2: {
        marginHorizontal: moderateScale(spacing(2)),
    },
    mx3: {
        marginHorizontal: moderateScale(spacing(3)),
    },
    px0: {
        paddingHorizontal: moderateScale(spacing(0)),
    },
    px1: {
        paddingHorizontal: moderateScale(spacing(1)),
    },
    px2: {
        paddingHorizontal: moderateScale(spacing(2)),
    },
    px3: {
        paddingHorizontal: moderateScale(spacing(3)),
    },

    ml0: {
        marginLeft: moderateScale(spacing(0)),
    },
    ml1: {
        marginLeft: moderateScale(spacing(1)),
    },
    ml2: {
        marginLeft: moderateScale(spacing(2)),
    },
    ml3: {
        marginLeft: moderateScale(spacing(3)),
    },
    pl0: {
        paddingLeft: moderateScale(spacing(0)),
    },
    pl1: {
        paddingLeft: moderateScale(spacing(1)),
    },
    pl2: {
        paddingLeft: moderateScale(spacing(2)),
    },
    pl3: {
        paddingLeft: moderateScale(spacing(3)),
    },

    mr0: {
        marginRight: moderateScale(spacing(0)),
    },
    mr1: {
        marginRight: moderateScale(spacing(1)),
    },
    mr2: {
        marginRight: moderateScale(spacing(2)),
    },
    mr3: {
        marginRight: moderateScale(spacing(3)),
    },
    pr0: {
        paddingRight: moderateScale(spacing(0)),
    },
    pr1: {
        paddingRight: moderateScale(spacing(1)),
    },
    pr2: {
        paddingRight: moderateScale(spacing(2)),
    },
    pr3: {
        paddingRight: moderateScale(spacing(3)),
    },

    containerXY: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // fonts bruh
    lobster: {
        fontFamily: 'Lobster-Regular',
    },
    openSans: {
        fontFamily: 'OpenSans-Regular',
    },

    w100: {
        width: '100%',
    },

    textBold: {
        fontWeight: 'bold',
    },


    mini: {
        fontSize: normalize(12),
    },
    small: {
        fontSize: normalize(15),
    },
    medium: {
        fontSize: normalize(17),
    },
    large: {
        fontSize: normalize(20),
    },
    xlarge: {
        fontSize: normalize(24),
    },
    superlarge: {
        fontSize: normalize(36),
    },

    textInput: {
        ...material.subheadingObject,
        padding: normalize(12),
        borderColor: '#DDDDDD',
        borderBottomWidth: 0.5,
    },
    textInputBordered: {
        ...material.body1Object,
        padding: normalize(12),
        borderColor: '#DDDDDD',
        borderWidth: 1,
        // elevation: 1,
        borderRadius: 2,
    },
    searchBar: {
        ...material.body2Object,
        padding: normalize(10),
        paddingLeft: normalize(16),
        borderColor: '#DDDDDD',
        borderWidth: 1,
        // elevation: 1,
        borderRadius: 20,
    }
})

export {
    spacing,
    util,
    palette,
    normalize,
}