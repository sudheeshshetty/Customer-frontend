import axios from 'axios'
import config from '@/../config/config.js'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export const Req = axios.create({
    baseURL: `${config.baseApi}`
});
