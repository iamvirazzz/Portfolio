const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const icon = menuToggle.querySelector("i");
const links = navLinks.querySelectorAll("a"); // Saare links select kiye

// Menu band karne ka ek common function 
const closeMenu = () => {
    navLinks.classList.remove("active");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
    document.body.style.overflow = ''; // Piche ka scroll wapas chalu kar dega
};

// 1. Hamburger button par click karne ka logic
menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // Ye browser ko batata hai ki click sirf button par hua hai, bahar nahi
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
        document.body.style.overflow = 'hidden'; // Piche wali site ka scroll band kar dega
    } else {
        closeMenu();
    }
});

// 2. Kisi bhi link par click karne par menu auto-close ho jaye
links.forEach(link => {
    link.addEventListener("click", closeMenu);
});

// 3. Screen par kahin bhi bahar click karne par menu band ho jaye
document.addEventListener("click", (e) => {
    // Agar menu khula hai AUR click navLinks ya menuToggle ke bahar hua hai
    if(navLinks.classList.contains("active") && !navLinks.contains(e.target) && !menuToggle.contains(e.target)){
        closeMenu();
    }
});