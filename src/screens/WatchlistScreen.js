import React, { useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';

import { useSelector } from 'react-redux'

import { SwipeListView } from 'react-native-swipe-list-view';

import { Ionicons } from '@expo/vector-icons';

import {
    normalize,
    util,
    palette
} from '../theme';


import {
    Container,
    Content,
    Header,
    Text
} from 'native-base';

import { material, systemWeights } from 'react-native-typography';
import { ScrollView } from 'react-native-gesture-handler';

function WatchlistScreen({ navigation }) {

    const stocks = useSelector(state => state.stocks)

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = data => {
        return (
            <TouchableHighlight
                onPress={() => navigation.navigate('StockDetails', {
                    key: data.item.key - 1,
                })}
                style={styles.rowFront}
                underlayColor={'#fafafa'}
            >
                <View style={[{ height: '100%', flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <View style={[{ justifyContent: 'space-evenly' }]}>
                        <Text style={[util.subheading, systemWeights.bold, { color: '#3B3A41' }]}>{data.item.name}</Text>
                        <Text>{data.item.company}</Text>
                    </View>
                    <View style={[{ justifyContent: 'space-evenly' }]}>
                        <Text style={[util.subheading, { color: '#3B3A41', textAlign: 'right' }]}>{data.item.price}</Text>
                        <Text style={[{
                            color: data.item.delta > 0 ? "#00962A" : "#CF2500",
                            textAlign: 'right'
                        }]}
                        >
                            {data.item.delta}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    const renderHiddenItem = (data, rowMap) => {
        return (
            <View style={styles.rowBack}>
                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]}>
                    <Ionicons
                        name={data.item.delta > 0 ? "md-add-circle" : "md-remove-circle"}
                        color={data.item.delta > 0 ? "#00962A" : "#CF2500"}
                        size={normalize(16)} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]}>
                    <Ionicons name="md-menu" color="#3B3A41" size={normalize(16)} />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container style={[{ backgroundColor: palette.white }]}>
                <Header transparent style={{ height: 0, backgroundColor: '#ffffff' }} />
                <View style={styles.container}>
                    <SwipeListView
                        ListHeaderComponent={
                            <View style={[util.m2]}>
                                <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end", width: '100%' }]}>
                                    <Text style={[util.title]}>Watchlist</Text>
                                    <Ionicons name="md-search" size={material.titleObject.fontSize} />
                                </View>
                                <TouchableOpacity style={[util.mt3]} activeOpacity={.8} onPress={()=>navigation.navigate("AllStocks")}>
                                    <Text style={[util.buttonText, { textDecorationLine: 'underline', textAlign: 'right' }]}>Show me all stocks instead</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        data={stocks.watchlist}
                        renderItem={renderItem}
                        renderHiddenItem={renderHiddenItem}
                        leftOpenValue={0}
                        keyExtractor={item => item.key.toString()}
                        rightOpenValue={-60}
                        previewRowKey={'0'}
                        previewOpenValue={-40}
                        previewOpenDelay={3000}
                        onRowDidOpen={onRowDidOpen}
                    />
                </View>
            </Container>
        </SafeAreaView>
    );
}

export default WatchlistScreen;

const TrendingItem = ({ stock }) => {
    return (
        <View style={[util.p1, util.mr1, { width: 70.27, borderWidth: 1, borderColor: '#000000', borderRadius: 9 }]}>
            <Text style={[util.subheading, systemWeights.bold]}>{stock.name}</Text>
            <Text style={[util.body1, util.mb1]}>{stock.price}</Text>
            <Text style={[util.caption, { marginTop: 'auto' }]}>{stock.delta}</Text>
        </View>
    );
};

const NewsItem = ({ news }) => {
    return (
        <View style={[{
            paddingVertical: normalize(10),
            borderTopColor: '#3B3A41',
            borderTopWidth: .5
        }]}>
            <Text style={[systemWeights.bold, { width: '75%' }]}>
                {news.headline}
            </Text>
            <Text style={[systemWeights.regular, { marginVertical: normalize(8) }]}>
                {news.summary}
            </Text>
            <Text style={[systemWeights.regular]}>
                {news.time} - {news.source}
            </Text>
        </View>
    );;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    rowFront: {
        backgroundColor: '#fff',
        borderTopWidth: .6,
        elevation: 1,
        borderBottomColor: '#3B3A41',
        paddingHorizontal: 10,
        // justifyContent: 'center',
        height: 50,
        ...util.mx2,
        // paddingVertical: 5,
    },
    rowBack: {
        borderTopWidth: .6,
        borderBottomColor: '#3B3A41',
        alignItems: 'center',
        backgroundColor: '#FFF',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 15,
        // width: '100%',
        ...util.mx2,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: normalize(30),
        marginVertical: 4,
    },
    backRightBtnLeft: {
        right: normalize(16),
    },
    backRightBtnRight: {
        right: -normalize(8),
    },
});