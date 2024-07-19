// MOBIL RESPONSIVE
const menuIcon = document.getElementById('menu-icon');
const mobileDiv = document.getElementById('mobil-menu-bar');

function openMenuBar(){
mobileDiv.style.display = "flex"
menuIcon.style.display = "none"   
}

function closeMenuBar(){   
mobileDiv.style.display = "none"
menuIcon.style.display = "flex"
}