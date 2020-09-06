import React, { useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image,
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
import { ScrollView } from 'react-native-gesture-handler';

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
        stats: [
            ["Open", "11.10", "Vol.", "11.10", "52W H", "11.10"],
            ["High", "11.10", "P/E", "11.10", "52W L", "11.10"],
            ["Low", "11.10", "Mkt Cap", "11.10", "Avg. Vol.", "11.10"],
        ],
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
        stats: [
            ["Open", "11.10", "Vol.", "11.10", "52W H", "11.10"],
            ["High", "11.10", "P/E", "11.10", "52W L", "11.10"],
            ["Low", "11.10", "Mkt Cap", "11.10", "Avg. Vol.", "11.10"],
        ],
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
        stats: [
            ["Open", "11.10", "Vol.", "11.10", "52W H", "11.10"],
            ["High", "11.10", "P/E", "11.10", "52W L", "11.10"],
            ["Low", "11.10", "Mkt Cap", "11.10", "Avg. Vol.", "11.10"],
        ],
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
        stats: [
            ["Open", "11.10", "Vol.", "11.10", "52W H", "11.10"],
            ["High", "11.10", "P/E", "11.10", "52W L", "11.10"],
            ["Low", "11.10", "Mkt Cap", "11.10", "Avg. Vol.", "11.10"],
        ],
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
        stats: [
            ["Open", "11.10", "Vol.", "11.10", "52W H", "11.10"],
            ["High", "11.10", "P/E", "11.10", "52W L", "11.10"],
            ["Low", "11.10", "Mkt Cap", "11.10", "Avg. Vol.", "11.10"],
        ],
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
        stats: [
            ["Open", "11.10", "Vol.", "11.10", "52W H", "11.10"],
            ["High", "11.10", "P/E", "11.10", "52W L", "11.10"],
            ["Low", "11.10", "Mkt Cap", "11.10", "Avg. Vol.", "11.10"],
        ],
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
        stats: [
            ["Open", "11.10", "Vol.", "11.10", "52W H", "11.10"],
            ["High", "11.10", "P/E", "11.10", "52W L", "11.10"],
            ["Low", "11.10", "Mkt Cap", "11.10", "Avg. Vol.", "11.10"],
        ],
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
        stats: [
            ["Open", "11.10", "Vol.", "11.10", "52W H", "11.10"],
            ["High", "11.10", "P/E", "11.10", "52W L", "11.10"],
            ["Low", "11.10", "Mkt Cap", "11.10", "Avg. Vol.", "11.10"],
        ],
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
        stats: [
            ["Open", "11.10", "Vol.", "11.10", "52W H", "11.10"],
            ["High", "11.10", "P/E", "11.10", "52W L", "11.10"],
            ["Low", "11.10", "Mkt Cap", "11.10", "Avg. Vol.", "11.10"],
        ],
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
        stats: [
            ["Open", "11.10", "Vol.", "11.10", "52W H", "11.10"],
            ["High", "11.10", "P/E", "11.10", "52W L", "11.10"],
            ["Low", "11.10", "Mkt Cap", "11.10", "Avg. Vol.", "11.10"],
        ],
    },
];

function StockDetailsScreen({ navigation, route }) {

    const { key } = route.params;
    // console.log(route.params);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container style={[{ backgroundColor: palette.white }]}>
                <Header transparent style={{ height: 0, backgroundColor: '#ffffff' }} />
                <Content>
                    <View style={[util.m2]}>
                        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end", width: '100%' }]}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons
                                    name="md-arrow-round-back"
                                    size={material.titleObject.fontSize} />
                            </TouchableOpacity>
                            <Ionicons name="md-search" size={material.titleObject.fontSize} />
                        </View>
                    </View>
                    <View>
                        <View style={[util.px2, util.mb1, {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: "flex-end",
                            width: '100%'
                        }]}>
                            <View style={[{ flexDirection: 'row', alignItems: 'flex-end' }]}>
                                <Text style={[material.title, systemWeights.bold]}>{data[key].name}</Text>
                                <Text style={[material.subheading, util.ml1]}>{data[key].company}</Text>
                            </View>
                            <View style={[{ flexDirection: 'row' }]}>
                                <Ionicons
                                    style={[util.mr1]}
                                    name={data[key].delta > 0 ? "md-add-circle" : "md-remove-circle"}
                                    color={data[key].delta > 0 ? "#00962A" : "#CF2500"}
                                    size={normalize(16)} />
                                <Text style={[material.subheading, systemWeights.regular]}>Watchlist</Text>
                            </View>
                        </View>
                        <View style={[util.px2, util.mb1, { flexDirection: 'row', alignItems: 'flex-end' }]}>
                            <Text style={[material.subheading]}>{data[key].price}</Text>
                            <Text style={[material.body2, util.ml1]}>{data[key].delta}</Text>
                        </View>
                    </View>
                    <View style={[util.py1, {
                        borderTopWidth: .6,
                        borderTopColor: '#C4C4C4',
                        width: '100%',
                    }]}>
                        <Image source={require('../assets/stock-chart.png')} style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: 233,
                            height: 139.3,
                        }} />
                    </View>
                    <View style={[util.p2, { width: '100%' }]}>
                        <Text style={[material.title]}>Stats</Text>
                        <Stats data={data[key].stats} />
                    </View>
                    <View style={[util.p2, { width: '100%' }]}>
                        <Text style={[material.title]}>News</Text>
                        {data && data.slice(0, 2).map((newsItem, index) => (
                            <NewsItem key={`news-item-${index}`} news={newsItem} />
                        ))}
                    </View>
                    <View style={[util.px2, { width: '100%' }]}>
                        <Text style={[material.title]}>About</Text>
                        <View style={[{
                            paddingVertical: normalize(10),
                            borderTopColor: '#3B3A41',
                            borderTopWidth: .5
                        }]}>
                            <Text style={[systemWeights.regular, { marginVertical: normalize(8) }]}>
                                {data[key].about}
                            </Text>
                        </View>
                    </View>
                </Content>
            </Container>
        </SafeAreaView >
    );
}

export default StockDetailsScreen;

const Stats = ({ data }) => {
    return (
        <>
            {data.map((row, index) => (
                <View
                    key={`stock-statistics-${index}`}
                    style={[{
                        paddingVertical: normalize(5),
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        borderBottomColor: '#3B3A41',
                        borderBottomWidth: .5
                    }]}>
                    <Text style={[material.body1, { width: '16%' }]}>{row[0]}</Text>
                    <Text style={[material.body1, { width: '16%' }]}>{row[1]}</Text>
                    <Text style={[material.body1, { width: '16%' }]}>{row[2]}</Text>
                    <Text style={[material.body1, { width: '16%' }]}>{row[3]}</Text>
                    <Text style={[material.body1, { width: '16%' }]}>{row[4]}</Text>
                    <Text style={[material.body1, { width: '16%' }]}>{row[5]}</Text>
                </View>
            ))
            }
        </>
    );
}

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