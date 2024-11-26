import React,{useEffect,useState} from 'react'
import { fetchCars,postcar,deletecars,updatecar } from '../back/api'
import '../App.css';


function Home() {
    const [cars,setrentcars]=useState([])
    const[formData,setformData]=useState({name:"",year:"",price:"",image:''})
    const [modalstate,setmodalstate]=useState(false)
    const [selececar,setselectcar]=useState(null)
    
    useEffect(()=>{
        const getcar=async()=>{
            const res=await fetchCars()
            setrentcars(res.data)
        }
        getcar()
    },)
   

// update

const carupdated=async(e)=>{
    e.preventDefault()
    const res=await updatecar(selececar._id,formData)
    setmodalstate(false)
}

const handelEditcar=async(car)=>{
    setselectcar(car);
    setformData({name:car.name,year:car.year,price:car.price,image:car.mage})
    setmodalstate(true)

}


// const updateCar = async (e) => {
//     e.preventDefault(); // منع الإجراء الافتراضي
//     const res = await updatecar(selececar._id, formData); // إرسال البيانات المعدلة
//     setmodalstate(false); // غلق المودال بعد التحديث
//     setrentcars(cars.map((car) => (car._id === selececar._id ? { ...car, ...formData } : car))); // تحديث قائمة المركبات
//   };
  

// const handelEditcar=async(car)=>{
//     setselectcar(car)
//     setformData({name:car.name,year:car.year,price:car.price,image:car.image})
//     setmodalstate(true)
// }


// TO add image very important
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
// Post methode
const addCar=async(e)=>{
    e.preventDefault()
    const res=await postcar(formData)
    setrentcars([...cars,formData])
    setformData({name:"",year:"",price:"",image:''})
}

const handeinputlAdd=async(e)=>{
    const{name,value}=e.target
    setformData({...formData,[name]:value})
}

// delete
const deleteCar=async(id)=>{
   const res=await deletecars(id);
   setrentcars(cars.filter(car=>car._id!==id))
}


    return(
        <>
            <h1>Welcome in final step</h1>
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
                        <h2>{car.price}</h2>
                        {car.image && <img src={car.image} alt={car.name} />}
                        <button className='delete-button' onClick={() =>{deleteCar(car._id)}}>delete</button>
                        <button onClick={() => handelEditcar(car)}>Edit</button>

                    </div>
                    
                ))}
            </div>
            {modalstate && (
  <div className="modal">
    <div className="modal-content">
      <h2>Edit Car</h2>
      <form onSubmit={carupdated}>
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
export default Home;