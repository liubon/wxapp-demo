import {
  creatHttp
} from '../base';
const http = creatHttp();
export default {
  getGlobalList: () => {
    return http.get('/v1/global_financings');
  },
  getGlobalDetail: (id) => {
    return http.get(`/v1/global_financings/${id}`);
  },
  postGlobal: (param) => {
    return http.post('/v1/global_financings', param);
  },
  putGlobal: (id, param) => {
    return http.put(`/v1/global_financings/${id}`, param);
  },
};