import React, {Component} from 'react';
import {
    View,
    ImageBackground,
    Text,
    WebView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import PageBase from "./PageBase";
import FastImage from 'react-native-fast-image';
import {
    _,
    __
} from 'react-native-scale-size';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import T from '../common/styles/Theme';
import {inject, observer} from "mobx-react";


@inject('store')
@observer
export default class Show extends PageBase {
    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: navigation.state.params.title,
        };
    };

    static webView = null;

    constructor(props)
    {
        super(props)
        this.state = {
            loading: true,
            url: this.props.navigation.state.params.url,
        }

        console.log(this.props.navigation.state.params.url)
    }

    componentWillMount(): void {

    }

    componentDidMount(): void {
        super.componentDidMount();
        Show.webView = this.refs.webview;
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <WebView
                    ref={"webview"}
                    onLoad={()=> {
                        this.setState({loading: false})
                    }}
                    source={{
                        uri: this.state.url,
                        headers: {
                            token: this.props.store.user.userToken
                        },
                    }}
                />
                <View style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <ActivityIndicator animating={this.state.loading} size={_(45)} color={T.brand_primary}/>
                </View>
            </View>
        );
    }
}