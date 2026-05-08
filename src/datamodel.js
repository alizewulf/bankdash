import overview from './assets/disabled/dashboard.svg'
import transactions from './assets/disabled/transactions.svg'
import accounts from './assets/disabled/accounts.svg'
import investments from './assets/disabled/investments.svg'
import creditcard from './assets/disabled/credit-cards.svg'
import loan from './assets/disabled/loan.svg'
import service from './assets/disabled/service.svg'
import privileges from './assets/disabled/privileges.svg'
import settings from './assets/disabled/settings.svg'

export const routes = [
{ id: "dashboard", label: "Overview", svg: overview},
{ id: "transactions", label: "Transactions", svg: transactions},
{ id: "account", label: "Account", svg: accounts },
{ id: "investments", label: "Investments", svg: investments },
{ id: "creditcards", label: "Credit Cards", svg: creditcard },
{ id: "loans", label: "Loans", svg: loan },
{ id: "services", label: "Services", svg: service },
{ id: "privileges", label: "My Privileges", svg: privileges },
{ id: "settings", label: "Settings", svg: settings }
]

export const appState = {
currentRoute: "dashboard",
sidebarOpen: false
}