import React from 'react';
import Product from './Product';
import styles from './ProductList.css';
import PropTypes from 'prop-types';

export default class ProductList extends React.Component{

    render() {
        const products = this.props.products;
        const inCart = this.props.inCart;

        if(products.length > 0) {
            return (
                <ul style={styles.productList}>
                    { products.map(product => (
                        <li
                            key={product.id}
                            style={styles.productListItem}>
                            <Product {...product}
                                     inCart={inCart.includes(product.id) ? '1' : ''}
                                     addToCart = {this.props.addToCart}
                                     removeFromCart = {this.props.removeFromCart}
                            />
                        </li>
                    ))}
                </ul>
            )
        } else {
            return null;
        }
    }
}

ProductList.propTypes = {
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    inCart: PropTypes.array.isRequired
}