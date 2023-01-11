import React from "react";
import PropTypes from "prop-types";

const RadioFild = ({ options, name, value, onChange }) => {
    function handleChange({ target }) {
        onChange({ name: target.name, value: target.value });
    }
    return (
        <div className="rental-choice">
            <div className="form-container-rental">
                {options.map((option) => (
                    <div
                        key={option.name + "_" + option.value}
                        className="form-check-rental"
                    >
                        <input
                            className="form-check-input-rental"
                            type="radio"
                            name={name}
                            id={option.name + "_" + option.value}
                            checked={option.value === value}
                            value={option.value}
                            onChange={handleChange}
                            onClick={option.func}
                        />
                        <label
                            className="form-check-label-rental"
                            htmlFor={option.name + "_" + option.value}
                        >
                            {option.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};
RadioFild.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array,
    name: PropTypes.string
};
export default RadioFild;
