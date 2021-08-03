import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import store from './src/redux/store';
import { Provider as StateProvider } from 'react-redux';

import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import MainNavigator from './src/navigators/MainNavigator';

export default function App() {

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadFOnts = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
    }

    loadFOnts();

    setIsReady(true);
  }, [])

  if (!isReady) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <StateProvider store={store}>
      <StatusBar style="auto" />
      <MainNavigator />
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
