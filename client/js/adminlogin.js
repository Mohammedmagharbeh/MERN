async function adminget() {
    await fetch('http://127.0.0.1:5000/api/admins')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const adminform = document.getElementById('adminform')
        
        adminform.addEventListener('submit', function(event){
            event.preventDefault()

            const username = document.getElementById("adusername").value
            const password = document.getElementById('adpassword').value

            let isValidadmin = false; // التأكد من أنه لا يوجد توجيه إلا إذا تم التحقق بنجاح

            // التحقق من بيانات تسجيل الدخول
            data.forEach(admin => {
                if (username === admin.adminname && password === admin.adminpassword) {
                    isValidadmin = true; // تعيين القيمة إلى true إذا كانت البيانات صحيحة
                }
            });

            // إذا كانت بيانات المستخدم صحيحة، التوجيه للصفحة التالية
            if (isValidadmin) {
                window.location.href = 'http://127.0.0.1:5500/client/basichtml/pro.html';
            } else {
                alert("اسم المستخدم أو كلمة المرور غير صحيحة");
            }
        })
    })
}

adminget();
