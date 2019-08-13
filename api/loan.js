import request from '../utils/request';
import obj2Form from '../utils/obj2Form';


/**
 * 获取贷款信息列表
 * @param data {page: 0, type: 1}
 * @returns {AxiosPromise}
 */
export function getList(data)
{
    return request({
        url: '/loan/getList',
        method: 'post',
        data: obj2Form(data),
    });
}