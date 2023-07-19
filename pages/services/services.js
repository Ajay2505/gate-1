const menuItems = document.querySelectorAll('li.menu_itself');
let timeoutIds = [];

function showMenu() {
clearTimeout(timeoutIds[this.dataset.menuIndex]);

// Hide other menu items after a slight delay
timeoutIds.forEach((timeoutId, index) => {
    if (index !== parseInt(this.dataset.menuIndex)) {
    clearTimeout(timeoutId);
    menuItems[index].classList.remove('show');
    }
});

this.classList.add('show');
}

function hideMenu() {
const menuIndex = this.dataset.menuIndex;
clearTimeout(timeoutIds[menuIndex]);

timeoutIds[menuIndex] = setTimeout(() => {
    this.classList.remove('show');
}, 300);
}

menuItems.forEach((menuItem, index) => {
menuItem.dataset.menuIndex = index;
menuItem.addEventListener('mouseenter', showMenu);
menuItem.addEventListener('mouseleave', hideMenu);
});