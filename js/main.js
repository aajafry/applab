
/*
navbar-section
*/


let nabBar =document.querySelectorAll('.nav-link');
let nabCollaspe = document.querySelector('.navbar-collapse.collapse');

nabBar.forEach(function(a){
    a.addEventListener('click',function(){
        nabCollaspe.classList.remove("show");
    })
})