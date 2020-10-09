import { useRef } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

function useApiCall() {
  const apiCall = useRef<AxiosInstance>(axios.create({
    headers: {
      'Content-Type': 'application/json'
    }
  }));

  async function get(url: string, config?: AxiosRequestConfig) {
    try {
      return await apiCall.current.get(url, config);

    } catch (err) {
      console.error(err);
    }
  }

  async function post(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      return await apiCall.current.post(url, data, config);

    } catch (err) {
      console.error(err);
    }
  }

  return { get, post };
}

export default useApiCall;
