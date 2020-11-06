import React from "react";
import "./styles.css";

// Do NOT change this code
function CheckoutCart({ cartItems }) {
  if (cartItems && cartItems.length === 0) {
    return (
      <ul>
        <li>no items checked out :(</li>
      </ul>
    );
  }

  const grouped = cartItems.reduce((memo, value) => {
    memo[value.id] = {
      ...value,
      count: ~~memo[value.id]?.count + 1
    };
    return memo;
  }, {});

  return (
    <ul>
      {Object.keys(grouped).map(key => {
        const { id, label, count } = grouped[key];
        return (
          <li key={id}>
            <span>
              {label}({count})
            </span>
          </li>
        );
      })}
    </ul>
  );
}

// Change code below this line ONLY

function ProductList({ products }) {
  return (
    <ul>
      {products.map(({ label, id }) => (
        <li key={id} className="list-item">
          <span>{label}</span>
          <button>+</button>
        </li>
      ))}
    </ul>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 0,
          label: "Banana"
        },
        {
          id: 1,
          label: "Orange"
        },
        {
          id: 2,
          label: "Apple"
        }
      ],
      cartItems: []
    };
  }
  render() {
    return (
      <div className="app">
        <div className="list">
          <h2>Product List:</h2>
          <ProductList products={this.state.products} />
        </div>
        <div className="checkout">
          <h2>Checkout cart</h2>
          <CheckoutCart cartItems={this.state.cartItems} />
        </div>
      </div>
    );
  }
}

export default App;
