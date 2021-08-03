import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    View,
} from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'expo-chart-kit'

import { Ionicons } from '@expo/vector-icons';

import {
    normalize,
    util,
    palette,
    SCREEN_WIDTH,
    moderateScale,
    spacing,
} from '../theme';

import {
    Container,
    Content,
    Header,
    Text
} from 'native-base';

import { material, systemWeights } from 'react-native-typography';

import News from '../components/News';

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

const NEWS_API_TOKEN = `pk_e778814df27a43608629ec4a249a4b7e`;

function StockDetailsScreen({ navigation, route }) {

    const { key } = route.params;
    const [news, setNews] = useState([])
    const [chartData, setChartData] = useState([]);

    const line = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                strokeWidth: 2, // optional
            },
        ],
    };

    const newsUrl = `https://cloud.iexapis.com/stable/stock/${data[key].name}/batch?types=quote,news,chart&range=1m&last=10&token=${NEWS_API_TOKEN}`
    console.log(newsUrl)
    useEffect(() => {
        const fetchNewsAsync = async () => {
            try {
                let response = await fetch(newsUrl);
                let json = await response.json();
                console.log(json.chart)
                if (json.chart.length > 3) {
                    const chartData = {
                        labels: json.chart.slice(-5).map(point => point.label),
                        datasets: [
                            {
                                data: json.chart.slice(-5).map(point => point.high)
                            }
                        ]
                    }
                    setChartData(chartData)
                }
                setNews(json.news)
            } catch (error) {
                
                // console.error(error);
            }
        };
        fetchNewsAsync();
    }, [])

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
                                <Text style={[util.title, systemWeights.bold]}>{data[key].name}</Text>
                                <Text style={[util.subheading, util.ml1]}>{data[key].company}</Text>
                            </View>
                            <View style={[{ flexDirection: 'row' }]}>
                                <Ionicons
                                    style={[util.mr1]}
                                    name={data[key].delta > 0 ? "md-add-circle" : "md-remove-circle"}
                                    color={data[key].delta > 0 ? "#00962A" : "#CF2500"}
                                    size={normalize(16)} />
                                <Text style={[util.subheading, systemWeights.regular]}>Watchlist</Text>
                            </View>
                        </View>
                        <View style={[util.px2, util.mb1, { flexDirection: 'row', alignItems: 'flex-end' }]}>
                            <Text style={[util.subheading]}>{data[key].price}</Text>
                            <Text style={[util.body2, util.ml1]}>{data[key].delta}</Text>
                        </View>
                    </View>
                    <View style={[
                        util.py2, util.px1,
                        {
                            borderTopWidth: .6,
                            borderTopColor: '#C4C4C4',
                            width: '100%',
                        }]}>
                        {chartData.datasets?.length > 0 &&
                            <LineChart
                                data={chartData}

                                width={SCREEN_WIDTH - spacing(2)} // from react-native
                                height={220}
                                yAxisLabel={'$'}
                                chartConfig={{
                                    backgroundColor: '#fff',
                                    backgroundGradientFrom: '#fff',
                                    backgroundGradientTo: '#fff',
                                    decimalPlaces: 2, // optional, defaults to 2dp
                                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                    style: {
                                        borderRadius: 16,
                                    }
                                }}
                                bezier
                                style={{
                                    marginVertical: 0,
                                    borderRadius: 4,
                                }}
                            />
                        }
                    </View>


                    <View style={[util.p2, { width: '100%' }]}>
                        <Text style={[util.title]}>Stats</Text>
                        <Stats data={data[key].stats} />
                    </View>

                    <View style={[util.py2, { width: '100%' }]}>
                        <News news={news} />
                    </View>

                    <View style={[util.px2, { width: '100%' }]}>
                        <Text style={[util.title]}>About</Text>
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
                    <Text style={[util.body1, { width: '16%' }]}>{row[0]}</Text>
                    <Text style={[util.body1, { width: '16%' }]}>{row[1]}</Text>
                    <Text style={[util.body1, { width: '16%' }]}>{row[2]}</Text>
                    <Text style={[util.body1, { width: '16%' }]}>{row[3]}</Text>
                    <Text style={[util.body1, { width: '16%' }]}>{row[4]}</Text>
                    <Text style={[util.body1, { width: '16%' }]}>{row[5]}</Text>
                </View>
            ))
            }
        </>
    );
}
