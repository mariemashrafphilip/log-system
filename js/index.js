
var signUp = document.getElementById('signUp')
var signIn = document.getElementById ('signIn')
var formOne = document.getElementById(('formOne'))
var formTwo = document.getElementById(('formTwo'))

var signBtn =document.getElementById('signBtn')
var loginBtn =document.getElementById('login')

var email = document.getElementById('link')
var pass = document.getElementById('password')


var nameInput = document.getElementById('name')
var emailInput = document.getElementById('email')
var passInput = document.getElementById('pass')


var list= []

if (localStorage.getItem('personList')!=null){
list = JSON.parse(localStorage.getItem('personList'))
console.log(list)
}

function showSignUp(){
    formOne.classList.add('d-none')
    formTwo.classList.remove('d-none')
}

function showLogin(){
    formOne.classList.remove('d-none')
    formTwo.classList.add('d-none')
}

signUp.addEventListener('click',showSignUp);
signIn.addEventListener('click',showLogin)
   

    
    function clear (){
        nameInput.value=null
        emailInput.value=null
        passInput.value=null
    }

    signBtn.addEventListener('click',function (){
        var person ={
            name:nameInput.value,
            email:emailInput.value,
            pass:passInput.value
        }

        if(validateName()&& validateEmail()&& validatePass()){
        if (checkEmail(person)){
           
            list.push(person)
            showLogin()

            console.log(list)
            localStorage.setItem('personList', JSON.stringify(list))
            clear()
          
        }
        }       
    }) 


    // check email
function checkEmail(x){
    for(var i =0 ; i<list.length ; i++){
        if (x.email === list[i].email){
            document.querySelector('#email ~p').innerHTML="This email is already exist"
            return false;
        }
    }
    return true;
}
// login logic

loginBtn.addEventListener('click',  function  (){
   
var person ={
    email:email.value,
    pass:pass.value
}
if (checkLogin(person)){
    window.location.href ='home.html'
}
})

// check login 

function checkLogin(x){
    for (var i=0; i<list.length ; i++){
        if(list[i].email === x.email && list[i].pass ===x.pass){
            document.querySelector('#password ~ p').innerHTML=""

            currentUser(list[i].name)
            return true
        }else{
            document.querySelector('#password ~ p').innerHTML="this email or password not found"
        }
    }
    return false
}


// save current user 
function currentUser(x){
    localStorage.setItem('currentUser',x)
}

// validation  --------------------------------------------------------------------------------------------

// validate name
function validateName(){
    var nameRegex = /^[A-Z][a-z]{3,5}$/
    if(nameRegex.test(nameInput.value)){
document.querySelector('#name ~ p').innerHTML=""
return true
    }else{
        document.querySelector('#name ~ p').innerHTML="Please start with capital letter"
        return false
    }
}
// validate email
function validateEmail(){
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(emailRegex.test(emailInput.value)){
document.querySelector('#email ~ p').innerHTML=""
return true
    }else{
        document.querySelector('#email ~ p').innerHTML="Please enter valid email"
        return false
    }
}

	// validate pass
function validatePass(){
    var passRegex = /^(?=[a-z]*[0-9][a-z]*[0-9])^(?=[0-9]*[a-z][0-9]*[a-z])[a-z0-9]{8,}$/
    if(passRegex.test(passInput.value)){
document.querySelector('#pass ~ p').innerHTML=""
return true
    }else{
        document.querySelector('#pass ~ p').innerHTML="Please enter valid password"
        return false
    }
}

nameInput.addEventListener('input',validateName)
emailInput.addEventListener('input',validateEmail)
passInput.addEventListener('input',validatePass)