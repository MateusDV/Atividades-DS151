import axios from "axios";

const listaPaises = axios.create({
    baseURL: 'https://restcountries.com/v3.1/name/'
})

export default listaPaises;