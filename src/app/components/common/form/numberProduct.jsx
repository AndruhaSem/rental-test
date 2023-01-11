import React from "react";
import PropTypes from "prop-types";

function NumberProduct({ handleDecrement, handleIncrement, label, quantity }) {
    return (
        <>
            <label className="rental-label">{label}</label>
            <div className="details-wrapper_quantity">
                <div className="items counter-wrapper">
                    <div className="items__control" onClick={handleDecrement}>
                        -
                    </div>
                    <div className="items__current">{quantity}</div>
                    <div className="items__control" onClick={handleIncrement}>
                        +
                    </div>
                </div>
            </div>
        </>
    );
}
NumberProduct.propTypes = {
    handleDecrement: PropTypes.func,
    handleIncrement: PropTypes.func,
    quantity: PropTypes.number,
    label: PropTypes.string
};
export default NumberProduct;
