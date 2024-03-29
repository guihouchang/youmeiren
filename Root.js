import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from './pages/Home';
import Mine from './pages/Mine';
import AuthLoading from './pages/AuthLoading';
import Login from './pages/Login';
import Register from './pages/Register';
import {_} from "react-native-scale-size";
import Suggest from "./pages/Suggest";
import About from "./pages/About";
import T from './common/styles/Theme';
import Show from "./pages/Show";
import Person from "./pages/Person";
import ImageDetail from "./pages/ImageDetail";
import VideoDetail from "./pages/VideoDetail";

const HomeStack = createStackNavigator({
    Home: Home,
    Person: Person,
    ImageDetail: ImageDetail,
    VideoDetail: VideoDetail,
}, {
    defaultNavigationOptions: {
        headerTransparent: false,
        headerStyle: {
            backgroundColor: T.brand_primary,
            borderBottomWidth: 0,
            shadowOpacity: 0,

        },
        headerRight: <View/>,
        headerTitleStyle: {
            fontSize: _(21),
            fontWeight: '400',
            flex:1,
            textAlign: 'center'
        },
        headerTintColor: '#fff',
    }
});

HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = false;
    if (navigation.state.index === 0)
    {
        tabBarVisible = true;
    }

    return  {tabBarVisible}

}

const VideoStack = createStackNavigator({
    About: About,
}, {
    defaultNavigationOptions: {
        headerTransparent: true,
        headerStyle: {
            backgroundColor: T.brand_primary,
            borderBottomWidth: 0,
            shadowOpacity: 0,

        },
        headerRight: <View/>,
        headerTitleStyle: {
            fontSize: _(21),
            fontWeight: '400',
            flex:1,
            textAlign: 'center'
        },
        headerTintColor: '#fff',
    }
});

VideoStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = false;
    if (navigation.state.index === 0)
    {
        tabBarVisible = true;
    }

    return  {tabBarVisible}

}


const MineStack = createStackNavigator({
    Mine: Mine,
    About: About,
    Suggest: Suggest,
    Show: Show,
}, {
    defaultNavigationOptions: {
        headerTransparent: true,
        headerStyle: {
            backgroundColor: T.brand_primary,
            borderBottomWidth: 0,
            shadowOpacity: 0,

        },
        headerRight: <View/>,
        headerTitleStyle: {
            fontSize: _(21),
            fontWeight: '400',
            flex:1,
            textAlign: 'center'
        },
        headerTintColor: '#fff',
    }
});

MineStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible = false;
    if (navigation.state.index === 0)
    {
        tabBarVisible = true;
    }

    return  {tabBarVisible}
}

const AuthStack = createStackNavigator({
    Login: Login,
    Register: Register,
}, {
    defaultNavigationOptions: {
        headerTransparent: true,
        headerStyle: {
            backgroundColor: T.brand_primary,
            borderBottomWidth: 0,
            shadowOpacity: 0,

        },
        headerRight: <View/>,
        headerTitleStyle: {
            fontSize: _(21),
            fontWeight: '400',
            flex:1,
            textAlign: 'center'
        },
        headerTintColor: '#fff',
    }
});

const Root = createBottomTabNavigator(
    // Home: { screen: Home },
    // Order: { screen: Order }
    {
        首页: HomeStack,
        视频: VideoStack,
        我的: MineStack,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Entypo;
                let iconName;
                if (routeName === '首页')
                {
                    iconName = 'home';
                }
                else if (routeName === '视频')
                {
                    iconName = `video`;
                }
                else if (routeName === '我的')
                {
                    iconName = `user`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            inactiveTintColor: T.brand_primary,
            activeTintColor: '#fff',
            inactiveBackgroundColor: '#fff',
            activeBackgroundColor: T.brand_primary,
            showIcon: true,
            allowFontScaling:true,
            labelStyle: {
                fontFamily: 'STYuanti-SC-Regular',
                fontWeight: '400',
            },
        },
    });


export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Root: Root,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));

