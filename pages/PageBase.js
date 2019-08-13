import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import T from '../common/styles/Theme';

export default class PageBase extends Component<Props>
{
    constructor(props)
    {
        super(props)
    }

    componentDidMount(): void {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor(T.brand_primary);
        });
    }

    componentWillUnmount() {
    }
}