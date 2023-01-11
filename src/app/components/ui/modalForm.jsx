import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import * as yup from "yup";
import { messageTg } from "../../utils/messageTg";
import PropTypes from "prop-types";

const ModalForm = ({ ontoggleModal, modal }) => {
    const [data, setData] = useState({
        name: "",
        phone: ""
    });
    const [errors, setErrors] = useState({});
    function handleChange(target) {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    }
    const validateScheme = yup.object().shape({
        phone: yup
            .string()
            .required("Телефон обязателен для заполнения")
            .matches(/(?=.*[0-9])/, "Пароль должен содержать числа")
            .matches(
                /(?=.{11,})/,
                "Пароль должен состоять минимум из 11 символов"
            ),
        name: yup.string().required("ФИО обязательна для заполнения")
    });
    useEffect(() => {
        validate();
    }, [data]);
    function validate() {
        validateScheme
            .validate(data)
            .then(() => setErrors({}))
            .catch((err) => setErrors({ [err.path]: err.message }));
        return Object.keys(errors).length === 0;
    }
    const isValid = Object.keys(errors).length === 0;
    function handleSubmit(e) {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    }
    function clearImput() {
        setData((prevState) => ({
            ...prevState,
            name: "",
            phone: ""
        }));
    }
    function closeModalPostsForm(name, phone, modal) {
        ontoggleModal();
        messageTg(name, phone, modal.productTitle);
        clearImput();
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="фИО"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextField
                label="Телефон"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                error={errors.phone}
            />
            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
                onClick={() =>
                    closeModalPostsForm(data.name, data.phone, modal)
                }
            >
                Забронировать
            </button>
        </form>
    );
};
ModalForm.propTypes = {
    modal: PropTypes.object,
    ontoggleModal: PropTypes.func
};
export default ModalForm;
