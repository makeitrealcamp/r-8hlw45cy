import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Setup from './Setup';

it('renders App without crashing', () => {
  shallow(<App />);
});

it('renders the checkbox', () => {
  const wrapper = shallow(<App />);
  const checkbox = wrapper.find('input[type="checkbox"]');
  expect(checkbox.length).toBe(1);
  expect(checkbox.props().checked).toBeFalsy();
});

it("doesn't renders the paragraph", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('p').length).toBe(0);
});

it("shows the paragraph when checkbox is checked", () => {
  const wrapper = shallow(<App />);
  wrapper.find('input[type="checkbox"]').simulate('click');
  wrapper.find('input[type="checkbox"]').simulate('change', { target: { checked: true } });
  expect(wrapper.find('p').length).toBe(1);
});
