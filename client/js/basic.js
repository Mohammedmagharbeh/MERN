
// how to show data in page
async function getData() {
await fetch('http://127.0.0.1:5000/api/cars')
.then(response=>response.json())
.then(data=>{
    console.log(data)
    data.forEach(car => {
        const carinfo=document.createElement('div')
    carinfo.textContent=`name:${car.name},year:${car.year},color:${car.color}`
    document.body.appendChild(carinfo)
        

const DELETEbutton=document.createElement('button');
DELETEbutton.innerHTML='Delete'
document.body.appendChild(DELETEbutton)
DELETEbutton.onclick=function(){
    DELETECar(car._id)
}

const updateButton=document.createElement('button');
updateButton.innerHTML='Update';
updateButton.setAttribute('data-toggle','modal')
updateButton.setAttribute('data-target','#exampleModal')
document.body.appendChild(updateButton)
updateButton.onclick=function(){

    var name=document.getElementById('name1')
    var year=document.getElementById('year1')
    var color=document.getElementById('color1')
    var id=document.getElementById('updatedId')
    
    name.value=car.name;
    year.value=car.year;
    color.value=car.color;
    updatedId.value=car._id;

}
 });
    
})}
getData()

// post methode by form
const carForm=document.getElementById('carForm');
carForm.addEventListener('submit',function(event){
event.preventDefault();

var name=document.getElementById('name').value
var year=document.getElementById('year').value
var color=document.getElementById('color').value
postData(name,year,color)
})

async function postData(name,year,color) {
    var data={name:name,year:year,color:color}
    await fetch('http://127.0.0.1:5000/api/cars/postcar',{

        method:'POST',
        headers:{
             'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }).then(
        response=>response.json()
    )}

    // Delete methode

async function DELETECar(id) {
    await fetch(`http://127.0.0.1:5000/api/cars/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
    })
}

// update function


const carupdate=document.getElementById('carupdate')
carupdate.addEventListener('submit',function(event){
    event.preventDefault();
    var name=document.getElementById('name1').value
    var year=document.getElementById('year1').value
    var color=document.getElementById('color1').value
    var id=document.getElementById('updatedId').value

    const dataupdated={name:name,year:year,color:color}
    fetch(`http://127.0.0.1:5000/api/cars/${id}`,{
        method:'PUT',
        headers:{
    'Content-Type': 'application/json'
        },
        body:JSON.stringify(dataupdated)
    }).then(response=>response.json())
})





// const carupdate=document.getElementById('carupdate');
// carupdate.addEventListener('submit',function(event){
//     event.preventDefault()

// var name=document.getElementById('name1').value
// var year=document.getElementById('year1').value
// var color=document.getElementById('color1').value
// var id=document.getElementById('updatedId').value

// const dataupdated={name:name,year:year,color:color}
// fetch(`http://127.0.0.1:5000/api/cars/${id}`,{
//     method:'PUT',
//    headers:{
//     'Content-Type': 'application/json'
//    },
//    body:JSON.stringify(dataupdated)
// })
// .then(response=>response.json())
// })




// post with api

// async function postCar() {
//     const carData = {
//         name: "mercedes",
//         color: "black",
//         year: 2022
//     };

//     await fetch('http://127.0.0.1:5000/api/cars/postcar', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify(carData)
//     })
//     .then(response => response.json())
//     .then(data => {
//     })
// }
// postCar();