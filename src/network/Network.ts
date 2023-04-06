import axios from 'axios';
const BASE_URL = 'https://techops-recsys-lateral-hiring.github.io/moments-data/';

export async function getRequest(url: string): Promise<any> {
  return await axios.get(`${BASE_URL}/${url}`);
}
