import axios, {AxiosResponse, AxiosError} from 'axios';

export async function getRequest(url: string) {
  return await axios.get(url);
}

export const postRequest = (
  url: string,
  successHandler: (data: any) => any,
  errorHandler: (data: any) => any,
  requestBody: any,
) => {
  axios
    .post(url, requestBody)
    .then((response: AxiosResponse) => {
      if (response.status === 200) {
        successHandler(response.data);
      } else {
        errorHandler(response.data);
      }
    })
    .catch((error: AxiosError) => {
      errorHandler(error);
    })
    .finally(() => {});
};
