//hamburger button

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//current date

const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

//product array

const products = [
    {
        id: "jb-1",
        name: "Jazz Sauce Pan",
    },
    {
        id: "jb-2",
        name: "Jazz Utencils",
    },
    {
        id: "jb-3",
        name: "Festive Cookies",
    },
    {
        id: "jb-4",
        name: "Holiday Bread",
    }
];

products.forEach((product) => {
    const selection = document.getElementById('productName');
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selection.appendChild(option);
})