import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Switch from '../index';

describe('switch disabled feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Switch disabled />);

    expect(wrapper).toMatchSnapshot();
  });

  it('input element has disabled attributes', () => {
    const wrapper = shallow(<Switch disabled />);

    expect(wrapper.find('input[disabled]')).not.toBeNull();
  });

  it('set disabled of switch', () => {
    let value = false;
    const wrapper = mount((
      <Switch
        disabled
        value={value}
        onChange={(next) => value = next}
      />
    ));

    wrapper.find('input').simulate('change', { target: { checked: true } });
    expect(value).toBeFalsy();
  });
});
