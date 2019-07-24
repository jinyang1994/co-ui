import React from 'react';
import { render } from 'enzyme';
import Button from '../index';

describe('button fill feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Button fill>Button</Button>);

    expect(wrapper).toMatchSnapshot();
  });
});
