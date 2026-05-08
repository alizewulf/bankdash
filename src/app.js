import { routes, appState } from "./datamodel.js";

const navListing = document.querySelector(".nav__listing");
const burgerButton = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const main = document.querySelector("main");

const overview = [
  { id: "cards", label: "My Cards" },
  { id: "showAll", label: "Show All" },
];

function renderSidebar() {
  navListing.innerHTML = "";

  routes.forEach((route) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = route.disabledIcon;
    img.alt = route.label;
    const span = document.createElement("span");
    span.textContent = route.label;
    li.appendChild(img);
    li.appendChild(span);
    navListing.appendChild(li);
    if (route.id === appState.currentRoute) {
      li.classList.add("nav__item--active");
      img.src = route.activeIcon
    } else {
      li.classList.add("nav__item");
    }
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
  const current = routes.find((r) => r.id === appState.currentRoute)
  title.textContent = current ? current.label : "";
}

function renderSidebarState() {
  nav.classList.toggle("active", appState.sidebarOpen);
  burgerButton.classList.toggle("active", appState.sidebarOpen);
  header.classList.toggle("header--menu-open", appState.sidebarOpen);
}

function renderMain() {
  main.innerHTML = "";
  const route = appState.currentRoute;
  if (route === "dashboard") {
    const div = document.createElement("div");
    overview.forEach((item) => {
      if (item.id === "cards") {
        const p = document.createElement("p");
        p.textContent = item.label;
        p.classList.add('cards__text')
        div.appendChild(p);
      }
      if (item.id === "showAll") {
        const button = document.createElement("button");
        button.textContent = item.label;
        button.classList.add('cards__button')
        div.appendChild(button);
      }
    });
    div.classList.add('cards-content')
    main.appendChild(div);
  }

  if (route === "transactions") {
    const h = document.createElement("h2");
    h.textContent = "Transactions page";
    main.appendChild(h);
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
