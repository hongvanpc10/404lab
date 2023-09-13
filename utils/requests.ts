import { API_BASE_URL } from '@/configs/environment';
import axios from 'axios';

export const requests = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});
