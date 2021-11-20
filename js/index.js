import { loadDestinationPage, getDestinationsList, displayInfoDestination } from './destination.js';
import { loadCrewPage, displayInfoCrew } from './crew.js';
import { loadTechnologyPage, displayInfoTechnology } from './technology.js';
import { loadHomePage } from './home.js';
import { loadHeader } from './header.js';
import randomNumber from './utils.js';

let destinationsList = [];

const addEventListenerOnHeaderLink = () => {
  for(let i=1 ; i<= 4 ; i++) {
        let menu_item = document.getElementById(`link--${i}`);
        menu_item.addEventListener('click',  displayPage)
  }
}

const addEventListenerOnDestinationLink = () => {
  destinationsList = getDestinationsList().then(destinationsList => {
    for(let i in destinationsList) {
      let menu_item = document.getElementById(`destination-item--${destinationsList[i].toLowerCase()}`);
          menu_item.addEventListener('click',  displayInfoDestination)
      }
  });
}

const addEventListenerOnCrewLink = () => {
  for(let i=1 ; i<= 4 ; i++) {
    let menu_item = document.getElementById(`crew-item--${i}`);
    menu_item.addEventListener('click',  displayInfoCrew)
  }
}

const addEventListenerOnTechnologyLink = () => {
  for(let i=1 ; i<= 3 ; i++) {
    let menu_item = document.getElementById(`technology-item--${i}`);
    menu_item.addEventListener('click',  displayInfoTechnology)
  }
}

const addEventListenerOnHomeButton = () => {
    let button = document.getElementById("home--cta");
    button.addEventListener('click',  displayInfoDestinationFromExplore)
}

const initPage = () => {
  const body = document.getElementsByTagName("body")[0];
  body.innerHTML = "";
  body.appendChild(loadHeader());
  addEventListenerOnHeaderLink();
}

const displayInfoDestinationFromExplore = () => {
  initPage();
  const item = destinationsList[randomNumber(0,3)];
  loadDestinationPage(item);
  addEventListenerOnDestinationLink();
}

const displayPage = (event) => {
  initPage();

  let targetLink = event?.target?.id?.substring(6);
  switch(targetLink) {
    case "1" : 
    default:    loadHomePage();
                addEventListenerOnHomeButton();
                break;
    case "2" : loadDestinationPage();
                addEventListenerOnDestinationLink();
                break;
    case "3" : loadCrewPage();
                addEventListenerOnCrewLink();
                break;
    case "4" : loadTechnologyPage();
                addEventListenerOnTechnologyLink();
                break;
  }  
}

displayPage();
