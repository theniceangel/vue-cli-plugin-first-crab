const BASE_URL = {
  development: 'http://10.192.168.1',
  production: 'https://www.google.com'
}

const HOST = BASE_URL[process.env.NODE_ENV]

export const getHomeDataURL = `${HOST}/home/get`
export const postHomeDataURL = `${HOST}/home/post`
