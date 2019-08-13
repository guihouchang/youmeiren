import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Carousel} from 'teaset';
import PageBase from "./PageBase";
import T from '../common/styles/Theme';
import G from '../common/styles/GlobalStyles';
import {_, __} from 'react-native-scale-size';
import BoxShadow from "react-native-shadow/lib/BoxShadow";
import { UltimateListView, UltimateRefreshView } from 'react-native-ultimate-listview'
import {inject, observer} from "mobx-react";
import {getList} from "../api/loan";

@inject('store')
@observer
export default class Home extends PageBase
{
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            header: null,
        };
    };

    constructor(props)
    {
        super(props)
        this.state = {
            dataList: [1, 2, 3, 4],
            bannerList: [1, 2, 3],
            loading: false,
        }
    }

    componentWillMount(): void {

    }

    componentDidMount(): void {
        super.componentDidMount()
    }

    keyExtractor(item: any, index: number) {
        return index.toString()
    }

    renderItem(item: Object) {
        return (
            <BoxShadow setting={{...G.shadow, width:_(363),
                height: _(363)}}>
                <View style={{
                    borderRadius: _(6),
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#fff',
                    padding: _(6),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <TouchableOpacity style={styles.imageContent}>
                        <FastImage
                            source={require('../resource/images/9dbef4cfgw1f3oz4j8k1bj20q913daej.jpg')}
                            style={{width: '100%', height: '100%', borderRadius: _(6)}}/>
                    </TouchableOpacity>
                    <View style={[
                        styles.imageContent,
                        {
                            justifyContent: 'space-between',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderWidth: 0,
                            width: _(115)
                        }]
                    }>
                        <FastImage
                            source={require('../resource/images/9dbef4cfgw1f3oz4n2uocj20q90hi0ud.jpeg')}
                            style={styles.smallImageItem}/>
                        <FastImage
                            source={require('../resource/images/9dbef4cfgw1f3oz4n2uocj20q90hi0ud.jpeg')}
                            style={styles.smallImageItem}/>
                        <FastImage
                            source={require('../resource/images/9dbef4cfgw1f3oz4n2uocj20q90hi0ud.jpeg')}
                            style={styles.smallImageItem}/>

                    </View>
                </View>
            </BoxShadow>
        )
    }

    renderSubDetail(firstText, secondText, thirdText, top)
    {
        return (<View style={{
            position: 'absolute',
            top:  _(top),
            left: _(91),
            flexDirection: 'row', alignItems: 'center', width: _(140), height: _(15)}}>
            <View style={{width: _(10), height: _(10), backgroundColor: '#cccccc', borderRadius: _(5)}}></View>
            <Text style={G.tips_text_small}>
                {firstText}<Text style={[G.tips_text_small, {color: '#EC5A53'}]}> {secondText}</Text> {thirdText}
            </Text>
        </View>);
    }

    renderHeader()
    {
        return (
            <Carousel
                style={styles.wrapper}
                pagingEnabled={true}
                control={
                    <Carousel.Control
                        style={{alignItems: 'center', marginBottom: _(10)}}
                        dot={<View style={{
                            marginRight: _(8),
                            backgroundColor: '#fff',
                            borderRadius: _(10),
                            width: _(10),
                            height: _(10)}}></View>}
                        activeDot={<View style={{
                            marginRight: _(8),
                            backgroundColor: T.brand_primary,
                            width: _(20), height: _(10),
                            borderRadius: _(5)}}></View>}
                    />}
            >
                {
                    this.state.bannerList.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                }}>
                                <ImageBackground
                                    key={index}
                                    style={
                                        [styles.containerHorizontal, { backgroundColor: '#9dffd0' }]
                                    }
                                >
                                </ImageBackground>
                            </TouchableOpacity>
                        )
                    })
                }
            </Carousel>
        );
    }

    onFetch = async(page = 1, startFetch, abortFetch) => {
        startFetch(this.state.dataList, 20)
    };


    render()
    {
        return (
            <View style={{
                flex: 1,
            }}>
                <UltimateListView
                    ref={"refresh"}
                    onFetch={this.onFetch}
                    contentContainerStyle={{alignItems: 'center'}}
                    keyExtractor={this.keyExtractor}
                    item={(item) => this.renderItem(item)}
                    header={() => {
                        return this.renderHeader()
                    }}
                    separator={() => <View style={{width: "100%", height: _(12)}}></View>}
                    scrollEnabled={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: G.base_size_width,
        height: _(167),
        backgroundColor: '#559BAE',
        marginBottom: _(12),
    },
    containerHorizontal: {
        flexGrow: 1,
        width: G.base_size_width,
        height: '100%',
    },
    imageContent: {
        borderRadius: _(6),
        width: _(230),
        height: '100%',
        borderWidth: 0,
        borderColor: '#cccccc'
    },
    smallImageContent: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    smallImageItem: {
        width: _(112),
        height: _(112),
        borderRadius: _(6),
        borderWidth: 0,
        borderColor: '#cccccc'
    },
});
