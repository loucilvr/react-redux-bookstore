import React, { Component } from 'react';
import '../App.css';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: ['1', '3', '5'],
            products: []
        };
        this.sortedProducts = [];
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:3000/data/products.json')
            .then(res => res.json())
            .then(products => this.shuffleArray(products))
            .then(products => {
                this.setState({products})
            })
            .catch((err) => console.log(err))
    }

    addToCart(id) {
        let newItems = [ ...this.state.items, id];
        this.setState({
            items: newItems
        })
    }

    removeFromCart(idToRemove) {
        let newItems = this.state.items.filter(id => id !== idToRemove);
        this.setState({ items: newItems });
    }

    shuffleArray(array) {
        for(let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    render() {
        return (
          <div className="container">
            <header className="row">
              <div className="col-md-12">
                  <h1>Welcome to React Bookstore</h1>
              </div>
            </header>
              <div className="row">
              <div className="col-md-8">
                  {/*{console.log(products)}*/}
                <ProductList
                    addToCart={this.addToCart}
                    removeFromCart={this.removeFromCart}
                    products={this.state.products}
                    inCart={this.state.items}/>
               </div>
              <div className="col-md-4">
                <Cart products={this.state.products} inCart={this.state.items}/>
              </div>
              </div>
          </div>
        );
    }
}

export default App;
