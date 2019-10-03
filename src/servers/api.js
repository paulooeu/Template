
import axios from 'axios-jsonp-pro';

const api = axios.create({
  baseURL: 'http://sistemas.gerinf.uneb.br/',
headers:{'X-Redmine-API-Key':'fc7de9459ea1960f5ddaccd62f8b2d066e87bf75'}
});
export default api;
