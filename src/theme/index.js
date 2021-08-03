import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Dimensions, Platform, PixelRatio } from 'react-native';

import { material } from 'react-native-typography';
import { getFontScale } from 'react-native/Libraries/Utilities/PixelRatio';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320 * getFontScale();

function normalize(size) {
    // console.log(PixelRatio.getPixelSizeForLayoutSize())
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

const spacing = (unit: Number) => normalize(unit * 8);

const util = StyleSheet.create({
    // margin & padding 0 - 3
    m0: {
        margin: spacing(0),
    },
    m1: {
        margin: spacing(1),
    },
    m2: {
        margin: spacing(2),
    },
    m3: {
        margin: spacing(3),
    },
    p0: {
        padding: spacing(0),
    },
    p1: {
        padding: spacing(1),
    },
    p2: {
        padding: spacing(2),
    },
    p3: {
        padding: spacing(3),
    },

    my0: {
        marginVertical: spacing(0),
    },
    my1: {
        marginVertical: spacing(1),
    },
    my2: {
        marginVertical: spacing(3),
    },
    my3: {
        marginVertical: spacing(3),
    },
    py0: {
        paddingVertical: spacing(0),
    },
    py1: {
        paddingVertical: spacing(1),
    },
    py2: {
        paddingVertical: spacing(2),
    },
    py3: {
        paddingVertical: spacing(3),
    },


    mt0: {
        marginTop: spacing(0),
    },
    mt1: {
        marginTop: spacing(1),
    },
    mt2: {
        marginTop: spacing(2),
    },
    mt3: {
        marginTop: spacing(3),
    },
    pt0: {
        paddingTop: spacing(0),
    },
    pt1: {
        paddingTop: spacing(1),
    },
    pt2: {
        paddingTop: spacing(2),
    },
    pt3: {
        paddingTop: spacing(3),
    },


    mb0: {
        marginBottom: spacing(0),
    },
    mb1: {
        marginBottom: spacing(1),
    },
    mb2: {
        marginBottom: spacing(2),
    },
    mb3: {
        marginBottom: spacing(3),
    },
    pb0: {
        paddingBottom: spacing(0),
    },
    pb1: {
        paddingBottom: spacing(1),
    },
    pb2: {
        paddingBottom: spacing(2),
    },
    pb3: {
        paddingBottom: spacing(3),
    },


    mx0: {
        marginHorizontal: spacing(0),
    },
    mx1: {
        marginHorizontal: spacing(1),
    },
    mx2: {
        marginHorizontal: spacing(2),
    },
    mx3: {
        marginHorizontal: spacing(3),
    },
    px0: {
        paddingHorizontal: spacing(0),
    },
    px1: {
        paddingHorizontal: spacing(1),
    },
    px2: {
        paddingHorizontal: spacing(2),
    },
    px3: {
        paddingHorizontal: spacing(3),
    },

    ml0: {
        marginLeft: spacing(0),
    },
    ml1: {
        marginLeft: spacing(1),
    },
    ml2: {
        marginLeft: spacing(2),
    },
    ml3: {
        marginLeft: spacing(3),
    },
    pl0: {
        paddingLeft: spacing(0),
    },
    pl1: {
        paddingLeft: spacing(1),
    },
    pl2: {
        paddingLeft: spacing(2),
    },
    pl3: {
        paddingLeft: spacing(3),
    },

    mr0: {
        marginRight: spacing(0),
    },
    mr1: {
        marginRight: spacing(1),
    },
    mr2: {
        marginRight: spacing(2),
    },
    mr3: {
        marginRight: spacing(3),
    },
    pr0: {
        paddingRight: spacing(0),
    },
    pr1: {
        paddingRight: spacing(1),
    },
    pr2: {
        paddingRight: spacing(2),
    },
    pr3: {
        paddingRight: spacing(3),
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


    body1: {
        ...material.body1Object,
        fontSize: normalize(14),
    },
    body2: {
        ...material.body2Object,
        fontSize: normalize(14),
    },
    subheading: {
        ...material.subheadingObject,
        fontSize: normalize(16),
    },
    title: {
        ...material.titleObject,
        fontSize: normalize(20),
    },
    caption: {
        ...material.captionObject,
        fontSize: normalize(12),
    },
    buttonText: {
        ...material.buttonObject,
        fontSize: normalize(14),
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
    moderateScale,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
}