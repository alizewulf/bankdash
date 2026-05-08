import overviewDisabled from './assets/icons/disabled/dashboard.svg'
import overviewActive from './assets/icons/active/dashboard.svg'

import transactionsDisabled from './assets/icons/disabled/transactions.svg'
import transactionsActive from './assets/icons/active/transactions.svg'

import accountsDisabled from './assets/icons/disabled/accounts.svg'
import accountsActive from './assets/icons/active/accounts.svg'

import investmentsDisabled from './assets/icons/disabled/investments.svg'
import investmentsActive from './assets/icons/active/investments.svg'

import creditCardsDisabled from './assets/icons/disabled/credit-cards.svg'
import creditCardsActive from './assets/icons/active/credit-cards.svg'

import loansDisabled from './assets/icons/disabled/loan.svg'
import loansActive from './assets/icons/active/loan.svg'

import servicesDisabled from './assets/icons/disabled/service.svg'
import servicesActive from './assets/icons/active/service.svg'

import privilegesDisabled from './assets/icons/disabled/privileges.svg'
import privilegesActive from './assets/icons/disabled/privileges.svg'

import settingsDisabled from './assets/icons/disabled/settings.svg'
import settingsActive from './assets/icons/active/settings.svg'

export const routes = [
  {
    id: 'dashboard',
    label: 'Overview',
    disabledIcon: overviewDisabled,
    activeIcon: overviewActive,
  },
  {
    id: 'transactions',
    label: 'Transactions',
    disabledIcon: transactionsDisabled,
    activeIcon: transactionsActive,
  },
  {
    id: 'account',
    label: 'Account',
    disabledIcon: accountsDisabled,
    activeIcon: accountsActive,
  },
  {
    id: 'investments',
    label: 'Investments',
    disabledIcon: investmentsDisabled,
    activeIcon: investmentsActive,
  },
  {
    id: 'creditcards',
    label: 'Credit Cards',
    disabledIcon: creditCardsDisabled,
    activeIcon: creditCardsActive,
  },
  {
    id: 'loans',
    label: 'Loans',
    disabledIcon: loansDisabled,
    activeIcon: loansActive,
  },
  {
    id: 'services',
    label: 'Services',
    disabledIcon: servicesDisabled,
    activeIcon: servicesActive,
  },
  {
    id: 'privileges',
    label: 'My Privileges',
    disabledIcon: privilegesDisabled,
    activeIcon: privilegesActive,
  },
  {
    id: 'settings',
    label: 'Settings',
    disabledIcon: settingsDisabled,
    activeIcon: settingsActive,
  },
]

export const appState = {
  currentRoute: 'dashboard',
  sidebarOpen: false,
}