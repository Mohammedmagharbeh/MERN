async function getdata() {
    await fetch("http://127.0.0.1:5000/api/Rent")
        .then(response => response.json())
        .then(data=>{
            console.log(data)
            data.forEach(rents => {
                const card=document.createElement('div')
                card.innerHTML= `
                <img src="${rents.image}" alt="${rents.name}" />
                <h4>${rents.name} نوع المركبة</h4>
                <h1>سنة الصنع: ${rents.year}</h1>
                <h3>${rents.price} السعر</h3>
            
                `
                
                cardContainer.appendChild(card); 
               
                card.classList.add('card'); // إضافة فئة 'card' لتنسيق البطاقات
          const rentbutton=document.createElement('button')
          rentbutton.innerHTML='استاجر'
          cardContainer.appendChild(rentbutton)
          card.appendChild(rentbutton)
            });
        })}
        getdata()