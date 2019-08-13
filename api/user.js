import request from '../utils/request';
import obj2Form from '../utils/obj2Form'

/**
 *
 * @param data {account: '', password: '', name: ''}
 * @returns {AxiosPromise}
 */
export function register(data) {

    return request({
        url: '/user/register',
        method: 'post',
        data: obj2Form(data),
    });
}

/**
 * 用户登录
 * @param data {account: '', password: ''}
 */
export function login(data)
{
    return request({
        url: '/user/login',
        method: 'post',
        data: obj2Form(data),
    });
}

/**
 * 获得个人中心信息
 * @returns {AxiosPromise}
 */
export function getCenterInfo()
{
    return request({
        url: '/user/getCenterInfo',
        method: 'post',
    });
}


/**
 * 修改密码
 * @param data {password: ''}
 * @returns {AxiosPromise}
 */
export function changePassword(data)
{
    return request({
        url: '/user/changePassword',
        method: 'post',
        data: obj2Form(data)
    });
}

/**
 * 修改昵称
 * @param data {name: ''}
 * @returns {AxiosPromise}
 */
export function changeName(data)
{
    return request({
        url: '/user/changeName',
        method: 'post',
        data: obj2Form(data)
    });
}

/**
 * 添加建议
 * @param data {content: ''}
 * @returns {AxiosPromise}
 */
export function addSuggest(data) {
    return request({
        url: '/user/addSuggest',
        method: 'post',
        data: obj2Form(data)
    });
}