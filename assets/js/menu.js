// operation menu and close 
const openMenu = document.querySelector('.ham-icon');
const closeMenu = document.querySelector('.close-icon');

const overlay = document.querySelector('.overlay');

openMenu.addEventListener('click', () => {
    overlay.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    overlay.style.display = 'none';
});
// operation menu and close 

// operation  when links clicked in the menu
// const overlayTabs = document.querySelector('.tabs');
const newtabs = document.getElementsByClassName('tab');
console.log(newtabs);

// newtabs.forEach(element => {
//     element.addEventListener('click', () => {
//         overlay.style.display = 'none';
//     });
// });

for(let i=0;i<newtabs.length;i++){
    newtabs[i].addEventListener('click', () => {
        overlay.style.display = 'none';
    });
}

// overlayTabs.addEventListener('click', () => {
//     overlay.style.width = '0vw';
// });

