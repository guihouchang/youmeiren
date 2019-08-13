import request from '../utils/request';
import obj2Form from '../utils/obj2Form';

/**
 * 获取协议url
 * @returns {AxiosPromise}
 */
export function getPrivacyInfo(data)
{
    return request({
        url: '/Privacy/getPrivacyInfo',
        method: 'post',
    });
}