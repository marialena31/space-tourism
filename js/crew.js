import simuFetch from './api.js';

// Crew

const loadTemplateCrew = (item) => {
    const CrewName = document.getElementById('crew-name');
    const CrewRole = document.getElementById('crew-role');
    const CrewBio = document.getElementById('crew-bio');
    const CrewImage = document.getElementById('crew-image');
    const CrewImagePng = document.getElementById('crew-image-png');
    const CrewImageWebp = document.getElementById('crew-image-webp');

    simuFetch("getCrew(item)", item)
    .then(info => {
      CrewName.innerText = info.name;
      CrewRole.innerText = info.role;
      CrewBio.innerText = info.bio;
      CrewImage.src = info.images.png;
      CrewImage.title = info.name;
      CrewImage.alt = info.name;
      CrewImagePng.srcset = info.images.png;
      CrewImagePng.alt = info.name;
      CrewImagePng.title = info.name;
      CrewImageWebp.srcset = info.images.webp;
      CrewImageWebp.alt = info.name;
      CrewImageWebp.title = info.name;
    })
    .catch((error) => {
    console.error(error);
  });
}

// Function for addEventListener on menu
export const displayInfoCrew = (event) => {
    let elt = event.target;
    elt = (elt.id === "") ? elt.parentElement : elt;
    const item = elt.id.substring(11)-1;
    loadTemplateCrew(item);
}

export const loadCrewPage = () => {
    const bodyCrew = document.getElementsByTagName("body")[0];
    const sectionCrewNode = document.createElement("section");
    const pictureNode = document.createElement("picture");
    
    sectionCrewNode.innerHTML = `
    <h5 class="heading5 crew__subtitle"><span class="heading5 dark">02</span>Meet your crew</h5>
      <div class="slider crew__slider">
        <div class="slide slide--1">
          <h4 class="heading4 dark-light crew__subtitle2" id="crew-role"></h4>
          <h3 class="heading3 crew__title" id="crew-name"></h3>
          <p class="paragraph crew__text" id="crew-bio">
          </p>
        </div>
        <div class="dots crew__dots">
          <div class="dots__dot crew__dot" id="crew-item--1"></div>
          <div class="dots__dot crew__dot" id="crew-item--2"></div>
          <div class="dots__dot crew__dot" id="crew-item--3"></div>
          <div class="dots__dot crew__dot" id="crew-item--4"></div>
        </div>
      </div>
    `;
  
    pictureNode.innerHTML = `
      <source type="image/webp" id="crew-image-webp">
      <source type="image/png" id="crew-image-png">
      <img  id="crew-image">
    `;
    
      bodyCrew.classList.remove(...bodyCrew.classList);
      bodyCrew.classList.add("crew__container");
      bodyCrew.setAttribute("id", "crew");
      
      bodyCrew.appendChild(sectionCrewNode);
      bodyCrew.appendChild(pictureNode);
      
      sectionCrewNode.classList.add("box");
      sectionCrewNode.classList.add("crew__card");
      pictureNode.classList.add("crew__img");
    
      loadTemplateCrew(0);
  }