let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let btn = document.querySelector('.btnLogin');
let close = document.querySelector('.closed');
console.log(close)
registerLink.addEventListener('click' , ()=> {
    wrapper.classList.add('active');
    
} );
loginLink.addEventListener('click' , ()=> {
    wrapper.classList.remove('active');
} );
btn.addEventListener('click' , ()=> {
    wrapper.classList.add('active-popup');
}
 );

close.addEventListener('click' , () =>{
    wrapper.classList.remove('active-popup');
});