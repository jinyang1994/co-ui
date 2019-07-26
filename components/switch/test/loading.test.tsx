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
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onChange = jest.fn();
    const wrapper = mount((
      <Switch loading onChange={onChange} />
    ), { attachTo: container });

    wrapper.find('input').simulate('change');
    expect(onChange).not.toBeCalled();
  });

  it('loading icon when loading state', () => {
    const wrapper = shallow(<Switch loading />);

    expect(wrapper.find(Icon).prop('name')).toBe('loading');
  });
});
