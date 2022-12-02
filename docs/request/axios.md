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

@props2table(../src/axios.ts)
