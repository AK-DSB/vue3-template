//进行axios二次封装:使用请求与响应拦截器
// import useUserStore from "@/store/modules/user";
import axios from "axios";
import { message } from "ant-design-vue";

const handleRequestError = async (error: string) => {
  message.error(error);
  //  返回一个reject的Promise
  return Promise.reject(error);
};

//  第一步:利用axios对象的create方法,去创建axios实例(其他的配置:基础路径、超时的时间)
const request = axios.create({
  //  基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API,
  //  超时时间
  timeout: 5000,
});

//  第二步:request实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  //获取用户相关的小仓库:获取仓库内部token,登录成功以后携带给服务器
  // const userStore = useUserStore();
  // if (userStore.token) {
  //   config.headers.token = userStore.token;
  // }
  //config配置对象,headers属性请求头,经常给服务器端携带公共参数
  //  返回配置对象
  return config;
}, handleRequestError);

//  第三步:响应拦截器
request.interceptors.response.use(
  async (response) => {
    //  成功回调:简化数据
    const data = response.data;
    if (data.ok) {
      return data;
    }
    await handleRequestError(response.data.message);
    return Promise.reject(response.data);
  },
  async (error) => {
    //  失败回调:处理http网络错误的
    //  定义一个变量:存储网络错误信息
    let message = "";
    //  http状态码
    const status = error.response.status;
    switch (status) {
      case 401:
        message = "TOKEN过期";
        break;
      case 403:
        message = "无权访问";
        break;
      case 404:
        message = "请求地址错误";
        break;
      case 500:
        message = "服务器出现问题";
        break;
      default:
        message = "网络出现问题";
        break;
    }
    //  调用封装的函数进行错误处理
    await handleRequestError(message);
  },
);

// GET method
export const getRequest = async <T, R>(url: string, params?: T) => {
  try {
    const response = await request.get(url, { params });
    return response.data as R;
  } catch (error) {
    console.log(error);
  }
};
// POST method
export const postRequest = async <T, R>(url: string, data?: T) => {
  try {
    const response = await request.post(url, data);
    return response.data as R;
  } catch (error) {
    console.log(error);
  }
};
// PUT method
export const putRequest = async <T, R>(url: string, data?: T) => {
  try {
    const response = await request.put(url, data);
    return response.data as R;
  } catch (error) {
    console.log(error);
  }
};
// DELETE method
export const deleteRequest = async <R>(url: string) => {
  try {
    const response = await request.delete(url);
    return response.data as R;
  } catch (error) {
    console.log(error);
  }
};

//  对外暴露
export default request;
