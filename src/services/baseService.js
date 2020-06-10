import isArray from 'lodash/isArray'
import isNil from 'lodash/isNil'
import isEmpty from 'lodash/isEmpty'
import isString from 'lodash/isString'
import stringify from 'qs/lib/stringify'
import restClient from '@/plugins/axios'


export default class BaseService {
  constructor(baseUri) {
    this.baseUri = baseUri
  }

  buildUri = (params, query) => {
    let uri = this.baseUri
    if(!isNil(params)) {
      if (isArray(params) && !isEmpty(params)) {
        uri = `${uri}/${params.join('/')}`
      } else if (isString(params)) {
        uri = `${uri}/${params}`
      }
    }
    if (!isNil(query)) {
      uri = `${uri}?${stringify(query)}`
    }

    return uri.replace(/\/\//g, '/')
  }

  sendGet = (params, query) => {
    return restClient.get(this.buildUri(params, query))
  }

  sendPost = (params, query, body) => {
    return restClient.post(this.buildUri(params, query), body)
  }

  sendPut = (params, query, body) => {
    return restClient.put(this.buildUri(params, query), body)
  }

  sendDelete = (params, query) => {
    return restClient.delete(this.buildUri(params, query))
  }
}
