import axios from 'axios'
const baseUrl = 'https://restcountries.eu/rest/v2/'

const getAll = () => {
    const allUrl = baseUrl+'all/'
    const request = axios.get(allUrl)
    return request.then(response => response.data)
}

export default {getAll}