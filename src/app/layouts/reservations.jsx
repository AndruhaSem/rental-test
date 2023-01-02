import React, { useState, useEffect } from "react";
import api from "../api";
import ProductList from "../components/common/productList";
import ModalBar from "../components/ui/modalBar";
const Reservations = () => {
  const [products, setProducts] = useState();
  const [modal, setModal] = useState({ isOpen: false, productTitle: "" });
  useEffect(() => {
    api.rental.fetchAll().then((data) => setProducts(data));
  }, []);
  function toggleModal(productTitle = null) {
    setModal((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
      productTitle,
    }));
  }

  if (products) {
    return (
      <div>
        <ModalBar modal={modal} ontoggleModal={toggleModal} />
        {products && (
          <ProductList products={products} toggleModal={toggleModal} />
        )}
      </div>
    );
  }
  return <h2 className="loging">Загрузка....</h2>;
};

export default Reservations;
