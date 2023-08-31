import React from 'react';
import FeatureCard from './FeatureCard';

describe('<FeatureCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FeatureCard />);
  });
});
