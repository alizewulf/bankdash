import { routes, appState } from "./datamodel.js";
import { userCards } from "./cards.js";

const navListing = document.querySelector(".nav__listing");
const burgerButton = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const main = document.querySelector("main");

function renderSidebar() {
  navListing.innerHTML = "";

  routes.forEach((route) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");

    span.textContent = route.label;
    img.alt = route.label;

    const isActive = route.id === appState.currentRoute;

    li.classList.add(isActive ? "nav__item--active" : "nav__item");
    img.src = isActive ? route.activeIcon : route.disabledIcon;

    li.append(img, span);

    li.addEventListener("click", () => {
      appState.currentRoute = route.id;
      appState.sidebarOpen = false;
      renderApp();
    });

    navListing.appendChild(li);
  });
}

function renderTopbar() {
  const title = document.querySelector(".current-page");
  const current = routes.find((r) => r.id === appState.currentRoute);

  title.textContent = current ? current.label : "";
}

function renderSidebarState() {
  nav.classList.toggle("active", appState.sidebarOpen);
  burgerButton.classList.toggle("active", appState.sidebarOpen);
  header.classList.toggle("header--menu-open", appState.sidebarOpen);
}

function createDashboardHeader() {
  const header = document.createElement("div");
  header.classList.add("cards-content-header");

  const title = document.createElement("p");
  title.classList.add("cards__text");
  title.textContent = "My Cards";

  const button = document.createElement("button");
  button.classList.add("cards__button");
  button.textContent = "See All";

  header.append(title, button);

  return header;
}

function createCards() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("cards-wrapper");

  userCards.forEach((cardData) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card__content">
        <div class="card__balance-content">
          <div class="card__balance">
            <span class="balance__title">Balance:</span>
            <span class="balance__amount">$${cardData.balance}</span>
          </div>
          <img src="src/assets/Chip_Card.png" alt="Chip Card">
        </div>

        <div class="card__info">
          <div class="card__holder-content">
            <span class="holder__title">Card Holder</span>
            <span class="holder__content">${cardData.holder}</span>
          </div>
          <div class="card-valid">
            <span class="holder__title">Valid thru</span>
            <span class="holder__content">${cardData.valid}</span>
          </div>
        </div>

        <div class="user-card">
          <span class="user-card__number">${cardData.number}</span>
          <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fill="white" fill-opacity="0.5"/>
            <circle cx="29" cy="15" r="15" fill="white" fill-opacity="0.5"/>
          </svg>
        </div>
      </div>
    `;

    wrapper.appendChild(card);
  });

  return wrapper;
}

function renderDashboard() {
  main.innerHTML = "";

  const section = document.createElement("section");
  section.classList.add("cards-section");

  section.append(createDashboardHeader(), createCards());

  main.appendChild(section);
}

function renderTransactions() {
  main.innerHTML = "";

  const h = document.createElement("h2");
  h.textContent = "Transactions page";

  main.appendChild(h);
}

function renderMain() {
  const route = appState.currentRoute;

  if (route === "dashboard") {
    renderDashboard();
    return;
  }

  if (route === "transactions") {
    renderTransactions();
  }
}

function renderApp() {
  renderSidebar();
  renderTopbar();
  renderSidebarState();
  renderMain();
}

burgerButton.addEventListener("click", (e) => {
  e.stopPropagation();
  appState.sidebarOpen = !appState.sidebarOpen;
  renderApp();
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !burgerButton.contains(e.target)) {
    appState.sidebarOpen = false;
    renderApp();
  }
});

renderApp();
