import { useRef } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

function useApiCall() {
  const apiCall = useRef<AxiosInstance>(axios.create());

  async function get(url: string, config: AxiosRequestConfig) {
    try {
      const data = await apiCall.current.get(url, config);
      return data;

    } catch (err) {
      console.error(err);
    }
  }

  function post() {

  }

  return { get, post };
}

export default useApiCall;
