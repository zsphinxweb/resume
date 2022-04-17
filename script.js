    // Night Mode
var profile = document.querySelector('.profile');
var main = document.querySelector('main');
var sub = document.querySelector('.sub-header');

var m = 1;
profile.addEventListener('click', ()=>{
    if (m %2 != 0){
       main.setAttribute('class', 'active');
    }
    else{
        main.removeAttribute('class','active');
    }
    m+=1;
})

    // Portfolio pops up
var contact = document.querySelector('.contact');
var portfolio = document.querySelector('.portfolio');

var n = 1;
contact.addEventListener('click', ()=>{
    if (n %2 != 0){
       portfolio.style.opacity = 1;
    }
    else{
        portfolio.style.opacity = 0;
    }
    n+=1;
})


var softwares = document.querySelector('.softwares .detail')
text = softwares.innerHTML;
arr = text.split(',');
softwares.innerHTML = '';
arr.forEach( (i) => {
    softwares.innerHTML += i +',';
});

