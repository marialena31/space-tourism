export const loadHomePage = () => {
    const bodyHome = document.getElementsByTagName("body")[0];
    const sectionHomeNode = document.createElement("section");
    const buttonHomeNode = document.createElement("a");
    
    sectionHomeNode.innerHTML = `
        <h5 class="heading5 home__subtitle">So, you want to travel to</h5>
        <h1 class="heading1 home__title">Space</h1>
        <p class="paragraph home__text">Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
    `;
    
    buttonHomeNode.innerHTML = `<span>Explore</span>`;
    
    bodyHome.classList.add("home__container");
    bodyHome.classList.add("load");
    bodyHome.setAttribute("id", "home");
  
    bodyHome.appendChild(sectionHomeNode);
    bodyHome.appendChild(buttonHomeNode);
    
    sectionHomeNode.classList.add("box");
    sectionHomeNode.classList.add("home__card");
    buttonHomeNode.classList.add("btn");
    buttonHomeNode.classList.add("home__cta");
    buttonHomeNode.setAttribute("href", "#");
    buttonHomeNode.setAttribute("id", "home--cta");
  }
  