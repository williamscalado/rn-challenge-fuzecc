import axios, { AxiosRequestConfig } from "axios";
import {
  IHTTP,
  IHTTPRequest,
  IHTTPRequestError,
} from "../../@types/httpRequest";

const API_ENDPOINT = process.env.EXPO_URL_API;

/* Default error messages for failing requests. */
const errorMessages: IHTTPRequestError = {
  default: "something went wrong",
  noResponse: "no response from server",
  network: "network error",
};

/* This function handles three types of errors relation  to requests. */
function errorHandler(error: any): void {
  if (error.response) {
    /* The server responded with a status code
    that falls out of the range of 2xx.  */
    throw `${error.response.data.message}` || errorMessages.default;
  } else if (error.request) {
    /* The request was made but no response was received. */
    throw error.request.response || errorMessages.noResponse;
  } else {
    /* Something went wrong in setting up the request. */
    throw error.message || errorMessages.network;
  }
}

/* Generic instance. For generic requests. */
const genericRequest = axios.create({
  baseURL: API_ENDPOINT,
});

/* Capturing the JWT token with interceptors. */
genericRequest.interceptors.request.use((req: any) => {
  const newRequest = req;
  const token = process.env.EXPO_API_TOKEN as string;
  if (token) {
    newRequest.headers = {
      ...newRequest.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return newRequest;
});

async function fetch({
  url,
  method,
  headers,
  data,
  params,
}: IHTTPRequest): Promise<any> {
  try {
    const response = await genericRequest({
      url,
      headers,
      method,
      data,
      params,
    } as AxiosRequestConfig);
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
}

export const HttpAdapter: IHTTP = {
  fetch,
};
