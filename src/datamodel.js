const navListing = document.querySelector('.nav__listing')
const burgerButton = document.querySelector('.burger-menu')
const nav = document.querySelector('.nav')
const header = document.querySelector('.header')
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
  { id: "dashboard", label: "Dashboard", svg: dashboard },
  { id: "transactions", label: "Transactions", svg: transactions },
  { id: "account", label: "Account", svg: accounts },
  { id: "investments", label: "Investments", svg: investments },
  { id: "creditcards", label: "Credit Cards", svg: creditcards },
  { id: "loans", label: "Loans", svg: loan },
  { id: "services", label: "Services", svg: services },
  { id: "privileges", label: "My Privileges", svg: privileges },
  { id: "settings", label: "Settings", svg: settings },
];

const appState = {
  currentRoute: "dashboard",
  sidebarOpen: false
}

function renderSidebar() {
    navListing.innerHTML = '';
    
    routes.forEach(route => {
        const li = document.createElement('li');

        if (route.id === appState.currentRoute) {
            li.classList.add('nav__item--active')
        } else {
            li.classList.add('nav__item')
        }

        li.addEventListener('click', () => {
            appState.currentRoute = route.id
            appState.sidebarOpen = false // закрываем меню на мобилке
            renderApp()
        })

        const img = document.createElement('img')
        img.src = route.svg
        img.alt = route.label

        const span = document.createElement('span')
        span.textContent = route.label

        li.appendChild(img)
        li.appendChild(span)
        navListing.appendChild(li)
    })
}

function renderTopbar() {
    const h2 = document.querySelector('.current-page')

    const current = routes.find(r => r.id === appState.currentRoute)
    h2.textContent = current ? current.label : ''
}

function renderSidebarVisibility() {
    if (appState.sidebarOpen) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

function renderBurger() {
    if (appState.sidebarOpen) {
        burgerButton.classList.add('active')
        header.classList.add('header--menu-open')
    } else {
        burgerButton.classList.remove('active')
        header.classList.remove('header--menu-open')
    }
}
function renderApp() {
    renderTopbar()
    renderSidebar()
    renderSidebarVisibility()
    renderBurger()
}

burgerButton.addEventListener('click', (e) => {
    e.stopPropagation()
    appState.sidebarOpen = !appState.sidebarOpen
    renderApp()
})

document.addEventListener('click', (e) => {
    const isClickInsideNav = nav.contains(e.target)
    const isClickBurger = burgerButton.contains(e.target)

    if (!isClickInsideNav && !isClickBurger) {
        if (appState.sidebarOpen) {
            appState.sidebarOpen = false
            renderApp()
        }
    }
})

renderApp()