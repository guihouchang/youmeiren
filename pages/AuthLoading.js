import React, {Component} from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    DeviceEventEmitter,
    ImageBackground,

} from 'react-native';
import {inject, observer} from "mobx-react";
import PageBase from "./PageBase";
import SplashScreen from 'react-native-splash-screen'

@inject('store')
@observer
export default class AuthLoading extends PageBase {
    constructor(props) {
        super(props);
        this.emitLogin =  DeviceEventEmitter.addListener("onLogin", () => {
            this._bootstrapAsync();
        })

        this.emitLogout = DeviceEventEmitter.addListener("onLogout", () => {
            console.log(`onLogout:onLogout`)
            this._bootstrapAsync();
        })
    }

    componentDidMount(): void {
        super.componentDidMount();
        SplashScreen.hide();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync() {
        console.log(this.props.store.user);
        const userToken = this.props.store.user.userToken;
        console.log(`userToken:${userToken}`)
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        setTimeout(() => {
            this.props.navigation.navigate(userToken ? 'Root' : 'Auth');
        }, 1000)

    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground
                    style={{width: '100%', height: '100%'}}
                    source={require('../resource/images/start.png')}
                >
                </ImageBackground>
            </View>
        );
    }
}
