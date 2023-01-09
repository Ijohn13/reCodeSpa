const showSubmenu = document.getElementById('showSubmenu');
const containerSubmenu = document.getElementById('submenu');
const iconMenu = document.getElementById('icon-menu');
const submenuLogo = document.getElementById('submenu-logo');

showSubmenu.addEventListener('mouseover', () => {
    containerSubmenu.style.display = 'flex';
    showSubmenu.addEventListener('mouseout', () => {
        containerSubmenu.style.display = 'none';
    })
})

iconMenu.addEventListener('click', () => {
    submenuLogo.classList.toggle('show_menu');
})


// iconMenu.addEventListener('click', () => {
//     submenuLogo.style.display = 'none';
// })