import axios from 'axios';
const SERVER = 'http://127.0.0.1:8000/api'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}

const login = x => axios.post(`${SERVER}/users/login`, JSON.stringify(x), { headers })
const join = x => axios.post(`${SERVER}/users/join`, JSON.stringify(x), { headers })
const exist = x => axios.get(`${SERVER}/users/exist/${x}`)
const modify = x => axios.put(`${SERVER}/users/modify/${x}`)//pk로 찾는거
const remove = x => axios.delete(`${SERVER}/user/delete/${x}`)
const list = x => axios.get(`${SERVER}/users/list/${x}`)//page로 찾는거
const find = x => axios.get(`${SERVER}/users/find/${x}`)



export default {
    login,
    join,
    exist,
    modify,
    remove,
    list,
    find
}