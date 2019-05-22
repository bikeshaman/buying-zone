import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import ColorSelector from './components/ColorSelector';
import NewProductBadge from './components/NewProductBadge';
import QuantitySelector from './components/QuantitySelector';
import SizeSelector from './components/SizeSelector';

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
        font-family: Avalon-Bold, Helvetica, sans-serif;
        margin: 0.75em;
      }

      *:focus {
        outline: none;
      }
    `;
    const ProductName = styled.h1`
      font-size: 24px;
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
        <br />
        <SizeSelector
          sizes={currentProduct ? Object.keys(currentProduct.colors[0].quantityInInventory) : []}
        />
        <br />
        <QuantitySelector />
      </div>
    );
  }
}

ReactDOM.render(<BuyingZone />, document.getElementById('buying-zone'));
