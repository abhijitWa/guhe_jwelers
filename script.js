const menu = document.querySelector('#menu')
const nav = document.querySelector('#full-screen-nav')
const close = document.querySelector('#close')

console.log(nav);

menu.addEventListener('click', function(){
    nav.style.right = '-1%'
})

close.addEventListener('click',function(){
    nav.style.right = '-90%'
})
console.log(menu);