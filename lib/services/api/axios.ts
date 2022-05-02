/* eslint-disable no-param-reassign */
import axios from "axios";
import Router from "next/router";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(config => {
  return config;
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { response } = error;

    if (response?.data?.error) {
      return;
    }
    if (response?.data?.message) {
      const {
        data: { message },
      } = response;

      if (message === "User has already assigned a wallet") {
        return;
      }

      if (message === "invalid password") {

        return;
      }

      if (message === "Unauthorized") {
        Router.replace("/login");
      }
    }
    Promise.reject(error);
  }
);

export { axiosInstance };
