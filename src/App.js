import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Components/Homepage";
// import ProductItem from "./Components/ProductItem";
import ProductList from "./Components/ProductList";
import Header from "./Components/Header";
import Notfound from "./Components/Notfound";
import Mockupapi from "./APIs/api";
import Checkout from "./Components/Checkout";
import "./App.css";

class App extends React.Component {
  state = { products: [], cart: null, cartProducts: [] };

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const response = await Mockupapi.get("");
    console.log(response);

    this.setState({ products: response.data });
  };

  addToCart = (event) => {
    const productID = event.target.id;
    const newItem = this.state.products.find(
      (product) => product.id === productID
    );
    // let temp = [];
    // let quantity = 0;
    // this.state.cartProducts.forEach((item, index) => {

    //   // if (newItem.id === item.id) {
    //   //   quantity = quantity + 1;
    //   //   temp.pop();
    //   // } else {
    //   //   temp.push(newItem);
    //   // }
    // });

    this.setState({
      cart: this.state.cart + 1,
      cartProducts: [...this.state.cartProducts, newItem],
    });
    console.log(this.state.cartProducts);
  };

  render() {
    return (
      <div>
        <div>
          <span>{this.state.cart}</span>
        </div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route
                path="/products"
                exact
                component={() => (
                  <ProductList
                    handleClick={this.addToCart}
                    products={this.state.products}
                  />
                )}
              />
              <Route
                path="/checkout"
                exact
                component={() => (
                  <Checkout cartProducts={this.state.cartProducts} />
                )}
              />
              <Route component={Notfound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
