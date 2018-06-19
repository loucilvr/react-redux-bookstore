import React from 'react';
import styles from './CartItem.css';

export default function CartItem(props) {
    return(
        <div className="cart-item" style={styles.cartItem}>
            <p>{props.title} ${props.price}</p>
        </div>
    )
}