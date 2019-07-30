import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Checkbox from '../index';

describe('checkbox disabled feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Checkbox disabled>Checkbox disabled</Checkbox>);

    expect(wrapper).toMatchSnapshot();
  });

  it('input element has disabled attributes', () => {
    const wrapper = shallow(<Checkbox disabled />);

    expect(wrapper.find('input[disabled]')).not.toBeNull();
  });

  it('set disabled of checkbox', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onChange = jest.fn();
    const wrapper = mount((
      <Checkbox disabled onChange={onChange}>
        Checkbox
      </Checkbox>
    ));

    wrapper.find('input').simulate('change');
    expect(onChange).not.toBeCalled();
  });
});
