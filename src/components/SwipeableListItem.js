import React from 'react';

import {
  View,
  Text,
  Dimensions,
  Animated,
  PanResponder,
  TouchableOpacity,
  Easing,
  StyleSheet
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { normalize } from '../theme';

const SCREEN_WIDTH = Dimensions.get('window').width;
const RIGHT_BUTTON_THRESHOLD = (12 / 100) * SCREEN_WIDTH;
const FORCING_DURATION = 350;
const SCROLL_THRESHOLD = SCREEN_WIDTH / 30;

export default (props) => {
  const position = new Animated.ValueXY(0, 0);
  let swiping = false;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponder: (event, gesture) => {
      console.log(gesture)
      // console.log("It is " + (gesture.dy > gesture.dx) + " because gesture.dy = " + gesture.dy + ", gesture.dx " + gesture.dx)
      if (gesture.dy > gesture.dx){
        return false;
      }
      return true;
    },
    onPanResponderTerminationRequest: () => false,
    onPanResponderGrant: () => {
      // position.setOffset({ x: position.x._value, y: 0 });
      // position.setValue({x: })
    },

    onPanResponderMove: (evt, gesture) => {
      // if (gesture.dx <= -SCROLL_THRESHOLD) {
      toggleScrollView(true);
      // const x = gesture.dx + SCROLL_THRESHOLD;
      //   position.setValue({ x, y: 0 });
      // }
    },
    onPanResponderRelease: (event, gesture) => {
      // position.flattenOffset(); // adding animated value to the offset value then it reset the offset to 0.
      // if (gesture.dx > 0) {
      //   userSwipedRight(gesture);
      // } else {
      //   userSwipedLeft(gesture);
      // }
      // toggleScrollView(false)
    },
    onPanResponderTerminate: () => {
      // resetPosition();
      // toggleScrollView(false);
    }

  });

  const getRightButtonProps = () => {
    const opacity = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH, -70, -35],
      outputRange: [0, 1, 0]
    });
    const transform = [{
      translateX: position.x.interpolate({
        inputRange: [-70, 0],
        outputRange: [-70, 0],
      }),
    }];

    return {
      transform
    };
  }

  const resetPosition = () => {
    Animated.timing(position, {
      toValue: { x: 0, y: 0 },
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }

  const completeSwipe = (callback) => {
    const x = -SCREEN_WIDTH - (SCREEN_WIDTH / 4) - 10;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: FORCING_DURATION,
      useNativeDriver: true,
    }).start(() => props.cleanFromScreen(props.id));
    callback();
  }

  const toggleScrollView = (value) => {
    if (swiping !== value) {
      props.toggleScrolling(value);
      swiping = value;
    }
  }

  const userSwipedLeft = (gesture) => {
    // console.log(gesture.dx + " <= " + -(RIGHT_BUTTON_THRESHOLD))
    if (gesture.dx <= -(RIGHT_BUTTON_THRESHOLD + 10)) {
      showButton('left');
    } else {
      resetPosition();
    }
  }

  const userSwipedRight = (gesture) => {
    resetPosition();
    // if (gesture.dx >= FORCE_TO_OPEN_THRESHOLD) {
    // completeSwipe('right', props.leftButtonPressed.bind(this));

    // console.log(gesture.dx + " >= " + RIGHT_BUTTON_THRESHOLD)

    // if (gesture.dx >= RIGHT_BUTTON_THRESHOLD && gesture.dx < FORCE_TO_OPEN_THRESHOLD) {
    // showButton('right');
    // } else {
    // }
  }

  const showButton = () => {
    const x = (-SCREEN_WIDTH / 4) - 10;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: 400,
      useNativeDriver: true,
      easing: Easing.out(Easing.quad)
    }).start(() => toggleScrollView(false));
  }

  const { containerStyle,
    // leftButtonContainer, 
    textContainer, rightButtonContainer } = styles;
  return (

    <View style={containerStyle}>

      <Animated.View // THE CONTENT OF ITEM
        style={[textContainer, {
          transform: [
            { translateX: position.getLayout().left },
            { translateY: position.getLayout().top },
            // { perspective: 1000 }
          ]
          // position.getLayout()
        }]}
        {...panResponder.panHandlers}
      >
        <Text style={styles.textStyle}>{props.message}</Text>
      </Animated.View>

      <Animated.View
        style={[rightButtonContainer, {
          // transform: [{
          // translateX: SCREEN_WIDTH / 1.2,
          // }]
        },
          getRightButtonProps()
        ]}
      >
        <TouchableOpacity onPress={() => completeSwipe(() => props.deleteButtonPressed())}>
          <Ionicons name="md-remove-circle" color="#CF2500" size={normalize(20)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.editButtonPressed()}>
          <Ionicons name="md-menu" size={normalize(20)} />
        </TouchableOpacity>
      </Animated.View>

    </View>

  );
}


const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    borderTopWidth: .6,
    borderTopColor: '#3B3A41',
  },
  textContainer: {
    marginVertical: 5,
    paddingVertical: 10,
    borderRightWidth: .6,
    borderRightColor: '#3B3A41',
    paddingHorizontal: 20,
    width: SCREEN_WIDTH,
    zIndex: 2
  },
  textStyle: {
    fontSize: 17
  },
  rightButtonContainer: {
    // position: 'absolute',
    width: RIGHT_BUTTON_THRESHOLD,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    zIndex: 4,
    marginHorizontal: 5,
    display: 'flex',
    flexDirection: 'row',
  }
});