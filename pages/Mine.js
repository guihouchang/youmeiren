import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, ActivityIndicator, Alert} from 'react-native';
import T from '../common/styles/Theme';
import G from '../common/styles/GlobalStyles';
import {_, __} from 'react-native-scale-size';
import FastImage from 'react-native-fast-image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button, Overlay, Label} from "teaset";
import {BoxShadow} from "react-native-shadow";
import PageBase from "./PageBase";
import {changeName, changePassword, getCenterInfo} from "../api/user";
import validator from "validator";
import DropDownHolder from "../utils/DropDownHolder";
import {inject, observer} from "mobx-react";

@inject('store')
@observer
export default class Mine extends PageBase
{
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        const title = params ? params.title : '';

        return {
            title: 'My,' + title,
            headerLeft: <View/>
        }
    }

    static instance;

    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            newName: '',
            oldPassword: '',
            newPassword1: '',
            newPassword2: '',
            showPassword1: false,
            showPassword2: false,
            loading: false,
        }

        this.dropDownAlertRef = DropDownHolder.getDropDown()
    }

    componentWillMount() {
        getCenterInfo().then(res => {
            console.log(res)
            this.setState({
                name: res.data.name,
            })

            this.props.navigation.setParams({title: res.data.account});
        })
    }

    onChangeName()
    {
        const {newName} = this.state;

        if (!validator.isLength(newName, 4, 12))
        {
            this.dropDownAlertRef.alertWithType('error', 'error',
                'Please fill in letters or numbers with no less than 4 digits and no more than 12 digits .')
            return ;
        }

        this.setState({loading: true})
        changeName({name: newName}).then(res => {
            this.dropDownAlertRef.alertWithType('success', 'success',
                'Change success .')
            this.setState({name: newName})
        }).finally(() => {
            this.setState({loading: false})
            Overlay.hide(this.changeNameViewKey)
        })
    }

    onChangePassword()
    {
        const {oldPassword, newPassword1, newPassword2} = this.state;

        if (!validator.isLength(oldPassword, 4, 12))
        {
            this.dropDownAlertRef.alertWithType('error', 'error',
                'Please fill in letters or numbers with no less than 4 digits and no more than 12 digits .')
            return ;
        }

        if (!validator.isLength(newPassword1, 4, 12))
        {
            this.dropDownAlertRef.alertWithType('error', 'error',
                'Please fill in letters or numbers with no less than 4 digits and no more than 12 digits .')
            return ;
        }

        if (newPassword1 != newPassword2)
        {
            this.dropDownAlertRef.alertWithType('error', 'error',
                'Please fill in letters or numbers with no less than 4 digits and no more than 12 digits .')
            return ;
        }

        this.setState({loading: true})
        changePassword({
            oldPassword: oldPassword,
            newPassword: newPassword1,
        }).then(res=> {
            this.dropDownAlertRef.alertWithType('success', 'success',
                'Change success .')
        }).finally(() => {
            this.setState({loading: false})
            Overlay.hide(this.changePasswordViewKey)
        })
    }

    onLogout()
    {
        Alert.alert(
            'Info',
            'Do you want to logout?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => {
                    this.props.store.user.removeUserToken()
                    }},
            ],
        )
    }

    renderHeader()
    {
        return (<View style={{
            width: G.base_size_width,
            height: _(157),
            backgroundColor: T.brand_primary,
            alignItems: 'center',
        }}>
            <Text style={G.title_text}>My</Text>
            <FastImage style={{
                width: _(124),
                height: _(124),
                position: 'absolute',
                top: 58,
            }} source={require('../resource/images/my-icon.png')} />
        </View>);
    }

    renderMyName()
    {
        return (<Text style={{
            fontSize: _(27),
            color: T.brand_primary,
            lineHeight: _(39),
            fontWeight: 'bold',
            fontFamily: 'STYuanti-SC-Bold',
            marginTop: _(32),
        }}>
            {this.state.name}
        </Text>);
    }

    renderOperateItem()
    {
        const {showPassword1, showPassword2} = this.state;

        return (<View style={{
            width: _(333),
            height: (55 * 4),
            marginTop: _(11),
        }}>
            <TouchableOpacity onPress={()=> {
                this.setState({newName: ''})
                let overlayView = (
                    <Overlay.View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <View style={{
                            width: _(292),
                            height: _(180),
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: _(6),
                        }}>
                            <View
                                style={{
                                width: '100%',
                                height: _(27),
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    color: '#525252',
                                    paddingHorizontal: _(17),
                                    fontSize: _(20),
                                    lineHeight: _(27),
                                    fontWeight: 'bold',
                                    fontFamily: "STYuanti-SC-Bold",
                                }}
                                >Change Nickname</Text>
                            </View>

                            <TextInput style={{
                                width: _(235),
                                height: _(44),
                                borderRadius: _(6),
                                backgroundColor: '#EFEFEF',
                                fontSize: _(20),
                                lineHeight: _(27),
                                fontWeight: '400',
                                fontFamily: 'STYuanti-SC-Regular',
                                marginTop: _(20),
                                paddingHorizontal: _(17),
                            }}
                                       onChangeText={(text) => {
                                           this.setState({
                                               newName: text,
                                           })
                                       }}
                                       placeholder={'Nickname'}
                            />

                            <BoxShadow setting={{...G.shadow, width: _(135), height: _(44), style: {marginTop: _(17)}}}>
                                <Button
                                    onPress={() => {
                                        this.onChangeName();
                                    }}
                                    disabled={this.state.loading}
                                    style={[G.button, {
                                        width: _(135),
                                        height: _(44),
                                        backgroundColor: T.brand_primary,
                                    }]}
                                    title={
                                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                            {this.state.loading ? <ActivityIndicator animating={this.state.loading} color={'#fff'} size={'large'}/>: null}
                                            <Text style={[G.buttonTitle, {color: "#FFFFFF"}]}>Change</Text>
                                        </View>
                                    }/>
                            </BoxShadow>
                        </View>
                    </Overlay.View>
                );

               this.changeNameViewKey = Overlay.show(overlayView);

            }} activeOpacity={1} style={{
                width: '100%',
                height: _(55),
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: _(10),
            }}>
                <Text style={{
                    fontSize: _(18),
                    color: '#525252',
                    lineHeight: _(25),

                }}>Change Nickname</Text>
                <AntDesign name={"right"} style={{fontWeight: '900'}} color={"#525252"} size={_(25)}></AntDesign>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                this.setState({
                    newPassword1: '',
                    newPassword2: '',
                    oldPassword: '',
                })

                let overlayView = (
                    <Overlay.View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <View style={{
                            width: _(292),
                            height: _(301),
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: _(6),
                        }}>
                            <View
                                style={{
                                    width: '100%',
                                    height: _(27),
                                    flexDirection: 'row'
                                }}>
                                <Text style={{
                                    color: '#525252',
                                    paddingHorizontal: _(17),
                                    fontSize: _(20),
                                    lineHeight: _(27),
                                    fontWeight: 'bold',
                                    fontFamily: "STYuanti-SC-Bold",
                                }}
                                >Change Password</Text>
                            </View>

                            <TextInput style={{
                                width: _(235),
                                height: _(44),
                                borderRadius: _(6),
                                backgroundColor: '#EFEFEF',
                                fontSize: _(20),
                                lineHeight: _(27),
                                fontWeight: '400',
                                fontFamily: 'STYuanti-SC-Regular',
                                marginTop: _(20),
                                paddingHorizontal: _(17),
                            }}
                                       onChangeText={(text) => {
                                           this.setState({
                                               oldPassword: text,
                                           })
                                       }}
                                       placeholder={'Old Password'}
                                       secureTextEntry={true}
                            />

                            <TextInput style={{
                                width: _(235),
                                height: _(44),
                                borderRadius: _(6),
                                backgroundColor: '#EFEFEF',
                                fontSize: _(20),
                                lineHeight: _(27),
                                fontWeight: '400',
                                fontFamily: 'STYuanti-SC-Regular',
                                marginTop: _(20),
                                paddingHorizontal: _(17),
                            }}
                                       onChangeText={(text) => {
                                           this.setState({
                                               newPassword1: text,
                                           })
                                       }}
                                       placeholder={'New Password'}
                                       secureTextEntry={!showPassword1}
                            />

                            <TextInput style={{
                                width: _(235),
                                height: _(44),
                                borderRadius: _(6),
                                backgroundColor: '#EFEFEF',
                                fontSize: _(20),
                                lineHeight: _(27),
                                fontWeight: '400',
                                fontFamily: 'STYuanti-SC-Regular',
                                marginTop: _(20),
                                paddingHorizontal: _(17),
                            }}
                                       onChangeText={(text) => {
                                           this.setState({
                                               newPassword: text,
                                           })
                                       }}
                                       placeholder={'Confirm New Password'}
                                       secureTextEntry={!showPassword2}
                            />

                            <BoxShadow setting={{...G.shadow, width: _(135), height: _(44), style: {marginTop: _(17)}}}>
                                <Button
                                    onPress={() => {
                                        this.onChangePassword()
                                    }}
                                    style={[G.button, {
                                        width: _(135),
                                        height: _(44),
                                        backgroundColor: T.brand_primary,
                                    }]}
                                    title={
                                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                            {this.state.loading ? <ActivityIndicator animating={this.state.loading} color={'#fff'} size={'large'}/>: null}
                                            <Text style={[G.buttonTitle, {color: "#FFFFFF"}]}>Change</Text>
                                        </View>
                                    }/>
                            </BoxShadow>
                        </View>
                    </Overlay.View>
                );

                this.changePasswordViewKey = Overlay.show(overlayView);

            }} activeOpacity={1} style={{
                width: '100%',
                height: _(55),
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: _(10),
            }}>
                <Text style={{
                    fontSize: _(18),
                    color: '#525252',
                    lineHeight: _(25),

                }}>Change Password</Text>
                <AntDesign name={"right"} style={{fontWeight: '900'}} color={"#525252"} size={_(25)}></AntDesign>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('About')
            }} activeOpacity={1} style={{
                width: '100%',
                height: _(55),
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: _(10),
            }}>
                <Text style={{
                    fontSize: _(18),
                    color: '#525252',
                    lineHeight: _(25),

                }}>About Us</Text>
                <AntDesign name={"right"} style={{fontWeight: '900'}} color={"#525252"} size={_(25)}></AntDesign>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Suggest')
            }} activeOpacity={1} style={{
                width: '100%',
                height: _(55),
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: _(10),
            }}>
                <Text style={{
                    fontSize: _(18),
                    color: '#525252',
                    lineHeight: _(25),

                }}>Suggest</Text>
                <AntDesign name={"right"} style={{fontWeight: '900'}} color={"#525252"} size={_(25)}></AntDesign>

            </TouchableOpacity>
        </View>)
    }

    renderLogout()
    {
        return (
            <BoxShadow setting={{...G.shadow, style: {marginTop: _(42)}}}>
                <Button
                    onPress={()=>{
                        this.onLogout()
                    }}
                    style={[G.button, {backgroundColor: T.brand_primary,}]}
                    title={"Log out"} titleStyle={[G.buttonTitle, {color: '#fff'}]}/>
            </BoxShadow>
        );
    }

    render()
    {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                {this.renderHeader()}
                {this.renderMyName()}
                {this.renderOperateItem()}
                {this.renderLogout()}
            </View>
        );
    }
}
