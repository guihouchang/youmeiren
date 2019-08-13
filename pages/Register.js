import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ReactNode,
    ImageBackground,
    TouchableOpacity,
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
import PageBase from "./PageBase";
import DropdownAlert from 'react-native-dropdownalert';
import { register } from '../api/user';
import {inject, observer} from "mobx-react";
import validator from 'validator';
import DropDownHolder from "../utils/DropDownHolder";


@inject('store')
@observer
export default class Register extends PageBase
{
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: "Create New Account",
        };
    };

    constructor(props)
    {
        super(props);
        this.state = {
            account: '',
            password1: '',
            password2: '',
            name: '',
            showPassword: false,
            loading: false,
        }

        this.dropDownAlertRef = DropDownHolder.getDropDown()
    }

    componentDidMount(): void {
    }

    onRegister()
    {
        const {account, password1, password2, name} = this.state;

        if (!validator.isLength(account, 4, 12))
        {
            this.dropDownAlertRef.alertWithType('error', 'error',
                'Please fill in letters or numbers with no less than 4 digits and no more than 12 digits .')
            return ;
        }

        if (!validator.isLength(password1, 4, 12))
        {
            this.dropDownAlertRef.alertWithType('error', 'error',
                'Please fill in letters or numbers with no less than 4 digits and no more than 12 digits .')
            return ;
        }

        if (!validator.isLength(name, 4, 12))
        {
            this.dropDownAlertRef.alertWithType('error', 'error',
                'Please fill in letters or numbers with no less than 4 digits and no more than 12 digits .')
            return ;
        }

        if (password1 != password2)
        {
            this.dropDownAlertRef.alertWithType('error', 'error',
                'The passwords does not match')
            return ;
        }

        this.setState({loading: true})
        register({
            account: account,
            password: password1,
            name: name,
        }).then(res => {
            this.props.store.user.setUserToken(res.data.token);
            this.dropDownAlertRef.alertWithType('success', 'success', 'Welcome')
        }).catch((err) => {
            this.dropDownAlertRef.alertWithType('error', 'error', res.message)
        }).finally(() => {
            this.setState({loading: false})
        })

    }

    render() : ReactNode
    {
        const {showPassword} = this.state;
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <ImageBackground style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }} source={require("../resource/images/login_bg.png")}>

                    <View style={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <BoxShadow setting={{...G.shadow, style: {marginTop: _(92)}}}>
                            <Input
                                maxLength={12}
                                onChangeText={(text) => this.setState({account: text})}
                                style={[G.inputStyle]}
                                placeholder={"Username"} />
                        </BoxShadow>

                        <BoxShadow setting={{...G.shadow, style: {marginTop: _(21)}}}>
                            <Input
                                maxLength={12}
                                onChangeText={(text) => {
                                    this.setState({
                                        password1: text,
                                    })
                                }}
                                secureTextEntry={!showPassword}
                                style={[G.inputStyle]}
                                placeholder={"Password"} />
                            <TouchableOpacity
                                onPress={()=>this.setState({showPassword: !showPassword})}
                                style={{
                                    position: 'absolute',
                                    right: _(14),
                                    top: _(18),}}>
                                {!showPassword ?
                                    <FastImage style={[{width:_(21), height: _(9)}]} source={require('../resource/images/close-eye.png')}/>
                                    :
                                    <FastImage style={[{width:_(21), height: _(9)}]} source={require('../resource/images/open-eye.png')}/>}
                            </TouchableOpacity>
                        </BoxShadow>

                        <BoxShadow setting={{...G.shadow, style: {marginTop: _(21)}}}>
                            <Input
                                maxLength={12}
                                onChangeText={(text) => this.setState({password2: text})}
                                secureTextEntry={!showPassword}
                                style={[G.inputStyle]}
                                placeholder={"Confirm Password"} />
                        </BoxShadow>

                        <BoxShadow setting={{...G.shadow, style: {marginTop: _(21)}}}>
                            <Input
                                onChangeText={(text) => this.setState({name: text})}
                                style={[G.inputStyle]}
                                placeholder={"Nickname"} />
                        </BoxShadow>

                        <BoxShadow setting={{...G.shadow, style: {marginTop: _(42)}}}>
                            <Button
                                disabled={this.state.loading}
                                onPress={() => {
                                    this.onRegister();
                                }}
                                style={[G.button, {backgroundColor: T.brand_primary}]}
                                title={<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                    {this.state.loading ? <ActivityIndicator animating={this.state.loading} color={'#fff'} size={'large'}/>: null}
                                    <Text style={[G.buttonTitle, {color: "#FFFFFF"}]}>Sign Up</Text>
                                </View>}
                            >
                            </Button>
                        </BoxShadow>
                        <View style={{
                            width: _(309), height: _(42),
                            flexDirection: 'row', justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: _(28)
                        }}>
                            <Text style={G.tips_text}>
                                By tapping Sign Up , you agree to our
                                <Text style={G.tips_text_inverse}>Terms </Text>
                                and<Text style={G.tips_text_inverse}> Data Policy</Text>.
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        width: "100%",
                        height: _(50),
                        borderTopWidth: 1,
                        borderTopColor: '#B1B1B1',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.pop()
                        }}>
                            <Text style={G.sub_title_text}>Already have an account ?</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
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
