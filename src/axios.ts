import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { merge } from 'lodash-es'

export interface HRequestConfig extends AxiosRequestConfig {
  /* 是否显示loading */
  useLoading?: boolean
  /* 拦截器 */
  interceptorHooks?: InterceptorHooks
}

/**
 * 封装后，不支持传入拦截器
 * 需要自己定义接口继承 AxiosRequestConfig类型
 * 从而支持传入拦截器，但拦截器选项应为可选属性
 * 之后请求实例传入的options为继承了AxiosRequestConfig的自定义类型
 */
export interface InterceptorHooks {
  /* 请求拦截器*/
  requestInterceptor?: (config: HRequestConfig) => HRequestConfig
  /**
   * 请求拦截器错误处理
   */
  requestInterceptorCatch?: <T>(error: T) => T
  /**
   * 响应拦截器
   **/
  responseInterceptor?: (response: AxiosResponse) => AxiosResponse
  /**
   * 响应拦截器错误处理
   */
  responseInterceptorCatch?: <T>(error: T) => T
}

export class HRequest {
  /**
   * 默认配置会被合并
   */
  config: HRequestConfig = {
    useLoading: false,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }

  // 用户自行实现拦截器
  interceptorHooks?: InterceptorHooks
  instance: AxiosInstance
  constructor(options: HRequestConfig) {
    // 合并默认配置
    merge(this.config, options)
    this.interceptorHooks = options.interceptorHooks
    this.instance = axios.create(this.config)
    this.setupInterceptor()
  }

  setupInterceptor() {
    this.instance.interceptors.request.use(
      this.interceptorHooks?.requestInterceptor,
      this.interceptorHooks?.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptorHooks?.responseInterceptor,
      this.interceptorHooks?.responseInterceptorCatch,
    )
  }

  request<T>(url: string, config: HRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>({ ...config, url })
        .then(resolve)
        .catch(reject)
    })
  }

  // 基础方法的封装 简化请求
  get<T = any>(url: string, params?: HRequestConfig['params'], config?: HRequestConfig): Promise<T> {
    return this.request(url, { ...config, params, method: 'GET' })
  }

  // post 是data
  post<T = any>(url: string, data?: HRequestConfig['data'], config?: HRequestConfig): Promise<T> {
    return this.request(url, { ...config, data, method: 'POST' })
  }

  delete<T = any>(url: string, data?: HRequestConfig['data'], config?: HRequestConfig): Promise<T> {
    return this.request(url, { ...config, data, method: 'DELETE' })
  }

  patch<T = any>(url: string, data?: HRequestConfig['data'], config?: HRequestConfig): Promise<T> {
    return this.request(url, { ...config, data, method: 'PATCH' })
  }

  put<T = any>(url: string, data?: HRequestConfig['data'], config?: HRequestConfig): Promise<T> {
    return this.request(url, { ...config, data, method: 'PUT' })
  }
}

