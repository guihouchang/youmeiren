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

export default class VideoDetail extends PageBase {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: 'Video',
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
            </View>
        );
    }
}
