async function getdata() {
    await fetch('http://127.0.0.1:5000/api/users')
    .then(response => response.json())
    .then(data => {
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username1').value;
            const password = document.getElementById('password1').value;

            // تحقق من عدم ترك الحقول فارغة
            if (!username || !password) {
                alert("يرجى ملء اسم المستخدم وكلمة المرور");
                return; // الخروج من الدالة إذا كانت الحقول فارغة
            }

            let isValidUser = false;

            // تحقق من البيانات المسترجعة من قاعدة البيانات باستخدام forEach
            data.forEach(user => {

                // تحقق من تطابق اسم المستخدم وكلمة المرور
                if (username === user.username && password === user.password) {
                    isValidUser = true;
                    window.location.href = "pro2.html"; // الانتقال إلى الصفحة التالية
                }
            });

            // إذا لم يتم العثور على المستخدم
            if (!isValidUser) {
                alert("اسم المستخدم أو كلمة المرور غير صحيحة");
            }
        });
    })
    .catch(error => {
        console.error('Error:', error); // معالجة الأخطاء في حالة فشل جلب البيانات
    });
}

getdata();
