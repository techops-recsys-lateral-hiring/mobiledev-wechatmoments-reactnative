import axios, { AxiosResponse, AxiosError } from "axios";

export const getRequest = (
  url: string,
  successHandler: (data: any) => any,
  errorHandler: (data: any) => any
) => {
  axios
    .get(url)
    .then((response: AxiosResponse) => {
      if (response.status == 200) {
        successHandler(response.data);
      } else {
        errorHandler(response.data);
      }
    })
    .catch((error: AxiosError) => {
      errorHandler(error);
    })
    .finally(() => {
      // always executes at the last of any API call
    });
};

export const postRequest = (
  url: string,
  successHandler: (data: any) => any,
  errorHandler: (data: any) => any,
  requestBody: any
) => {
  axios
    .post(url, requestBody)
    .then((response: AxiosResponse) => {
      console.log(response);
      if (response.status == 200) {
        successHandler(response.data);
      } else {
        errorHandler(response.data);
      }
    })
    .catch((error: AxiosError) => {
      errorHandler(error);
    })
    .finally(() => {

    });
};
