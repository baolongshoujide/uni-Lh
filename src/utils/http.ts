import { useMemberStore } from '@/stores'

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 返回数据类型
interface Data<T> {
  code: string
  msg: string
  result: T
}

// 真正发送请求的方法
const request = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,

      success(res) {
        // 请求成功
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        }

        // token失效
        else if (res.statusCode === 401) {
          const memberStore = useMemberStore()

          memberStore.clearProfile()

          uni.navigateTo({
            url: '/pages/login/login',
          })

          reject(res)
        }

        // 其他错误
        else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })

          reject(res)
        }
      },

      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，请换个网络试试呢',
        })

        reject(err)
      },
    })
  })
}

// 请求拦截
const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    // 拼接基础地址
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }

    // 请求超时时间
    options.timeout = 10000

    // 请求头
    options.header = {
      ...options.header,

      'source-client': 'miniapp',
    }

    // 添加token
    const memberStore = useMemberStore()

    const token = memberStore?.profile?.token

    if (token) {
      options.header.Authorization = token
    }
  },
}

// 注册拦截器
uni.addInterceptor('request', httpInterceptor)

uni.addInterceptor('uploadFile', httpInterceptor)

// 对外暴露
export const http = {
  // GET请求
  get<T>(url: string, data?: any) {
    return request<T>({
      url,
      method: 'GET',
      data,
    })
  },

  // POST请求
  post<T>(url: string, data?: any) {
    return request<T>({
      url,
      method: 'POST',
      data,
    })
  },
  // PUT请求（更新）
  put<T>(url: string, data?: any) {
    return request<T>({
      url,
      method: 'PUT',
      data,
    })
  },

  // DELETE请求（删除）
  delete<T>(url: string, data?: any) {
    return request<T>({
      url,
      method: 'DELETE',
      data,
    })
  },
}
