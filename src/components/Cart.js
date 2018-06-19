import React from 'react';
import CartItem from './CartItem';
import styles from './Cart.css';
import PropTypes from 'prop-types';

export default function Cart(props) {
    const inCart = props.inCart;
    const products = props.products;
    let total = 0;
    return(
        <div style={styles.cart}>
            <h2>Cart</h2>
            { products && products.map(p => {
                if(inCart.includes(p.id)) {
                    total += +p.price;
                  return <CartItem key={p.id} {...p} />
                }
            })
            }
            <p>Total: $ {total}</p>
        </div>
    )
}

Cart.propTypes = {
    inCart: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired
}