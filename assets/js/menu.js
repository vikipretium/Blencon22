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

const newtabs = document.getElementsByClassName('tab');

for (let i = 0; i < newtabs.length; i += 1) {
  newtabs[i].addEventListener('click', () => {
    overlay.style.display = 'none';
  });
}
