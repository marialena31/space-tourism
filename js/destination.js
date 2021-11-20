import simuFetch from './api.js';

export const getDestinationsList = () => simuFetch("getDestinationsList")
  .then(data => {
    return data;
  })
  .catch((error) => {
  console.error(error);
});

// Destination

const loadTemplateDestination = (item) => {
    const DestinationName = document.getElementById('destination-name');
    const DestinationDescription = document.getElementById('destination-description');
    const DestinationDistance = document.getElementById('destination-distance');
    const DestinationTravel = document.getElementById('destination-travel');
    const DestinationImage = document.getElementById('destination-image');
    const DestinationImagePng = document.getElementById('destination-image-png');
    const DestinationImageWebp = document.getElementById('destination-image-webp');

    simuFetch("getDestination(item)", item)
    .then(info => {
      DestinationName.innerText = info.name;
      DestinationDescription.innerText = info.description;
      DestinationDistance.innerText = info.distance;
      DestinationTravel.innerText = info.travel;
      DestinationImage.src = info.images.png;
      DestinationImage.title = info.name;
      DestinationImage.alt = info.name;
      DestinationImagePng.srcset = info.images.png;
      DestinationImagePng.alt = info.name;
      DestinationImagePng.title = info.name;
      DestinationImageWebp.srcset = info.images.webp;
      DestinationImageWebp.alt = info.name;
      DestinationImageWebp.title = info.name;
    })
    .catch((error) => {
    console.error(error);
  });
}

// Function for addEventListener on menu
export const displayInfoDestination = (event) => {
    let elt = event.target;
    // click not on link with id we get id on parent
    elt = (elt.id === "") ? elt.parentElement : elt;
    const item = elt.id.substring(18);
    loadTemplateDestination(item);
}

export const loadDestinationPage = (item = 'moon') => {
    const bodyDestination = document.getElementsByTagName("body")[0];
    const divNode = document.createElement("div");
    const sectionDestinationNode = document.createElement("section");
    
    divNode.innerHTML = `
      <h5 class="heading5 destination__subtitle"><span class="heading5 dark">01</span>Pick your destination</h5>
      <picture>
        <source type="image/webp" id="destination-image-webp">
        <source type="image/png" id="destination-image-png">
        <img id="destination-image">
      </picture>
    `;
    
    sectionDestinationNode.innerHTML = `
    <ul class="destination__navbar__menu">
      <li class="destination__navbar__menu__item" id="destination-item--moon">
        <a href="#" class="navtext destination__navbar__menu__item__link">
          Moon
        </a>
      </li>
      <li class="destination__navbar__menu__item" id="destination-item--mars">
        <a href="#"class="navtext destination__navbar__menu__item__link">
          Mars
        </a>
      </li>
      <li class="destination__navbar__menu__item" id="destination-item--europa">
        <a href="#"class="navtext destination__navbar__menu__item__link">
          Europa
        </a>
      </li>
      <li class="destination__navbar__menu__item" id="destination-item--titan">
        <a href="#"class="navtext destination__navbar__menu__item__link">
          Titan
        </a>
      </li>
    </ul>
    <h2 class="heading2 destination__title" id="destination-name"></h2>
    <p class="paragraph destination__text" id="destination-description">
    </p>
    <div class="destination__line"></div>
    <div class="destination__tab">
      <div class="destination__distance">
        <div class="subheading2 destination__tab__label">Avg. distance</div>
        <div class="subheading1 destination__tab__value" id="destination-distance"></div>
      </div>
      <div class="destination__time">
        <div class="subheading2 destination__tab__label">Est. travel time</div>
        <div class="subheading1 destination__tab__value" id="destination-travel"></div>
      </div>
    </div>
    `;
  
      bodyDestination.classList.remove(...bodyDestination.classList);
      bodyDestination.classList.add("destination__container");
      bodyDestination.setAttribute("id", "destination");
      
      bodyDestination.appendChild(divNode);
      bodyDestination.appendChild(sectionDestinationNode);
      
      divNode.classList.add("destination__illustration");
      sectionDestinationNode.classList.add("box");
      sectionDestinationNode.classList.add("destination__card");
    
      loadTemplateDestination(item);
  }
