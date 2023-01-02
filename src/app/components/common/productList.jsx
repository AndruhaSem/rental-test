import React from "react";

const ProductList = ({ products, toggleModal }) => {
  return products.map((product) => (
    <div className="w1" key={product.id}>
      <div>
        <h1 className="w2">{product.product}</h1>
        <div className="w3">
          <div className="w4">
            <p>{product.title}</p>
            <button className="w5" onClick={() => toggleModal(product.product)}>
              Забронировать
            </button>
          </div>
          <img src={product.image} className="img" alt="" />
        </div>
      </div>
    </div>
  ));
};

export default ProductList;
