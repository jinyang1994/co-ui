import React from 'react';
import { mount, render } from 'enzyme';
import Button from '../index';

describe('button disabled feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Button disabled>Disabled</Button>);

    expect(wrapper).toMatchSnapshot();
  });

  it('click event correctly', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onClick = jest.fn();
    const wrapper = mount((
      <Button
        disabled
        onClick={onClick}
      >
        Click Me
      </Button>
    ), {
      attachTo: container,
    });

    wrapper.simulate('click');
    expect(onClick).not.toBeCalled();
  });
});
