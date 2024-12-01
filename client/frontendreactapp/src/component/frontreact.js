import React, { useEffect, useState } from 'react'
import { fetchCars,deleteCar,postcar,updateCar } from '../back/api'
function Home(){
const [cars,setrentcars]=useState([])
const [formData,setformData]=useState({name:"",year:"",price:"",image:""})
const [modalstate,setmodalstate]=useState(false)
const [selececar,setselectcar]=useState(null)
useEffect(()=>{
  const getcar=async()=>{
    const res=await fetchCars()
    setrentcars(res.data)
  }
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
        }
        const handelEditcar=async(car)=>{
          setselectcar(car)
          setformData({name:car.name,year:car.year,price:car.price,image:car.image})
          setmodalstate(true)
        }

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
        <button type="button" onClick={() => setmodalstate(false)}>Cancel</button>
      </form>
    </div>
  </div>
)}
    </>
  )
}
export default Home

































// import React,{useState,useEffect} from 'react'
// import { deleteCar, fetchCars, postcar,updateCar } from '../back/api'
// import '../App.css';


// function Home(){

// const [cars,setrentcars]=useState([])
// const [formData,setformData]=useState({name:'',year:'',price:'',image:''})
// const [selececar,setselectcar]=useState(null)
// const [modalstate,setmodalstate]=useState(false)
// useEffect(()=>{
//   const getcar=async()=>{
//     const res=await fetchCars()
//     setrentcars(res.data)
//   }
//   getcar()
// })
// // delete
// const deletecars=async(id)=>{
//   const res=await deleteCar(id)
//   setrentcars(cars.filter(car=>car._id!==id))

// }

// // post
// const addCar=async(e)=>{
//   e.preventDefault()
//   const res=await postcar(formData)
//   setrentcars([...cars,formData])
// }
// const handeinputlAdd=async(e)=>{
//   const{name,value}=e.target
//   setformData({...formData,[name]:value})
// }

// const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//           const reader = new FileReader();
//           reader.onloadend = function () {
//             const imageData = reader.result; // هنا ستأخذ الصورة كـ Base64
//             setformData({
//               ...formData,
//               image: imageData, // تعيين الصورة كـ Base64
//             });
//           };
    
//           reader.readAsDataURL(file); // قراءة الملف كـ Data URL (Base64)   
//         } else {
//           alert("يرجى اختيار صورة.");
//         }
//       };

//       // update
//       const updatecar=async(e)=>{
//         e.preventDefault()
//         const res=await updateCar(selececar._id,formData)
//         setmodalstate(false)
//       }
//       const handelEditcar=async(car)=>{
//         setselectcar(car)
//         setformData({name:car.name,year:car.year,price:car.price,image:car.image})
//         setmodalstate(true)
//       }

      
//   return(
//     <>
//         <h1>
//         Welcom in RENTAL office
//         </h1>


//     <form className="car-form" onSubmit={addCar}>
//       <input name='name' value={formData.name} type='text' placeholder='carName' onChange={handeinputlAdd} className="form-input" required/>
//      <input name='year' value={formData.year} type='number' placeholder='year' onChange={handeinputlAdd} className="form-input" required/>
//      <input name='price' value={formData.price} type='number' placeholder='price' onChange={handeinputlAdd} className="form-input" required/>
//      <input name="image" type="file"accept="image/ " onChange={handleImageChange} className="form-input" required/>
//       <button className="submit-button" type='submit'>addCar</button>
//   </form>





//     <div className="cars-container">
//                 {cars.map((car) => (
//   <div className="car-card" >
//                         <h2>{car.name}</h2>
//                          <p>Year: {car.year}</p>
//                         <h2> price:{car.price}Jd</h2>
//                          {car.image && <img src={car.image} alt={car.name} />}
//                          <button className='delete-button' onClick={()=>{deletecars(car._id)}}>delete</button>
//                          <button className='edit-button' onClick={()=>handelEditcar(car)}>Edit</button>
                        
//                      </div>
                    
//                  ))}
//              </div>

           


// {/* edit Modal */}

//   {modalstate && (
//   <div className="modal">
//     <div className="modal-content">
//       <h2>Edit Car</h2>
//       <form onSubmit={updatecar}>
//         <input name="name" value={formData.name} type="text" placeholder="Car Name" onChange={handeinputlAdd} required />
//         <input name="year" value={formData.year} type="number" placeholder="Year" onChange={handeinputlAdd} required />
//         <input name="price" value={formData.price} type="number" placeholder="Price" onChange={handeinputlAdd} required />
//         <input name="image" type="file" accept="image/*" onChange={handleImageChange} />
//         <button type="submit">Update Car</button>
//         <button type="button" onClick={() => setmodalstate(false)}>Cancel</button>
//       </form>
//     </div>
//   </div>
// )}
//     </>                   
//   )
// }
// export default Home
























































