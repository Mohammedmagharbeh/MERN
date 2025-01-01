const oliveform = document.getElementById('oliveform');
oliveform.addEventListener('submit', function(event) {
    event.preventDefault();  
    const photo = document.getElementById('olivephoto');
    
    if (photo.files.length > 0) {
        const file = photo.files[0];
        
        // تحقق من نوع الملف
        if (!file.type.startsWith('image/')) {
            alert("الرجاء اختيار صورة.");
            return;
        }
        
        
        const maxSize = 50 * 1024 * 1024;  // 50 ميغابايت
        if (file.size > maxSize) {
            alert("الصورة كبيرة جدًا! الحد الأقصى للحجم هو 5 ميغابايت.");
            return;
        }
        
        const reader = new FileReader();
        reader.onloadend = function() {
            const imageData = reader.result; 
            postimage(imageData);  
        };
        
        reader.readAsDataURL(file); 
    } else {
        alert("يرجى اختيار صورة.");
    }
});

async function postimage(image) {
    const data = {image:image }; 
    await fetch('http://127.0.0.1:5000/api/postolive', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
}
