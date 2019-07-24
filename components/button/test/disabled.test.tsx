import React from 'react';
import { mount, render } from 'enzyme';
import Button from '../index';

describe('button disabled feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Button disabled>Disabled</Button>);

    expect(wrapper).toMatchSnapshot();
  });

  it('click event correctly', () => {
    let num = 0;
    const wrapper = mount(<Button disabled onClick={() => num = 1}>Click Me</Button>);

    wrapper.simulate('click');
    expect(num).toBe(0);
    wrapper.setProps({ disabled: false });
    wrapper.simulate('click');
    expect(num).toBe(1);
  });
});
