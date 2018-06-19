import React from 'react';
import Cart from './Cart';
import { shallow } from 'enzyme';
import CartItem from "./CartItem";

it('renders Cart without crashing', () => {
    const dummyProduct = [{
        "id": "63",
        "title": "Moby Dick",
        "author": "Herman Melville",
        "published": "1851",
        "country": "United States",
        "lang": "English",
        "pages": "378",
        "image": "",
        "url": "https://en.wikipedia.org/wiki/Moby-Dick",
        "price": "5"
    }, {
        "id": "1",
        "title": "Things Fall Apart",
        "author": "Chinua Achebe",
        "published": "1958",
        "country": "Nigeria",
        "lang": "English",
        "pages": "209",
        "image": "things-fall-apart.jpg",
        "url": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
        "price": "5"
    }];
    const idsInCart = ['1', '63'];

    const component = shallow(<Cart products={dummyProduct} inCart={idsInCart}/>);

    expect(component.find('div.cart-item')).toHaveLength(2);
})