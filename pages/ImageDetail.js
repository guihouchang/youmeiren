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
import ImageViewer from 'react-native-image-zoom-viewer';


const images = [{
    url: '',
    props: {
        // Or you can set source directory.
        source: require('../resource/images/timg.jpg')
    }
},
    {
        url: '',
        props: {
            // Or you can set source directory.
            source: require('../resource/images/timg.jpg')
        }
    },
    {
        url: '',
        props: {
            // Or you can set source directory.
            source: require('../resource/images/timg.jpg')
        }
    },
    {
        url: '',
        props: {
            // Or you can set source directory.
            source: require('../resource/images/timg.jpg')
        }
    },
    {
        url: '',
        props: {
            // Or you can set source directory.
            source: require('../resource/images/timg.jpg')
        }
    }
];

export default class ImageDetail extends PageBase {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            headerTransparent: true,
            headerStyle: {
                backgroundColor:  null ,
                borderBottomWidth: 0,
                shadowOpacity: 0,
            },
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
                <ImageViewer imageUrls={images}/>
            </View>
        );
    }
}
