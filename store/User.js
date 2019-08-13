import { observable,action, computed, autorun } from 'mobx'
import {AsyncStorage, DeviceEventEmitter} from 'react-native'


class User
{
    USER_TOKEN_KEY = "USER_TOKEN";

    constructor()
    {
        this.initToken();
        console.log(`this.userToken: ${this.userToken}`)
    }

    @observable
    userToken = "";

    @action
    setUserToken(token)
    {
        this.userToken = token;
        console.log(`setUserToken:${token}`)
        AsyncStorage.setItem(this.USER_TOKEN_KEY, token.toString()).then(res => {
            DeviceEventEmitter.emit("onLogin");
        }).catch(err=>{
            console.log(err)
        });
        DeviceEventEmitter.emit("onLogin");
    }

    @action
    removeUserToken()
    {
        this.userToken = null;
        AsyncStorage.removeItem(this.USER_TOKEN_KEY).then(res =>{
            console.log(4444444444)
            DeviceEventEmitter.emit("onLogout");
        })
    }

    @computed get
    getUserToken()
    {
        return this.userToken
    }

    async initToken()
    {
        AsyncStorage.getItem(this.USER_TOKEN_KEY).then(token => {
            this.userToken = token || "";
            console.log(`initToken(): ${token}`)
            DeviceEventEmitter.emit("onLogin");
        })

        // this.userToken = await AsyncStorage.getItem(this.USER_TOKEN_KEY);
        // console.log(this.userToken)
    }
}

export default User;
