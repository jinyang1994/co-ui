import React from 'react';
import { mount, render } from 'enzyme';
import Switch from '../index';

describe('switch basic feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Switch />);

    expect(wrapper).toMatchSnapshot();
  });

  it('change event correctly', () => {
    let value = false;
    const wrapper = mount((
      <Switch
        value={value}
        onChange={(next) => value = next}
      />
    ));

    wrapper.find('input').simulate('change', { target: { checked: true } });
    expect(value).toBeTruthy();
  });
});
