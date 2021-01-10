import axios from "axios";

const API_URL = 'https://yuri-sds2.herokuapp.com';

export function fetchProducts() {
    return axios(`${API_URL}/products`)
}