import axios from "axios";
const baseURL = '/api/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseURL, newObject)
    return request.then(response => response.data)
} 

const update = (id, newObject) => {
    const request = axios.put(`${baseURL}/${id}`, newObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    return axios.delete(`${baseURL}/${id}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, remove }