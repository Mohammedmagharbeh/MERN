import React,{useEffect,useState} from "react"
import { fetchCars } from "../back/api"



export default function Home(){
    const[cars,setcars]=useState([])
    useEffect(()=>{
        const getCars=async()=>{
            const res=await fetchCars()
            setcars(res.data)
        }
        getCars()
    },[])
    console.log(cars)
    return(
        <>
   
        <h1>Welcome in React front</h1>
        {cars.length>0 &&
        <ul>
            {cars.map((car)=>(
                <li>
                    {car.name},{car.year}
                </li>
            ))}
        </ul>
        }
        </>
    )
} 