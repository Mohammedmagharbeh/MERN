const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const adminname = document.getElementById('adminname').value;
    const adminemail = document.getElementById('adminemail').value;
    const adminpassword = document.getElementById('adminpassword').value;
    const adminpassword2 = document.getElementById('adminpassword2').value;

    if (adminpassword !== adminpassword2) {
        alert('كلمة المرور غير متطابقة!'); 
        return;
    }

    adminpost(adminname, adminemail, adminpassword, adminpassword2);
});

async function adminpost(adminname, adminemail, adminpassword, adminpassword2) {
    const data = { adminname: adminname, adminemail: adminemail, adminpassword: adminpassword, adminpassword2: adminpassword2 };
    
    try {
        const response = await fetch('http://127.0.0.1:5000/api/admins/postanwedmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            
            alert('تم التسجيل بنجاح!');
        } else {
            
            alert('فشل التسجيل. حاول مرة أخرى.');
        }
    } catch (error) {
        console.error('خطأ في الطلب:', error);
        alert('حدث خطأ أثناء التسجيل.');
    }
}
