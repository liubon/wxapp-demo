import config from "./config";
import Http from "./http";
export const creatHttp = () => {
  const instance = new Http({
    baseUrl: config.baseUrl,
    timeout: config.timeout
  });
  return instance;
};
