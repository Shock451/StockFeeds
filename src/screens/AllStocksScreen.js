import React, { useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';

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
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const data = [
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
];

function AllStocks({ navigation }) {

    const [state, setState] = useState({
        term: "",
    })

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
                        <Text style={[material.subheading, systemWeights.bold, { color: '#3B3A41' }]}>{data.item.name}</Text>
                        <Text>{data.item.company}</Text>
                    </View>
                    <View style={[{ justifyContent: 'space-evenly' }]}>
                        <Text style={[material.subheading, { color: '#3B3A41', textAlign: 'right' }]}>{data.item.price}</Text>
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
                                <View style={[util.mb1, { width: '100%' }]}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <Ionicons
                                            name="md-arrow-round-back"
                                            size={material.titleObject.fontSize} />
                                    </TouchableOpacity>
                                </View>
                                <View style={[util.mb1, { flexDirection: 'row', alignItems: "center", width: '100%' }]}>
                                    <Ionicons name="md-search" size={material.titleObject.fontSize} />
                                    <TextInput
                                        placeholderTextColor={palette.grey}
                                        clearButtonMode="always"
                                        placeholder="Search"
                                        style={[util.textInput, { flex: 1 }]}
                                        onChangeText={(text) => setState({ ...state, term: text })}
                                        value={state.term}
                                    />
                                </View>
                                <Text style={[material.title]}>All Stocks</Text>
                            </View>
                        }
                        data={data}
                        renderItem={renderItem}
                        renderHiddenItem={renderHiddenItem}
                        leftOpenValue={0}
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

export default AllStocks;

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