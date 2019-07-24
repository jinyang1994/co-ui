import React from 'react';
import { shallow, render } from 'enzyme';
import Button from '../index';

describe('button basic feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Button>Test</Button>);

    expect(wrapper).toMatchSnapshot();
  });

  it('click event correctly', () => {
    let num = 0;
    const wrapper = shallow(<Button onClick={() => num = 1}>Click Me</Button>);

    wrapper.simulate('click');
    expect(num).toBe(1);
  });

  it('button html type correctly', () => {
    const wrapper = shallow(<Button htmlType="button">Button</Button>);

    expect(wrapper.is('[type="button"]')).toEqual(true);
    wrapper.setProps({ htmlType: 'submit' });
    expect(wrapper.is('[type="submit"]')).toEqual(true);
    wrapper.setProps({ htmlType: 'reset' });
    expect(wrapper.is('[type="reset"]')).toEqual(true);
  });

  it ('button text correctly', () => {
    const wrapper = shallow(<Button>Hi, user</Button>);
    const wrapper1 = shallow(<Button>Hi, user{1 + 1}</Button>);

    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper1.children()).toHaveLength(1);
  });
});
