/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Root from './Root';
import {
    View,
} from 'react-native';
import { Provider } from 'mobx-react';
import Index from './store/Index';
import DropdownAlert from 'react-native-dropdownalert';
import DropDownHolder from './utils/DropDownHolder';
import T from "./common/styles/Theme";

global.store = Index
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style={{flex: 1}}>
            <Provider store={Index}>
                <Root/>
            </Provider>
            <DropdownAlert successColor={T.brand_primary} ref={(ref) => DropDownHolder.setDropDown(ref)}/>
        </View>
    );
  }
}
