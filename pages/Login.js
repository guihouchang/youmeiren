import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ReactNode,
    TextInput,
    ImageBackground,
    Image,
    KeyboardAvoidingView,
    ActivityIndicator
} from 'react-native';
import {
    _,
    __
} from 'react-native-scale-size';
import {DESIGN_HEIGHT, DESIGN_WIDTH} from '../common/define/Client';
import T from '../common/styles/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import G from '../common/styles/GlobalStyles';
import { Input, Button } from 'teaset';
import {BoxShadow} from 'react-native-shadow';
import FastImage from 'react-native-fast-image';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {SIZE_MATTERS_BASE_WIDTH, SIZE_MATTERS_BASE_HEIGHT, BASE_API_URL} from 'react-native-dotenv';
import {observer, inject} from 'mobx-react';
import PageBase from "./PageBase";
import validator from "validator";
import {login} from "../api/user";
import DropDownHolder from "../utils/DropDownHolder";

@inject('store')
@observer
export default class Login extends PageBase
{
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            header: null
        };
    };

    constructor(props)
    {
        super(props);
        this.state = {
            account: '',
            password: '',
            loading: false,
        }

        this.dropDownAlertRef = DropDownHolder.getDropDown()
    }

    componentDidMount(): void {
        console.log(BASE_API_URL)
    }

    onLogin()
    {

        this.props.navigation.navigate('Home')
        return;
        const {account, password} = this.state;

        if (!validator.isLength(account, 4, 12))
        {
            this.dropDownAlertRef.alertWithType('error', 'error',
                'Please fill in letters or numbers with no less than 4 digits and no more than 12 digits .')
            return ;
        }

        if (!validator.isLength(password, 4, 12))
        {
            this.dropDownAlertRef.alertWithType('error', 'error',
                'Please fill in letters or numbers with no less than 4 digits and no more than 12 digits .')
            return ;
        }

        this.setState({
            loading: true,
        })

        login({
            account: account,
            password: password,
        }).then(res => {
            this.dropDownAlertRef.alertWithType('success', 'success', 'Welcome');
            this.props.store.user.setUserToken(res.data.token);
        }).catch((err) => {
            this.dropDownAlertRef.alertWithType('error', 'error', err.message);
        }).finally(() => {
            this.setState({
                loading: false,
            })
        })

    }

    render() : ReactNode
    {
        console.log(`WIDTH: ${SIZE_MATTERS_BASE_WIDTH}, HEIGHT: ${SIZE_MATTERS_BASE_HEIGHT}`)
        return (
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                style={{
                width: G.base_size_width,
                height: "100%",
                flexDirection: 'column',
            }}>
                    <ImageBackground style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'center'}} source={require("../resource/images/login_bg.png")}>
                        <Image style={styles.iconStyle} source={require('../resource/images/ICON.png')} />
                        <Text style={styles.titleStyle}>
                            诱美人
                        </Text>

                        <BoxShadow setting={{...G.shadow, style: {marginTop: _(77)}}}>
                            <Input
                                onChangeText={(text) => {
                                    this.setState({
                                        account: text
                                    })
                                }}
                                style={[styles.inputStyle]} placeholder={"Username"} />
                            <FastImage style={G.inlineImage} source={require('../resource/images/touxiang.png')}/>
                        </BoxShadow>

                        <BoxShadow setting={{...G.shadow, style: {marginTop: _(21)}}}>
                                <Input
                                    onChangeText={(text) => {
                                        this.setState({
                                            password: text
                                        })
                                    }}
                                    style={[G.inputStyle]} secureTextEntry placeholder={"Password"} />
                                <FastImage style={G.inlineImage} source={require('../resource/images/lock.png')}/>
                        </BoxShadow>

                        <BoxShadow setting={{...G.shadow, style: {marginTop: _(74)}}}>
                            <Button
                                diabled={this.state.loading}
                                onPress={()=>{
                                    this.onLogin()
                                }}
                                style={[G.button, {backgroundColor: T.brand_primary,}]}
                                title={<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                    {this.state.loading ? <ActivityIndicator animating={this.state.loading} color={'#fff'} size={'large'}/>: null}
                                    <Text style={[G.buttonTitle, {color: "#FFFFFF"}]}>登 录</Text>
                                </View>}
                                titleStyle={[G.buttonTitle, {color: '#fff'}]}/>
                        </BoxShadow>

                        <BoxShadow setting={{...G.shadow, style: {marginTop: _(21)}}}>
                            <Button
                                onPress={() => {
                                    this.props.navigation.navigate("Register")
                                }}
                                style={[G.button, {backgroundColor: '#fff'}]}
                                title={"注册账号"} titleStyle={[G.buttonTitle, {color: T.brand_primary}]}/>
                        </BoxShadow>
                        <View style={{width: '100%', height: _(15)}}></View>
                    </ImageBackground>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: _(125),
        height: _(125),
        marginTop: _(42),
    },
    titleStyle: {
        fontSize: _(31),
        lineHeight: _(44),
        fontWeight: '900',
        fontFamily: "Arial Black",
        color: T.brand_primary,
    },
    inputStyle: {
        width: _(258),
        height: _(44),
        borderRadius: _(6),
        backgroundColor: '#EFEFEF',
        fontSize: _(20),
        fontFamily: "STYuanti-SC-Regular",
        fontWeight: "400",

    },
    inlineImage: {
        width: _(15),
        height: _(21),
        position: 'absolute',
        right: _(19),
        top: _(11),
    },
    button: {
        borderRadius: _(6),
        borderWidth: 0,
        width: _(258),
        height: _(44),
    },
    buttonTitle: {fontWeight: "bold", fontSize: _(20), lineHeight: _(27)}
});
