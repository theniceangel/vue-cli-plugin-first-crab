import { getData, postData } from './request'
import { getHomeDataURL, postHomeDataURL} from './config'

export const getHomeDataAPI = (params) => getData(getHomeDataURL, params)
export const postHomeDataAPI = (params) => postData(postHomeDataURL, params)
