# axios封装

## use

```typescript
import { HRequest } from '@yucccc/utils'

const h = HRequest(config?: HRequestConfig)

h.request(url, config?: HRequestConfig)

h.get(url: string, data?: HRequestConfig['data'], config?: HRequestConfig)
h.post(url: string, data?: HRequestConfig['data'], config?: HRequestConfig)
h.put(url: string, data?: HRequestConfig['data'], config?: HRequestConfig)
h.delete(url: string, data?: HRequestConfig['data'], config?: HRequestConfig)
h.patch(url: string, data?: HRequestConfig['data'], config?: HRequestConfig)

```

### loading使用
```typescript
import { HRequest } from '@yucccc/utils'
const h = HRequest({
  interceptorHooks: {
    requestInterceptor: (config) => {
      if (config.useLoading) {
        // 显示loading逻辑
      }
      // loading
      return config
    },
    responseInterceptor: (res) => {
      if (config.useLoading) {
        // 隐藏loading逻辑
      }
      // loading
      return res
    }
  }
})
// 需要给接口传递isLoading: true 代表需要使用loading
h.get('/url/a', {data: '1'}, { useLoading: true })
```

@props2table(../src/axios.ts)
