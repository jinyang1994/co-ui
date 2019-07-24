import React from 'react';
import { shallow, render } from 'enzyme';
import Button from '../index';

describe('button group feature', () => {
  it('renders correctly', () => {
    const wrapper = render((
      <Button.Group>
        <Button>Prev</Button>
        <Button>Next</Button>
      </Button.Group>
    ));

    expect(wrapper).toMatchSnapshot();
  });

  it('the type of child can only be button', () => {
    const wrapper = shallow((
      <Button.Group>
        <Button>Prev</Button>
        <Button>Next</Button>
        <div>this is div node</div>
      </Button.Group>
    ));
    const children = wrapper.children();

    expect(children.someWhere((child) => child.is(Button))).toBeTruthy();
    expect(children).toHaveLength(2);
  });
});
