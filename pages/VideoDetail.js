import React, {Component} from 'react';
import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar
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
import G from '../common/styles/GlobalStyles';
import VideoPlayer from 'react-native-video-controls';

export default class VideoDetail extends PageBase {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            header: null,
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

    componentDidMount(): void {
        // super.componentDidMount();
    }

    onBuffer()
    {

    }

    videoError()
    {

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <VideoPlayer
                    source={require('../resource/video/1565878963747857.mp4')}
                    navigator={ this.props.navigation }
                    style={styles.backgroundVideo} />
                    <StatusBar hidden={true}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {

    },
});
