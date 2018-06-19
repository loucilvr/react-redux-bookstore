import React from 'react';
import {shallow} from 'enzyme';
import CartItem from './CartItem';

it('renders CartItem without crashing', () => {
    const component = shallow(<CartItem title="Ello" price="5"/>);
    expect(component.text()).toEqual('Ello $5');
});
