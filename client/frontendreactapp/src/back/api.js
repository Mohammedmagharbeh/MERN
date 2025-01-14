import axios from 'axios'
const API=axios.create({
    baseURL:'http://127.0.0.1:5000/api'
})
export const fetchCars=()=>API.get('/rent');
export const deleteCar=(id)=>API.delete(`/deleterent/${id}`);
export const postcar=(car)=>API.post('Postrent',car);
export const updateCar=(id,formData)=>API.put(`/updatenewrent/${id}`,formData);
export const postregitrer = (user) => API.post('/users/postnewuser', user);
     


// to get user(test)
export const fetchuser=()=>API.get('/users')
// export const postusers=(user)=>API.post('/users/postnewuser',user)
export const deleteUser=(id)=>API.delete(`/deleteuser/${id}`)
export const updateuser=(id,userUpdate)=>API.put(`/updateuser/${id}`,userUpdate)

