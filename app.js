// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const selectorBtn = document.getElementById("selector-container");
const sections = document.querySelector(".sections");
const selector = document.querySelector(".selector")

navToggle.addEventListener("click", function() {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
})

// ********** fixed navbar ************
window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (navHeight < scrollHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
})
// ********** smooth scroll ************
const valuesOfSelectors = [
    {
    id:0,
    title: 'Закуски',
    picture: '',
    
    },
    {
    id:1,
    title: 'Салаты',
    picture: '',
    
    },
    {
    id:2,
    title: 'Горячие закуски',
    picture: '',
    
    },
    {
    id:3,
    title: 'Супы',
    picture: '',
    
    },
    {
    id:4,
    title: 'Горячие блюда',
    picture: '',
    
    },
    {
    id:5,
    title: 'Десерты',
    picture: '',
    
    },
    {
    id:6,
    title: 'Коктейльная карта',
    picture: '',
    
    },
    {
    id:7,
    title: 'Коктейльная карта',
    picture: '',
    
    },
    {
    id:8,
    title: 'Вермуты и биттеры',
    picture: '',
    
    },
    {
    id:9,
    title: 'Водка',
    picture: '',
    
    },
    {
    id:10,
    title: 'Джин',
    picture: '',
    
    },
    {
    id:11,
    title: 'Ром',
    picture: '',
    
    },
    {
    id:12,
    title: 'Текила',
    picture: '',
    
    },
    {
    id:13,
    title: 'Купажированный Шотландский Виски',
    picture: '',
    
    },
    {
    id:14,
    title: 'Односолодовый Шотландский Виски',
    picture: '',
    
    },
      
];

let btns = valuesOfSelectors.map((item)=>{
    return `<a href="#${item.title}" class="scroll-link">
                ${item.title}
            </a>`
})

// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
console.log(scrollLinks)
scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        // prevent default
        e.preventDefault();
        // navigation to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        console.log(id);    
        const element = document.getElementById(id);
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const navHeight = navbar.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
        if (!fixedNav) {
            position -= navHeight;
        }
        if (navHeight > 82) {
            position += containerHeight;
        }
        linksContainer.style.height = 0;
        window.scrollTo({
            left: 0,
            top: position
        });
    })
})

selectorBtn.innerHTML = btns.join('');

let section = valuesOfSelectors.map((item)=>{
    return `
        <section class="section" id="${item.title}">
            <div class="title">
                <h2>${item.title}</h2>
            </div>
        </section>  
        `
})

sections.innerHTML = section.join('');

const preloader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader");
})