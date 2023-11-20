let username=document.getElementById('username')
let password=document.getElementById('password')
let cpassword=document.getElementById('cpassword')
let email=document.getElementById('email')
let message=document.getElementById('msg')
let button=document.getElementById('regbtn')

button.addEventListener('click',function(e){
    e.preventDefault()
    if(username.value=="" && password.value==""){
        message.innerHTML="please fill in all fields"
    }
    else if(username.value=="izu" && password.value=="1234"){
        message.innerHTML="your account has been successfully created"
    }
    else{
        message.innerHTML="some went wrong"
    }
})