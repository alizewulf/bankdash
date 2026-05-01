const navListing = document.querySelector('.nav__listing')

const user = {
  name: "Misha",
};

const routes = [
  { id: "dashboard", label: "Dashboard", path: "/dashboard", svg: "src/assets/icons/disabled/dashboard.svg" },
  { id: "transactions", label: "Transactions", path: "/transactions", svg: "src/assets/icons/disabled/transactions.svg" },
  { id: "account", label: "Account", path: "/account", svg: "src/assets/icons/disabled/accounts.svg"},
  { id: "investments", label: "Investments", path: "/investments", svg: "src/assets/icons/disabled/investments.svg" },
  { id: "creditcards", label: "Credit Cards", path: "/creditcards", svg: "src/assets/icons/disabled/credit-cards.svg" },
  { id: "loans", label: "Loans", path: "/loans", svg: "src/assets/icons/disabled/loan.svg"},
  { id: "services", label: "Services", path: "/services", svg: "src/assets/icons/disabled/service.svg"},
  { id: "privileges", label: "My Privileges", path: "/privileges", svg: "src/assets/icons/disabled/privileges.svg"},
  { id: "settings", label: "Settings", path: "/settings", svg: "src/assets/icons/disabled/settings.svg"},
];

const appState = {
  currentRoute: "dashboard",
  sidebarOpen: false
}

function renderSidebar() {
    navListing.innerHTML = ``;
    
    routes.forEach(route => {
        const li = document.createElement('li');
        if (route.id === appState.currentRoute) {
            li.classList.add('nav__item--active')
        } else {
            li.classList.add('nav__item');
        }

        li.addEventListener('click', () => {
            appState.currentRoute = route.id;
            renderSidebar();
        });

        const img = document.createElement('img');
        img.src = route.svg;
        img.alt = route.label;
        li.appendChild(img);

        const span = document.createElement('span');
        span.textContent = route.label;
        li.appendChild(span);

        navListing.appendChild(li);
    });
}
renderSidebar()