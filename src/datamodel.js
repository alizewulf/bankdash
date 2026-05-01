const navListing = document.querySelector('.nav__listing')
import accounts from './assets/disabled/accounts.svg'
import creditcards from './assets/disabled/credit-cards.svg'
import dashboard from './assets/disabled/dashboard.svg'
import investments from './assets/disabled/investments.svg'
import loan from './assets/disabled/loan.svg'
import privileges from './assets/disabled/privileges.svg'
import services from './assets/disabled/service.svg'
import transactions from './assets/disabled/transactions.svg'
import settings from './assets/disabled/settings.svg'

const user = {
  name: "Misha",
};

const routes = [
  { id: "dashboard", label: "Dashboard", path: "/dashboard", svg: dashboard },
  { id: "transactions", label: "Transactions", path: "/transactions", svg: transactions },
  { id: "account", label: "Account", path: "/account", svg: accounts },
  { id: "investments", label: "Investments", path: "/investments", svg: investments },
  { id: "creditcards", label: "Credit Cards", path: "/creditcards", svg: creditcards },
  { id: "loans", label: "Loans", path: "/loans", svg: loan },
  { id: "services", label: "Services", path: "/services", svg: services },
  { id: "privileges", label: "My Privileges", path: "/privileges", svg: privileges },
  { id: "settings", label: "Settings", path: "/settings", svg: settings },
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
