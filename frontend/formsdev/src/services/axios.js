import axios from 'axios';

axios.defaults.xsrfCookieName = "CSRF-TOKEN";

axios.defaults.xsrfHeaderName = "X-CSRF-Token";

axios.defaults.withCredentials = true;

export default axios.create({
    baseURL: 'http://localhost:3001',
    headers: {Accept: 'application/json', 'Content-type': 'application/json'}
});