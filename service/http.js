import store from '../store/index';
import QS from 'qs';
const Toast = (title) => {
  wx.showToast({
    title,
    icon: 'none',
    duration: 2000,
  });
};
class Http {
  constructor({
    baseUrl,
    timeout
  }) {
    this.baseUrl = baseUrl;
    this.timeout = timeout;
    this.interceptors = {};
  }
  httpParams(params) {
    let str;
    for (let key in params) {
      str = `&${key}=${params[key]}`;
    }
    return '?' + str.substr(1);
  }
  get(url, query) {
    return new Promise((resolve, reject) => {
      wx.request({
        header: {
          Authorization: store.data.token,
          // "Cache-Control": "no-cache",
        },
        url: this.baseUrl +
          url +
          QS.stringify(query, {
            arrayFormat: 'brackets',
          }),
        method: 'get',
        success(res) {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(res.data);
          }
          else {
            try {
              Toast(res.data.meta.message);
            } catch (error) {
              Toast('未知错误');
            }
            reject(res);
          }
        },
        fail(err) {
          try {
            Toast(res.data.meta.message);
          } catch (error) {
            Toast('未知错误');
          }
          reject(err);
        },
      });
    });
  }
  post(url, data, header) {
    return new Promise((resolve, reject) => {
      wx.request({
        header: {
          Authorization: store.data.token,
          ...header
        },
        url: this.baseUrl + url,
        method: 'post',
        data,
        success(res) {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(res.data);
          } else {
            try {
              Toast(res.data.meta.message);
            } catch (error) {
              Toast('未知错误');
            }
            reject(res);
          }
        },
        fail(err) {
          try {
            Toast(res.data.meta.message);
          } catch (error) {
            Toast('未知错误');
          }
          reject(err);
        },
      });
    });
  }
  delete(url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        header: {
          Authorization: store.data.token,
        },
        url: this.baseUrl + url,
        method: 'delete',
        data,
        success(res) {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(res.data);
          } else {
            try {
              Toast(res.data.meta.message);
            } catch (error) {
              Toast('未知错误');
            }
            reject(res);
          }
        },
        fail(err) {
          try {
            Toast(res.data.meta.message);
          } catch (error) {
            Toast('未知错误');
          }
          reject(err);
        },
      });
    });
  }
  put(url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        header: {
          Authorization: store.data.token,
        },
        url: this.baseUrl + url,
        method: 'put',
        data,
        success(res) {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(res.data);
          } else if (res.statusCode === 403) {
            reject(res);
          } else {
            try {
              Toast(res.data.meta.message);
            } catch (error) {
              Toast('未知错误');
            }
            reject(res);
          }
        },
        fail(err) {
          try {
            Toast(res.data.meta.message);
          } catch (error) {
            Toast('未知错误');
          }
          reject(err);
        },
      });
    });
  }
  uploadFile(url, method, data) {
    return new Promise((resolve, reject) => {
      // debugger;
      wx.request({
        header: {
          // 'Content-type': `multipart/form-data`,
          Authorization: store.data.token,
        },
        url: this.baseUrl + url,
        method: method,
        data,
        success(res) {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            // debugger;
            resolve(res.data);
          } else if (res.statusCode === 403) {
            reject(res);
          } else {
            try {
              Toast(res.data.meta.message);
            } catch (error) {
              Toast('未知错误');
            }
            reject(res);
          }
        },
        fail(err) {
          try {
            Toast(res.data.meta.message);
          } catch (error) {
            Toast('未知错误');
          }
          reject(err);
        },
      });
    });
  }
}
export default Http;