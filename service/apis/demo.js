import {
  creatHttp
} from '../base';
const http = creatHttp();
export default {
  get: () => {
    return http.get('/get');
  },
  post: (param) => {
    return http.post('/post', param);
  },
  put: (id, param) => {
    return http.put(`/put/${id}`, param);
  },
};