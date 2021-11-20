import simuFetch from './api.js';

// Technology

const loadTemplateTechnology = (item) => {
    const TechnologyName = document.getElementById('technology-name');
    const TechnologyDescription = document.getElementById('technology-description');
    const TechnologyImage = document.getElementById('technology-image');

    simuFetch("getTechnology(item)", item)
    .then(info => {
        TechnologyName.innerText = info.name;
        TechnologyDescription.innerText = info.description;
        TechnologyImage.src = info.images.portrait;
        TechnologyImage.alt = info.name;
        TechnologyImage.title = info.name;
    })
    .catch((error) => {
    console.error(error);
    });
}

export const displayInfoTechnology = (event) => {
    let elt = event.target;
    if(elt.id === "") {
        elt = elt.parentElement;
    }
    const item = parseInt(elt.id.substring(17))-1;
    
    loadTemplateTechnology(item);
}

export const loadTechnologyPage = () => {
    const bodyTechnology = document.getElementsByTagName("body")[0];
    const sectionTechnologyNode = document.createElement("section");
    const imgNode = document.createElement("img");
    
    sectionTechnologyNode.innerHTML = `
        <h5 class="heading5 technology__subtitle"><span class="heading5 dark">03</span>Space launch 101</h5>
        <ul class="technology__navbar__menu">
        <li class="technology__navbar__menu__item" id="technology-item--1">
            <a href="#" class="heading4 technology__navbar__menu__item__link">
            1
            </a>
        </li>
        <li class="technology__navbar__menu__item" id="technology-item--2">
            <a href="#" class="heading4 technology__navbar__menu__item__link">
            2
            </a>
        </li>
        <li class="technology__navbar__menu__item" id="technology-item--3">
            <a href="#" class="heading4 technology__navbar__menu__item__link">
            3
            </a>
        </li>
        </ul>
        <div class="slider technology__slider">
        <div class="slide">
            <h4 class="navtext technology__subtitle2">The terminology...</h4>
            <h3 class="heading3 technology__title" id="technology-name"></h3>
            <p class="paragraph technology__text" id="technology-description">
            </p>
        </div>
        </div>
    `;
  
    bodyTechnology.classList.remove(...bodyTechnology.classList);
    bodyTechnology.classList.add("destination__container");
    bodyTechnology.setAttribute("id", "destination");
      
    bodyTechnology.appendChild(sectionTechnologyNode);
    bodyTechnology.appendChild(imgNode);
      
    sectionTechnologyNode.classList.add("box");
    sectionTechnologyNode.classList.add("technology__card");
    imgNode.setAttribute("src", "");
    imgNode.setAttribute("id", "technology-image");
    imgNode.classList.add("technology__img");
    
    loadTemplateTechnology(0);
}