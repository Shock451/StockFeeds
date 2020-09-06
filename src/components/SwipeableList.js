import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';
import { Ionicons } from '@expo/vector-icons';
import { normalize, util } from '../theme';
import { material, systemWeights } from 'react-native-typography';

export default (props) => {

    // const closeRow = (rowMap, rowKey) => {
    //     if (rowMap[rowKey]) {
    //         rowMap[rowKey].closeRow();
    //     }
    // };

    // const deleteRow = (rowMap, rowKey) => {
    //     closeRow(rowMap, rowKey);
    //     const newData = [...listData];
    //     const prevIndex = listData.findIndex(item => item.key === rowKey);
    //     newData.splice(prevIndex, 1);
    //     setListData(newData);
    // };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = data => {
        return (
            <TouchableHighlight
                onPress={() => console.log('You touched me')}
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
    }

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            {/* <Text>Left</Text> */}
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
            // onPress={() => closeRow(rowMap, data.item.key)}
            >
                <Ionicons
                    name={data.item.delta > 0 ? "md-add-circle" : "md-remove-circle"}
                    color={data.item.delta > 0 ? "#00962A" : "#CF2500"}
                    size={normalize(16)} />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
            // onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Ionicons name="md-menu" color="#3B3A41" size={normalize(16)} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <SwipeListView
                data={props.data}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={0}
                rightOpenValue={-80}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
            />
        </View>
    );
}

