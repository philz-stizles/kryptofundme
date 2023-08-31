import React from 'react'
import FundCard from './FundCard'

describe('<FundCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FundCard />)
  })
})