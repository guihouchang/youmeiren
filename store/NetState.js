import { observable,action, computed, autorun } from 'mobx'
import {AsyncStorage, DeviceEventEmitter} from 'react-native'

class NetState
{
    @observable
    userToken = "";
}