import axios from 'axios';
const BASE_URL = 'https://thoughtworks-ios.herokuapp.com';

export async function getRequest(url: string): Promise<any> {
  return await axios.get(`${BASE_URL}/${url}`);
}
