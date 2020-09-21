import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-c5a13.firebaseio.com/'
});

export default instance;