export const loadHeader = () => {
    const headerNode = document.createElement("header");
    headerNode.innerHTML = `
          <nav class="navbar">
            <div class="navbar__logo-box">
              <img src="./assets/shared/logo.svg" alt="logo" class="navbar__logo">
            </div>
            <div class="navbar__line"></div>
            <div class="navbar__background">
              <ul class="navbar__menu">
                <li class="navbar__menu__item">
                  <a href="" class="navtext navbar__menu__item__link" id="link--1">
                    <span class="navtext bold">00</span>Home
                  </a>
                </li>
                <li class="navbar__menu__item">
                  <a href="" class="navtext navbar__menu__item__link" id="link--2">
                    <span class="navtext bold">01</span>Destination
                  </a>
                </li>
                <li class="navbar__menu__item">
                  <a href="" class="navtext navbar__menu__item__link" id="link--3">
                    <span class="navtext bold">02</span>Crew
                  </a>
                </li>
                <li class="navbar__menu__item">
                  <a href="" class="navtext navbar__menu__item__link" id="link--4">
                    <span class="navtext bold">03</span>Technology
                  </a>
                </li>
              </ul>
            </div>
          </nav>
      `;
    headerNode.classList.add("header");  
    return headerNode;
}
