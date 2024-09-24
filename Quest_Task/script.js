const dropBtn = document.getElementById('open-dropdown');
let dropMenu = document.getElementById('drop-menu')
const menuBtn = document.getElementById('menuBtn');
let nav = document.querySelector('nav');
// let dialog = document.querySelector('dialog')

dropBtn.addEventListener("click",openDropdown);
menuBtn.addEventListener("click",openMenu);


function openMenu(){
nav.classList.toggle('isOpen')
}


function openDropdown(e){
    // console.log(e.target)
    e.target.classList.toggle('rotate')
    dropMenu.classList.toggle('active')
}


// let start = 5;
// let end = 3;

// setTimeout(() => {
//     // console.log('first')
//     dialog.showModal();
//     setTimeout(() => {
//         dialog.close();
//     },end * 1000);
// },start * 1000);



// console.log(start * 1000)

