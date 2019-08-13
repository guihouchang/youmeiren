import axios from 'axios';
import {BASE_API_URL} from 'react-native-dotenv';
import ModalIndicator from 'teaset/components/ModalIndicator/ModalIndicator';
import DropDownHolder from "./DropDownHolder";

// create an axios instance
const service = axios.create({
    baseURL: BASE_API_URL, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})


// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        console.log(global.store)
        if (global.store.user.userToken)
        {
            config.headers['token'] = global.store.user.userToken;
        }

        // ModalIndicator.show('请求中...');

        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        ModalIndicator.hide();
        console.log(response)
        const res = response.data

        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 20000) {
            DropDownHolder.getDropDown().alertWithType('error', 'error', res.msg)

            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                // to re-login
                DropDownHolder.getDropDown().alertWithType('error', 'error', res.msg)
                global.store.user.removeUserToken();
            }

            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        DropDownHolder.getDropDown().alertWithType('error', 'error', error.message)
        return Promise.reject(error)
    }
)

export default service
