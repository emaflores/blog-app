import axios from 'axios';

//ideal para sobrescribir la url
//importando en esos archivos axios desde aca
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

//instance.interceptors.request...

export default instance;