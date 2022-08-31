import axios from 'axios'

export const getData = (url, params = {}) => {
  return axios.get(url, {
    params
  })
}

export const postData = (url, data = {}) => {
  return axios.post(url, data)
}
