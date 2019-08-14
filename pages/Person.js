import React, {Component} from 'react';
import {findNodeHandle, StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Carousel} from 'teaset';
import PageBase from "./PageBase";
import T from '../common/styles/Theme';
import G from '../common/styles/GlobalStyles';
import {_, __} from 'react-native-scale-size';
import BoxShadow from "react-native-shadow/lib/BoxShadow";
import { UltimateListView } from 'react-native-ultimate-listview'
import {inject, observer} from "mobx-react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Header } from 'react-navigation';
import { BlurView, VibrancyView } from "@react-native-community/blur";

@inject('store')
@observer
export default class Person extends PageBase {
    static navigationOptions = ({navigation, navigationOptions}) => {
        const { params } = navigation.state;
        let title = '';
        if (params && params.title)
        {
            title = params.title;
        }

        return {
            headerTransparent: true,
            title: title,
            headerStyle: {
                backgroundColor: params ? params.color: null ,
                borderBottomWidth: 0,
                shadowOpacity: 0,

            },
            headerRight: <TouchableOpacity>
                <SimpleLineIcons style={{marginRight: _(16)}} name={'user-follow'} color={'#fff'} size={_(18)}/>
            </TouchableOpacity>
        };
    };

    state = {
        dataList: [1, 2, 3, 4, 5, 6,1, 2, 3, 4, 5, 6,1, 2, 3, 4, 5, 6,1, 2, 3, 4, 5, 6,1, 2, 3, 4, 5, 6],
        color: null,
        viewRef: null,
    };

    imageLoaded() {
        console.log(12313213)
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }

    renderHeader()
    {
        return (<View style={{width: G.base_size_width, height: _(292)}}>
            <ImageBackground resizeMode={'stretch'}
                             source={require('../resource/images/9dbef4cfgw1f3oz4n2uocj20q90hi0ud.jpeg')}
                             style={{
                                 backgroundColor: '#ffa078',
                                 width: '100%',
                                 height: _(280),
                                 justifyContent: 'flex-start',
                                 alignItems: 'center',
                                 // padding: _(32)
                             }}>
                <View style={{width: '100%', height: _(32)}}/>
                <FastImage style={{backgroundColor: '#9dffce', width: _(92), height: _(92), borderRadius: _(46)}}/>
                <Text style={[G.text_lm, {letterSpacing: _(8), fontWeight: '500', marginTop: _(12)}]}>模特网名</Text>
                <Text style={[
                    G.text_md,
                    {
                        letterSpacing: _(1),
                        color: T.color_text_secondary,
                        marginTop: _(12),
                        width: '80%',
                    }
                ]}>asdadasdsadsadsadsadsadsadsadsadsads</Text>

            </ImageBackground>
            <View style={{width: '100%', height: _(12)}}/>
        </View>)
    }

    onFetch = async(page = 1, startFetch, abortFetch) => {
        startFetch(this.state.dataList, 20)
    };

    renderItem() {
        return(
            <BoxShadow setting={{...G.shadow, width:_(363), height: _(427)}}>
            <View style={{
                width: _(363),
                height: _(64),
                backgroundColor: '#f8ff97',
                borderTopRightRadius: _(6),
                borderTopLeftRadius: _(6),
                padding: _(6),
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <TouchableOpacity onPress={() => {
                }} style={{width: _(46), height: '100%'}}>
                    <FastImage style={{backgroundColor: '#9dffce', width: _(46), height: _(46), borderRadius: _(23)}}/>
                </TouchableOpacity>
                <View style={{
                    width: _(299),
                    height: '100%',
                }}>
                    <View style={{
                        width: '100%',
                        height: _(64 / 3 ),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Text style={[G.text_md]}>发布主题内容。。。。</Text>
                        <TouchableOpacity style={G.followButton}>
                            <Text style={G.followButtonText}>专题</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={[G.text_small]}>发布时间：2019年08月15日01:10:45</Text>
                </View>
            </View>
            <View style={{
                borderBottomRightRadius: _(6),
                borderBottomLeftRadius: _(6),
                flex: 1,
                backgroundColor: '#fff',
                padding: _(6),
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>

                <TouchableOpacity style={G.imageContent}>
                    <BlurView
                        style={styles.absolute}
                        viewRef={this.state.viewRef}
                        blurType="light"
                        blurAmount={10}
                    />
                    <FastImage
                        source={require('../resource/images/9dbef4cfgw1f3oz4j8k1bj20q913daej.jpg')}
                        ref={img => {
                            this.backgroundImage = img;
                        }}
                        onLoadEnd={() => {
                            this.imageLoaded()
                        }}
                        style={{
                            backgroundColor: '#ffacab',
                            width: '100%',
                            height: '100%',
                            borderRadius: _(6)}}
                    >
                    </FastImage>
                </TouchableOpacity>
                <View style={[
                    G.imageContent,
                    {
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderWidth: 0,
                        width: _(115)
                    }]
                }>
                    <FastImage
                        // source={require('../resource/images/9dbef4cfgw1f3oz4n2uocj20q90hi0ud.jpeg')}
                        style={G.smallImageItem}/>
                    <FastImage
                        // source={require('../resource/images/9dbef4cfgw1f3oz4n2uocj20q90hi0ud.jpeg')}
                        style={G.smallImageItem}/>
                    <FastImage
                        // source={require('../resource/images/9dbef4cfgw1f3oz4n2uocj20q90hi0ud.jpeg')}
                        style={G.smallImageItem}/>
                </View>
                <View style={{
                    position: 'absolute',
                    width: _(349),
                    height: _(40),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: _(12),
                    bottom: _(6),
                    left:_(6),
                }}>
                    <View style={{flexDirection: 'row'}}><AntDesign size={_(18)} color={"#ff2e2e"} name={'heart'}/>
                        <Text style={[G.text_small, {marginLeft: _(6)}]}>9999</Text></View>
                    <View style={{flexDirection: 'row'}}>
                        <FontAwesome size={_(18)} color={"#fff"} name={'photo'}/>
                        <Text style={[G.text_small, {textAlign: 'right', color: '#fff', marginLeft: _(6)}]}>40</Text>
                    </View>
                </View>
            </View>
        </BoxShadow>)
    }

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <UltimateListView
                    onScroll = {(event)=>{{
                        const y = event.nativeEvent.contentOffset.y;
                        if (y >= _(292 - Header.HEIGHT))
                        {
                            this.props.navigation.setParams({
                                color: T.brand_primary,
                                title: '模特网名'
                            })
                        }
                        else
                        {
                            this.props.navigation.setParams({
                                color: null,
                                title: ''
                            })
                        }
                    }}}
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
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    foregroundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20
    },
    subtitle: {
        color: '#FFF',
        fontSize: 12
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
})

