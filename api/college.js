import request from '~/utils/request'

export default{

  getList() {
    return request({
      url: '/api/edu/college/list',
      method: 'get'
    })
  },
  getById(id) {
    return request({
      url: `/api/edu/college/get/${id}`,
      method: 'get'
    })
  }
}
