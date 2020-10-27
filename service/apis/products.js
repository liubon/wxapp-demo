import {
  creatHttp
} from '../base';
const http = creatHttp();
export default () => {
  return http.get('/v1/products?page=1&per=99');
}