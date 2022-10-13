import axios from "axios"
import {Base_url} from './constants/constants';
const instance = axios.create({
    baseURL: Base_url,

  });
export default instance;