import React, { useEffect, useState } from 'react';

import { View, Text, TouchableHighlight } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { util, normalize, palette } from '../theme';

import * as WebBrowser from 'expo-web-browser';

import Moment from 'moment';

const News = (props) => {

    const news = props.news;

    return (
        <View style={[util.py2, { width: '100%' }]}>
            <Text style={[util.title, util.ml2]}>News</Text>
            {news.length > 0 ?
                news.map((newsItem, index) => (
                    <NewsItem key={`news-item-${index}`} news={newsItem} />
                ))
                :
                <View
                    style={[util.px2, {
                        paddingVertical: normalize(10),
                        borderTopColor: '#3B3A41',
                        borderTopWidth: .5
                    }]}>
                    <Text style={[systemWeights.regular, { marginVertical: normalize(8) }]}>
                        No news
                    </Text>
                </View>
            }
        </View>
    );
}

const NewsItem = ({ news }) => {

    const handlePressAsync = async (url = 'https://expo.io') => {
        let result = await WebBrowser.openBrowserAsync(url);
        console.log(result)
    };

    return (
        <TouchableHighlight
            underlayColor={"#FAFAFA"}
            activeOpacity={.6}
            onPress={() => handlePressAsync(news.url)}
            style={[util.px2, {
                paddingVertical: normalize(10),
                borderTopColor: '#3B3A41',
                borderTopWidth: .5
            }]}>
            <View>
                <Text style={[systemWeights.bold, { width: '100%' }]}>
                    {cleanUp(news.headline, 70)}
                </Text>
                <Text style={[systemWeights.regular, { marginVertical: normalize(8) }]}>
                    {cleanUp(news.summary, 120)}
                </Text>
                <Text>
                    <Text style={[systemWeights.regular, { color: palette.grey }]}>{Moment(news.datetime).format("MMM Do YYYY, h:mm a")}</Text>
                    <Text style={[systemWeights.bold, { fontStyle: 'italic', color: palette.grey }]}>{" - "}{news.source ?? "Unknown source"}</Text>
                </Text>
            </View>
        </TouchableHighlight>
    );;
};

function cleanUp(input, minLength = 10) {
    input = input.replace("\n", " ").trim();
    if (input.length > minLength) {
        return input.substring(0, minLength) + '...';
    }
    return input;
};

export default News;