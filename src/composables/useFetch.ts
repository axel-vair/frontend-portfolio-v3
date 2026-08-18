import { ref, onMounted } from 'vue'
import axios, { type AxiosRequestConfig } from 'axios'

export const useFetch = <T>(url: string, config: AxiosRequestConfig = {}) => {
  const data = ref<T | null>()
  const error = ref<unknown>(null)
  const loading = ref(true)

  const execute = async () => {
    loading.value = true
    error.value = null
    try {
      const result = await axios.request<T>({
        url,
        headers: {
          Accept: 'application/json',
          ...config.headers,
        },
        ...config,
      })
      data.value = result.data
    } catch (ex) {
      error.value = ex
    } finally {
      loading.value = false
    }
  }

  onMounted(execute)

  return { data, loading, error, execute }
}
