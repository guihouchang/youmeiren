import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Order extends Component<Props>
{
    static navigationOptions = {
        header: null
    };

    render()
    {
        return (
            <View>
                <Text>Order</Text>
            </View>
        );
    }
}
