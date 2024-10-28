// getuser




const regform=document.getElementById("userform")
regform.addEventListener('submit',function(event){
    event.preventDefault()

const username=document.getElementById('username').value
const email=document.getElementById('email').value
const password=document.getElementById('password').value
const password2=document.getElementById('confirm_password').value
postdata(username,email,password,password2)


})

async function postdata(username,email,password,password2) {
    const data={username:username,email:email,password:password,password2:password2}
    await fetch('http://127.0.0.1:5000/api/users/postnewuser',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })    .then(response => response.json())

}