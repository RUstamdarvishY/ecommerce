import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://online-shop-api-drf-9d5164fdf307.herokuapp.com/",
});

export interface ProductQuery {
  productId?: number;
  categoryId?: number;
  priceRange?: number[];
  ordering?: string;
  searchText?: string;
}

class ApiClient<T> {
  endpoint: string;
  params: ProductQuery | undefined;

  constructor(endpoint: string, params?: ProductQuery) {
    this.endpoint = endpoint;
    this.params = params;
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
