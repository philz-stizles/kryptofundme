import React from 'react'
import ScrollButton from './scroll-button'

describe('<ScrollButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ScrollButton />)
  })
})