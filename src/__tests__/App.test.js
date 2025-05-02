import React from 'react';
import { configure, mount } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

import App from '../App';

test("<App /> calls componentDidMount and adds a Timer", () => {
  const didMountSpy = spy(App.prototype, 'componentDidMount');
  const appWrapper = mount(<App />);

  expect(didMountSpy.calledOnce).toBe(true); 
  expect(appWrapper.find('Timer').length).toBe(1); 
  expect(appWrapper.state('timerIDs').length).toBe(1); 

  appWrapper.unmount();
});
