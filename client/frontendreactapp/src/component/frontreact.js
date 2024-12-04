import React, { useEffect, useState } from 'react'
import { fetchCars,deleteCar,postcar,updateCar } from '../back/api'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Home(){
  const navigate=useNavigate()
const [cars,setrentcars]=useState([])
const [formData,setformData]=useState({name:"",year:"",price:"",image:""})
const [modalstate,setmodalstate]=useState(false)
const [selececar,setselectcar]=useState(null)
useEffect(()=>{

  const token=sessionStorage.getItem('jwt')
const invaliedToken=async()=>{
  try{
    const res=await axios.get('http://127.0.0.1:5000/api/jwt',{
      headers:{
        'Auth':'Bearer '+token
      }
    })
    console.log(res.data)
  }
  catch(err){
    console.log(err.response)
    if(err.response.status===401){
      navigate('/')
    }
  }
}
  const getcar=async()=>{
    const res=await fetchCars()
    setrentcars(res.data)
  }
invaliedToken()

  getcar()
},)

// delete
const deletecars = async (id) => {
  const confirmDelete = window.confirm("Do you really want to delete this car?");
  if (confirmDelete) {
    await deleteCar(id); // حذف السيارة من الخادم
    setrentcars(cars.filter((car) => car._id !==car.id)); // تحديث قائمة السيارات
    alert("The car has been deleted successfully.");
  } else {
    alert("Car deletion has been canceled."); // تنبيه عند الإلغاء
  }
};



// post 
const addCar=async(e)=>{
  e.preventDefault()
  const res=await postcar(formData)
  setrentcars([...cars,formData])
  setformData({name:"",year:"",price:"",image:""})
}
const handeinputlAdd=async(e)=>{
  const {name,value}=e.target
  setformData({...formData,[name]:value})

}

const handleImageChange = (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = function () {
              const imageData = reader.result; // هنا ستأخذ الصورة كـ Base64
              setformData({
                ...formData,
                image: imageData, // تعيين الصورة كـ Base64
              });
            };
      
            reader.readAsDataURL(file); // قراءة الملف كـ Data URL (Base64)   
          } else {
            alert("يرجى اختيار صورة.");
          }
        };

        // update
        const updatecar=async(e)=>{
          e.preventDefault()
          const res=await updateCar(selececar._id,formData)
          setmodalstate(false)
          alert('car was updated')
          setformData({ name: "", year: "", price: "", image: "" }); // تفريغ الحقول

        }
        const handelEditcar=async(car)=>{
          setselectcar(car)
          setformData({name:car.name,year:car.year,price:car.price,image:car.image})
          setmodalstate(true)
        }
        const closeModal = () => {
          setmodalstate(false); // يغلق المودال عن طريق تغيير الحالة إلى false
          setformData({ name: "", year: "", price: "", image: "" }); // يعيد تفريغ الحقول
        };
        
  return(
    <>
    <h1>welcome</h1>

    <form className="car-form" onSubmit={addCar}>
       <input name='name' value={formData.name} type='text' placeholder='carName' onChange={handeinputlAdd} className="form-input" required/>
      <input name='year' value={formData.year} type='number' placeholder='year' onChange={handeinputlAdd} className="form-input" required/>
            <input name='price' value={formData.price} type='number' placeholder='price' onChange={handeinputlAdd} className="form-input" required/>
            <input name="image" type="file"accept="image/ " onChange={handleImageChange} className="form-input" required/>
       <button className="submit-button" type='submit'>addCar</button>
  </form>


    <div className="cars-container">
                {cars.map((car) => (
  <div className="car-card" >
                        <h2>{car.name}</h2>
                         <p>Year: {car.year}</p>
                        <h2> price:{car.price}Jd</h2>
                         {car.image && <img src={car.image} alt={car.name} />}
                         <button className='delete-button' onClick={()=>{deletecars(car._id)}}>delete</button>
                        <button className='edit' onClick={()=>{handelEditcar(car)}}>edit</button>
                        
                     </div>
                    
                 ))}
             </div>



               {modalstate && (
  <div className="modal">
    <div className="modal-content">
      <h2>Edit Car</h2>
      <form onSubmit={updatecar}>
        <input name="name" value={formData.name} type="text" placeholder="Car Name" onChange={handeinputlAdd} required />
        <input name="year" value={formData.year} type="number" placeholder="Year" onChange={handeinputlAdd} required />
        <input name="price" value={formData.price} type="number" placeholder="Price" onChange={handeinputlAdd} required />
        <input name="image" type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Update Car</button>
        <button type="button" onClick={closeModal}>Cancel</button>
        {/* <button type="button" onClick={()=>{setmodalstate(false)}}>Cancel</button> */}

      </form>
    </div>
  </div>
)}
    </>
  )
}
export default Home


























































































