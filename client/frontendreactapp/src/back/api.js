import axios from 'axios'
const API=axios.create({
    baseURL:'http://127.0.0.1:5000/api'
})
export const fetchCars=()=>API.get('/rent')
export const deleteCar=(id)=>API.delete(`/deleterent/${id}`)
export const postcar=(car)=>API.post('Postrent',car)
export const updateCar=(id,formData)=>API.put(`/updatenewrent/${id}`,formData)
export const postregitrer = (user) => API.post('/users/postnewuser', user);
    