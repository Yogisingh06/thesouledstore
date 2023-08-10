


// mobile menu start
let men1 = document.getElementById('men1');
let women1 = document.getElementById('women1');
let kids1 = document.getElementById('kids1');
let menuuu = document.querySelector('menuuu')

men1.addEventListener('click',() =>{
men1.classList.add('menuuu')
women1.classList.remove('menuuu')
kids1.classList.remove('menuuu')
})
women1.addEventListener('click',()=>{
women1.classList.add('menuuu')
men1.classList.remove('menuuu')
kids1.classList.remove('menuuu')
})

kids1.addEventListener('click',()=>{
kids1.classList.add('menuuu')
women1.classList.remove('menuuu')
men1.classList.remove('menuuu')
})
//  mobile end

// new menu start

let me1 = document.getElementById('me1');
let wo1 = document.getElementById('wo1');
let ki1 = document.getElementById('ki1');
let mewoki = document.querySelector('mewoki');

me1.addEventListener('click',()=>{
me1.classList.add('mewoki')
wo1.classList.remove('mewoki')
ki1.classList.remove('mewoki')
})

wo1.addEventListener('click',()=>{
wo1.classList.add('mewoki')
me1.classList.remove('mewoki')
ki1.classList.remove('mewoki')

})

ki1.addEventListener('click',()=>{
ki1.classList.add('mewoki')
me1.classList.remove('mewoki')
wo1.classList.remove('mewoki')
})
// new menu end

/* fixed header */

$(document).ready(function(){


    $(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('nav').addClass('fixed-header');
        $('nav .logo').addClass('sticky-logo');
        $('.navbar-brand').removeClass('navbar-nav');
        $('.navbar-brand').addClass('navbar-logo'); 
    }
    else {
        $('nav').removeClass('fixed-header','nav-logo');
        $('nav .logo').removeClass('sticky-logo');  
        $('.navbar-brand').removeClass('navbar-logo');    
       

    }
});




});
/* fixed header */