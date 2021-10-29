function toggleMenu() {
    let menuStyle = document.getElementsByClassName('menu')[0].style;
    let contactStyle = document.getElementsByClassName('contact')[0].style;

    if (menuStyle.display === 'none') {
        menuStyle.setProperty ('display', 'block');
        contactStyle.setProperty('display', 'block');
    } else {
        menuStyle.setProperty ('display', 'none');
        contactStyle.setProperty('display', 'none');
    }
}

let toggle = document.getElementById('toggle');

toggle.onclick = toggleMenu;


