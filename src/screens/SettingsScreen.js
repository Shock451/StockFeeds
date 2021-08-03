import * as React from 'react';
import { View, SafeAreaView } from 'react-native';

import { Container, Text, Content, Header } from 'native-base';

import Ionicons from '@expo/vector-icons/Ionicons';

import { util, palette, normalize } from '../theme';
import { material, systemWeights } from 'react-native-typography';


function SettingsScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container style={[{ backgroundColor: palette.white }]}>
                <Header transparent style={{ height: 0, backgroundColor: '#ffffff' }} />
                <Content>
                    <View style={[util.p2]}>
                        <View style={[util.pb2, { width: '100%' }]}>
                            <Text style={[util.title, systemWeights.bold]}>Support Centre</Text>
                            <View style={[util.m2]}>
                                <View style={[util.my1, { flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end", width: '100%' }]}>
                                    <Text style={[util.subheading, systemWeights.regular]}>
                                        Help Centre
                                    </Text>
                                    <Ionicons name="md-arrow-dropright" size={material.subheading.fontSize} />
                                </View>
                                <View style={[util.my1, { flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end", width: '100%' }]}>
                                    <Text style={[util.subheading, systemWeights.regular]}>
                                        Contact Centre
                                    </Text>
                                    <Ionicons name="md-arrow-dropright" size={material.subheading.fontSize} />
                                </View>
                            </View>
                        </View>
                        <View style={[util.pb2, { width: '100%' }]}>
                            <Text style={[util.title, systemWeights.bold]}>About StockFeeds</Text>
                            <View style={[util.m2]}>
                                <View style={[util.my1, { flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end", width: '100%' }]}>
                                    <Text style={[util.subheading, systemWeights.regular]}>
                                        Terms & Conditions
                                    </Text>
                                    <Ionicons name="md-arrow-dropright" size={material.subheading.fontSize} />
                                </View>
                                <View style={[util.my1, { flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end", width: '100%' }]}>
                                    <Text style={[util.subheading, systemWeights.regular]}>
                                        Privacy & Policy
                                    </Text>
                                    <Ionicons name="md-arrow-dropright" size={material.subheading.fontSize} />
                                </View>
                                <View style={[util.my1, { flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end", width: '100%' }]}>
                                    <Text style={[util.subheading, systemWeights.regular]}>
                                        System Status
                                    </Text>
                                    <Ionicons name="md-arrow-dropright" size={material.subheading.fontSize} />
                                </View>
                                <View style={[util.my1, { flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end", width: '100%' }]}>
                                    <Text style={[util.subheading, systemWeights.regular]}>
                                        App Version
                                    </Text>
                                    <Ionicons name="md-arrow-dropright" size={material.subheading.fontSize} />
                                </View>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        </SafeAreaView>
    );
}

export default SettingsScreen;