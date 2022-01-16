import request from '~/utils/request'
export default {
  register(member) {
    return request({
      url: '/api/ucenter/member/register',
      method: 'post',
      data: member
    })
  }
}
