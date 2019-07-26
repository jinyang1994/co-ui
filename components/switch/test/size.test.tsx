import React from 'react';
import { render } from 'enzyme';
import Switch from '../index';

describe('switch color feature', () => {
  it('renders correctly', () => {
    const wrapper = render((
      <div>
        <Switch size="large" />
        <Switch />
        <Switch size="small" />
      </div>
    ));

    expect(wrapper).toMatchSnapshot();
  });
});
