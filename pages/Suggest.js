import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image, ImageBackground, ActivityIndicator
} from 'react-native';

import PageBase from "./PageBase";
import G from '../common/styles/GlobalStyles';
import {_} from 'react-native-scale-size';
import {BoxShadow} from "react-native-shadow";
import {Button, Input} from "teaset";
import FastImage from "react-native-fast-image";
import T from "../common/styles/Theme";
import DropdownAlert from "react-native-dropdownalert";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DropDownHolder from "../utils/DropDownHolder";
import validator from "validator";
import {addSuggest} from "../api/user";

export default class Suggest extends PageBase {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: "Suggest",
        };
    };

    constructor(props)
    {
        super(props)
        this.state = {
            content: '',
            loading: false,
        }

        this.dropDownAlertRef = DropDownHolder.getDropDown()
    }

    onSubmit()
    {
        // this.dropDownAlertRef.alertWithType(
        //     'success', 'Success', 'Fetch data is complete.');

        const {content} = this.state;
        if (!validator.isLength(content, 4, 64))
        {
            this.dropDownAlertRef.alertWithType(
                'error', 'error', 'Please fill in letters with no less than 4 digits and no more than 64 digits .');
            return;
        }

        this.setState({
            loading: true,
        })
        addSuggest({content: content}).then(res => {
            this.setState({
                content: '',
            })
            this.dropDownAlertRef.alertWithType(
                'success', 'success', 'Thanks for your suggest');
        }).finally(() => {
            this.setState({
                loading: false,
            })
        })
    }

    render()
    {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <ImageBackground style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center'}} source={require("../resource/images/suggest.png")}>

                    <BoxShadow setting={{...G.shadow, width: _(342), height: _(250), style: {marginTop: _(65)}}}>
                        <TextInput
                            value={this.state.content}
                            onChangeText={(text) => {
                                this.setState({
                                    content: text,
                                })
                            }}
                            placeholder={"Write down your suggestions"}
                            multiline={true}
                            textAlignVertical={"top"}
                            style={[G.inputStyle, {
                                padding: _(17),
                                backgroundColor: '#fff',
                                width: _(342),
                                lineHeight: _(27),
                                height: _(250)}]} />
                    </BoxShadow>

                    <BoxShadow setting={{...G.shadow, style: {marginTop: _(42)}}}>
                        <Button
                            onPress={() => {
                                this.onSubmit();
                            }}
                            style={[G.button, {backgroundColor: T.brand_primary}]}
                            title={
                                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                    {this.state.loading ? <ActivityIndicator animating={this.state.loading} color={'#fff'} size={'large'}/>: null}
                                    <Text style={[G.buttonTitle, {color: "#FFFFFF"}]}>Submit</Text>
                                </View>
                            }
                            titleStyle={[G.buttonTitle,, {color: "#FFFFFF"}]}/>
                    </BoxShadow>
                </ImageBackground>
            </View>
        );
    }

}

