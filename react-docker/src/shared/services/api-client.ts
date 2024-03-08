import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "890ea5ed05f74ea29abbe40cb73c8467"
  }
})

export interface FetchResponse<T> {
  count: number
  next: string
  previous: string
  results: T[]
}

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (query?: object) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, query).then(res => res.data);
  }

  getDetails = async(slug?: string) => {
    return axiosInstance.get<T>(this.endpoint + "/" + slug).then(res => res.data);
  }
}

export default ApiClient
