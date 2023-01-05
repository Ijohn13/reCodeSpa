const showSubmenu = document.getElementById('showSubmenu');
const containerSubmenu = document.getElementById('submenu');

showSubmenu.addEventListener('mouseover', () => {
    containerSubmenu.style.display = 'flex';
    showSubmenu.addEventListener('mouseout', () => {
        containerSubmenu.style.display = 'none';
    })
})