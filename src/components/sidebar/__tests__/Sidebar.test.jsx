import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../Sidebar'

describe('<Sidebar />', () => {
  it('Get snapshot', () => {
    const wrappedComponent = shallow(<Sidebar />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});