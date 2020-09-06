import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import StockDetailsScreen from '../screens/StockDetailsScreen';
import AllStocksScreen from '../screens/AllStocksScreen';

const Stack = createStackNavigator();

export default function Home() {

    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Overview" component={HomeScreen} />
            <Stack.Screen name="StockDetails" component={StockDetailsScreen} />
            <Stack.Screen name="AllStocks" component={AllStocksScreen} />
        </Stack.Navigator>
    );
}