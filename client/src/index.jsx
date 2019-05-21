import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import ColorSelector from './components/ColorSelector';
import NewProductBadge from './components/NewProductBadge';

class BuyingZone extends Component {
  constructor() {
    super();
    this.state = {
      currentProduct: null,
      id: Math.floor(Math.random() * 100) + 1,
    };
  }

  componentDidMount() {
    const { id } = this.state;
    fetch(`/products/${id}`)
      .then(response => response.json())
      .then(currentProduct => this.setState({ currentProduct }));
  }

  render() {
    const { currentProduct } = this.state;
    const GlobalStyle = createGlobalStyle`
      body {
        box-sizing: border-box;
        font-family: Helvetica, sans-serif;
      }
    `;
    const ProductName = styled.h1`
      font-weight: 900;
      margin: 5px auto;
    `;
    const Price = styled.span`
      font-size: 1.2em;
    `;
    const ModelNumber = styled.span`
      float: right;
      color: rgb(143, 143, 143);
      font-size: 0.8em;
      font-weight: 700;
    `;

    return (
      <div>
        <GlobalStyle />
        {currentProduct && (new Date() - new Date(currentProduct.releaseDate)) / 86400000
        < 30 ? <NewProductBadge /> : ''}
        <ProductName>
          {currentProduct ? currentProduct.name : 'Loading...'}
        </ProductName>
        <Price>
          {currentProduct ? `$${currentProduct.price}.00` : 'Loading...'}
        </Price>
        <br />
        <ModelNumber>
          {currentProduct ? `Model ${currentProduct.id}` : 'Loading...'}
        </ModelNumber>
        <br />
        <p>
          {currentProduct ? currentProduct.description : 'Loading...'}
        </p>
        <br />
        <ColorSelector
          colors={currentProduct ? currentProduct.colors : []}
        />
      </div>
    );
  }
}

ReactDOM.render(<BuyingZone />, document.getElementById('buying-zone'));
