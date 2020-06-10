import BaseService from '@/services/baseService'

class AuthenService extends BaseService {
  constructor() {
    super('')
  }

  login(username, password) {
    return this.sendPost('/login', null, { username, password })
  }

  getProfile() {
    return this.sendGet('/me')
  }
}

export default new AuthenService()
