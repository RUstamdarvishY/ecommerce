import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance
      .get<T[]>(this.endpoint)
      .then((response) => response.data);
  };

  get = (id: AxiosRequestConfig) => {
    return axiosInstance
      .get<T>(this.endpoint, id)
      .then((response) => response.data);
  };

  post = (data: T) => {
    return axiosInstance
      .post<T>(this.endpoint, data)
      .then((response) => response.data);
  };
}

export default ApiClient;
