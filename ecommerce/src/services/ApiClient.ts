import axios, { AxiosRequestConfig } from "axios";
import ProductQuery from "../components/entities/ProductQuery";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

class ApiClient<T>{
  endpoint: string;
  params: ProductQuery | undefined

  constructor(endpoint: string, params?: ProductQuery) {
    this.endpoint = endpoint;
    this.params = params
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<T[]>(this.endpoint, config)
      .then((response) => response.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + id)
      .then((response) => response.data);
  };

  post = (data: T) => {
    return axiosInstance
      .post<T>(this.endpoint, data)
      .then((response) => response.data);
  };
}

export default ApiClient;
