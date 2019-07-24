import React from 'react';
import { render, shallow } from 'enzyme';
import Icon from '../index';

describe('icon basic feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Icon name="face" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('if not', () => {
    const wrapper = shallow(<Icon name="110119120" />);

    expect(wrapper.isEmptyRender()).toBeTruthy();
  });
});
