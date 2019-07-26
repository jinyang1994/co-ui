import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Switch from '../index';
import Icon from '../../icon';

describe('switch loading feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Switch />);

    expect(wrapper).toMatchSnapshot();
  });

  it('switching values ​​are not allowed when loading state', () => {
    let value = false;
    const wrapper = mount((
      <Switch
        loading
        value={value}
        onChange={(next) => value = next}
      />
    ));

    wrapper.find('input').simulate('change', { target: { checked: true } });
    expect(value).toBeFalsy();
  });

  it('loading icon when loading state', () => {
    const wrapper = shallow(<Switch loading />);

    expect(wrapper.find(Icon).prop('name')).toBe('loading');
  });
});
