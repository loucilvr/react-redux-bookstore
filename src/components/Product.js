import React from 'react';
import styles from './Product.css';
import PropTypes from 'prop-types';

export default class Product extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        if(this.props.inCart) {
            this.props.removeFromCart(this.props.id);
        } else {
            this.props.addToCart(this.props.id);
        }
    }

    render(){
        const { id, title, author, published, country, lang, pages, image,
            url, price } = this.props;
        let inCart = this.props.inCart;
        return(
            <div style={styles.product}>
                <img src={image ? "images/images/"+image : "images/default.jpg"}
                     style={styles.thumbnail}
                     alt="{title}"/>
                <h2>{title}</h2>
                <p>by: {author}</p>
                <p>published: {published} {country}</p>
                <p>language: {lang}</p>
                <p>pages: {pages}</p>
                <p>price: ${price}</p>
                <button
                    onClick={this.handleClick.bind(this)}
                    type="button"
                    className={inCart ? 'btn btn-danger' : 'btn btn-primary'}>
                    {inCart ?
                        'Remove from Cart' : 'Add to Cart'
                    }
                </button>


            </div>
        )
    }

}

Product.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    country: PropTypes.string,
    lang: PropTypes.string,
    pages: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    price: PropTypes.string,
    inCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired
}