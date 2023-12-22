import React from 'react';
import { render } from '@testing-library/react';
import { BasicApolloProvider } from './apollo-provider.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicApolloProvider />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
