import { creatHttp } from '../base';
const http = creatHttp();
export default {
 signIn:(param)=>{
  return http.post(
    "/v1/users/sign_in",param
  );
 },
} 