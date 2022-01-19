import axios from 'axios';

const BASE_URL = "https://ladooshop.herokuapp.com/api";

const TOKEN=''

export const publicRequest=axios.create(
    {baseURL:BASE_URL}
)
export const userRequest=axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})