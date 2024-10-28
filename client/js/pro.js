
// get to browse
async function getdata() {
    await fetch("http://127.0.0.1:5000/api/Rent")
        .then(response => response.json())
        .then(data => {
            
            data.forEach(rents => {
            const cardContainer = document.getElementById("cardContainer"); // الحصول على حاوية البطاقات
                const rentCard = document.createElement("div"); // إنشاء عنصر div جديد
                rentCard.classList.add("card"); // إضافة الفئة 'card' ليتناسب مع التنسيق
                
                // إضافة تفاصيل المركبة وزر الحذف داخل البطاقة
                rentCard.innerHTML = `
                    <img src="${rents.image}" alt="${rents.name}" />
                    <h4>${rents.name} نوع المركبة</h4>
                    <h1>سنة الصنع: ${rents.year}</h1>
                    <h3>${rents.price} السعر</h3>
                    `
                    const deletebuttonRent = document.createElement('button');
                    deletebuttonRent.innerHTML ='حذف المركبة'
                    deletebuttonRent.classList.add('delete-button'); // إضافة فئة للزر ليسهل التحكم في تنسيقه
                    deletebuttonRent.setAttribute('data-id', rents._id); // تعيين معرف المركبة كـ data-id
     
                    deletebuttonRent.onclick=function(){
                        Deleteren(rents._id,)
                        alert('هل تريد حذف المركبة')
                        
                    }
                    // إضافة زر الحذف داخل البطاقة
                    rentCard.appendChild(deletebuttonRent);
                        // إضافة البطاقة إلى حاوية البطاقات
                    cardContainer.appendChild(rentCard);

const updaterent=document.createElement('button')
updaterent.innerHTML='تعديل'
updaterent.classList.add('update-button'); 

// document.body.appendChild(updaterent)
rentCard.appendChild(updaterent);
cardContainer.appendChild(rentCard);
updaterent.setAttribute('data-toggle','modal')
updaterent.setAttribute('data-target','#exampleModalLong')
updaterent.onclick=function(){

    var name=document.getElementById('name2')
    var year=document.getElementById('year2')
    var price=document.getElementById('price2')
    var image=document.getElementById('image2')
    var id=document.getElementById('newId')
    name.value=rents.name;
    year.value=rents.year;
    price.value=rents.price
    newId.value=rents._id;

}

})})};

getdata();

const rentForm = document.getElementById("rentform");
rentForm.addEventListener('submit', function(event) {
    // event.preventDefault();
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').files[0]; // الحصول على الملف المحدد

    // قراءة الصورة باستخدام FileReader
    const reader = new FileReader();
    reader.onloadend = function() {
        const imageData = reader.result; // هنا ستأخذ الصورة كـ Base64
        postREN(name, year,price,imageData); // استدعاء الدالة مع الصورة كـ Base64
    };
    
    if (image) {
        reader.readAsDataURL(image); // قراءة الملف كـ Data URL
    } else {
        alert("يرجى اختيار صورة.");
    }
    
});

async function postREN(name, year,price, image) {
    const data = { name: name, year: year, image: image,price:price }; // استخدام الصورة كـ Base64
   
    await fetch('http://127.0.0.1:5000/api/postrent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(data)
    })
    
    .then(response => response.json())
    
    
}
// delete

async function Deleteren(id) {
    await fetch(`http://127.0.0.1:5000/api/deleterent/${id}`,{
        method:'DELETE' ,
        
        headers:{
            'Content-Type': 'application/json'
        }
        
    })
    
}

// update
const rentupdate=document.getElementById('rentupdate')
rentupdate.addEventListener('submit',function(event){
    // event.preventDefault()
        
    var newname=document.getElementById('name2').value
    var newyear=document.getElementById('year2').value
    var newprice=document.getElementById('price2').value
    const newimage = document.getElementById('image2').files[0]; // الحصول على الملف المحدد
    var id=document.getElementById('newId').value
    
    const rentupdated = { name: newname, year: newyear, price: newprice };

    fetch(`http://127.0.0.1:5000/api/updaterent/${id}`,{
        
        method:"PUT",
headers:{
    'Content-Type': 'application/json'
},

body:JSON.stringify(rentupdated) 
    }).then(response=>response.json()
    
)
})
