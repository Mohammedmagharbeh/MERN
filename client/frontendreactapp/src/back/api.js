import axios from 'axios';
const API=axios.create({
    baseURL:'http://127.0.0.1:5000/api'
})
export const fetchCars=()=>API.get('/rent')
export const postcar=(car)=>API.post('/Postrent',car)
export const deletecars=(id)=>API.delete(`/deleterent/${id}`)
export const updatecar = (id, formData) => API.put(`/updatenewrent/${id}`, formData);



