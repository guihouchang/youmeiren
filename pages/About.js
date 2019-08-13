import React, {Component} from 'react';
import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity,
} from 'react-native';
import PageBase from "./PageBase";
import FastImage from 'react-native-fast-image';
import {
    _,
    __
} from 'react-native-scale-size';
import AntDesign from 'react-native-vector-icons/AntDesign';
import T from '../common/styles/Theme';
import {BASE_API_URL} from 'react-native-dotenv';

export default class About extends PageBase {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: 'About Us',
        };
    };

    constructor(props) {
       super(props)
        this.state = {
           url: '',
        }
    }

    componentWillMount(): void {

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground
                    style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                    }}
                    source={require('../resource/images/about-bg.png')}
                >
                    <View style={{
                        width: '100%',
                        height: _(227),
                        alignItems: 'center',
                        marginTop: _(42)
                    }}>
                        <FastImage style={{marginTop: 48, width: _(104), height: _(104)}} source={require('../resource/images/ICON.png')}/>
                        <Text style={{
                            fontSize: _(27),
                            color: '#525252',
                            fontFamily: 'Arial-Black',
                            fontWeight: '900',
                            lineHeight: _(39),
                            marginTop: _(2),
                        }}>App Name</Text>
                        <View style={{
                            width: _(198),
                            height: _(3),
                            backgroundColor: '#525252',
                            marginTop: _(3),
                        }} />
                        <Text style={{
                            fontFamily: 'STYuanti-SC-Bold',
                            fontSize: _(23),
                            fontWeight: 'bold',
                            lineHeight: _(31),
                            color: '#525252',
                        }}>
                            Version 1.0
                        </Text>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={() => {
                        this.props.navigation.navigate('Show', {
                            title: 'Privacy And Terms',
                            downUrl: BASE_API_URL + '/Privacy/index',
                        })
                    }} style={{
                        width: '100%',
                        height: _(62),
                        alignItems: 'center',
                        marginBottom: _(17)
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <AntDesign color={T.brand_primary} name={'mail'} size={_(14)} />
                            <Text style={{
                                marginLeft: _(13),
                                fontSize: _(14),
                                fontWeight: '400',
                                color: '#525252',
                                fontFamily: 'PingFangSC-Regular',
                                lineHeight: _(19),
                            }}>Service Mailbox：888888@QQ.COM</Text>
                        </View>
                        <Text style={{
                            fontSize: _(14),
                            lineHeight: _(19),
                            color: T.brand_primary,
                        }}>
                            《Terms》
                            <Text style={{
                                fontSize: _(14),
                                lineHeight: _(19),
                                color: '#343547',
                            }}>and</Text>
                            《Data Policy》
                        </Text>

                        <Text style={{
                            marginLeft: _(13),
                            fontSize: _(14),
                            fontWeight: '400',
                            color: '#525252',
                            fontFamily: 'PingFangSC-Regular',
                            lineHeight: _(19),
                            marginTop: _(10),
                        }}>2019 XiaMen XXX Technology Co.,Ltd.</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}
