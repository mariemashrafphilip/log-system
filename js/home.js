if(localStorage.getItem('currentUser')){
    document.querySelector('.userName').innerHTML=
    localStorage.getItem('currentUser');
}else {
    window.location.href='index.html';
}

var logOutBtn = document.querySelector('.logout')

function logOut(){
    localStorage.removeItem('currentUser')
}

logOutBtn.addEventListener('click',logOut)