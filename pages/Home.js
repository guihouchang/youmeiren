import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Image,
    Dimensions
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Carousel} from 'teaset';
import PageBase from "./PageBase";
import T from '../common/styles/Theme';
import G from '../common/styles/GlobalStyles';
import {_, __} from 'react-native-scale-size';
import BoxShadow from "react-native-shadow/lib/BoxShadow";
import { UltimateListView } from 'react-native-ultimate-listview';
import {inject, observer} from "mobx-react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

@inject('store')
@observer
export default class Home extends PageBase
{
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            header: null
        };
    };

    state = {
        index: 0,
        routes: [
            {key: 'newest', title: '最新'},
            {key: 'hot', title: '最热'},
        ],
        dataList: [1, 2, 3, 4],
        bannerList: [1, 2, 3],
        loading: false,
    }

    constructor(props)
    {
        super(props)
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
                height: _(427)}}>
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
                        this.props.navigation.navigate('Person');
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
                            <Text style={[G.text_md]}>模特网名</Text>
                            <TouchableOpacity style={G.followButton}>
                                <Text style={G.followButtonText}>关注</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={[G.text_small]}>asdasdsasa</Text>
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

                    <TouchableOpacity onPress={()=> {
                        this.props.navigation.navigate('VideoDetail')
                    }} style={G.imageContent}>
                        <FastImage
                            //source={require('../resource/images/9dbef4cfgw1f3oz4j8k1bj20q913daej.jpg')}
                            style={{
                                backgroundColor: '#ffacab',
                                width: '100%',
                                height: '100%',
                                borderRadius: _(6)}}
                        />
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

    NewestRoute = () => (
        <View style={{
            flex: 1,
        }}>
            <UltimateListView
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

    HotRoute = () => (
        <View style={{
            flex: 1,
        }}>
            <UltimateListView
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


    onFetch = async(page = 1, startFetch, abortFetch) => {
        startFetch(this.state.dataList, 20)
    };


    renderTabBar(props)
    {
        return (
            <TabBar {...props}
                    style={{backgroundColor: T.brand_primary}}
                    indicatorStyle={{backgroundColor: '#fff'}}
                    labelStyle={[G.sub_title_text, {color: '#fff'}]}
                    pressOpacity={0.2}
                    pressColor={'#000'}
                    tabStyle={{
                        width: _(80),
                    }}
                    // renderIcon={(routes) => {
                    //     console.log(routes)
                    //     if (routes.route.key != 'newest')
                    //         return (<FontAwesome name={'fire'} size={_(20)} color={'#fff'}/> )
                    //     else
                    //         return (<AntDesign name={'clockcircleo'} size={_(20)} color={'#fff'}/> )
                    //
                    // }}
            />);
    }

    render()
    {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    newest: this.NewestRoute,
                    hot: this.HotRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
                renderTabBar={props => this.renderTabBar(props)}
            />
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: G.base_size_width,
        height: _(167),
        backgroundColor: '#fff',
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
        borderColor: '#cccccc',
        backgroundColor: '#ff8b5d'
    },
});
