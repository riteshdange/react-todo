import React from 'react';
import App from '../App'
import renderer from 'react-test-renderer';

test('Test the App Snapshot',()=>{
    var render = renderer.create(<App />).toJSON();
    expect(renderer).toMatchSnapshot();
})
