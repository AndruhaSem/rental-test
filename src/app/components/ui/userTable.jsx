import React from "react";
import Table from "../common/table/table";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserTable({ statistic, onSort, selectedSort, onDelete }) {
    function addStartRental(time) {
        const date = new Date(time);
        return `${date.getDate()}.${
            date.getMonth() + 1
        }.${date.getFullYear()}/${date.getHours()}:${date.getMinutes()}`;
    }
    function addEndRental(time, timeRental) {
        const date = new Date(time + timeRental * 60 * 60 * 1000);
        return `${date.getHours()}:${date.getMinutes()}`;
    }
    const columns = {
        id: {
            path: "id",
            name: "Номер заказа",
            component: (user) => (
                <Link to={`/statistic/${user.id}`}>{user.id}</Link>
            )
        },
        telephone: {
            name: "Телефон",
            component: (user) => user.telephone
        },
        name: {
            name: "Фамилия.И.О",
            component: (user) => user.name
        },
        product: {
            path: "product",
            name: "Товар"
        },
        quantity: {
            path: "quantity",
            name: "колличество товара"
        },
        payment: {
            path: "payment",
            name: "Способ оплаты"
        },
        deposit: {
            path: "deposit",
            name: "Залог"
        },
        timeRental: {
            name: "Время аренды",
            component: (user) => user.timeRental
        },
        date: {
            name: "Начало аренды",
            component: (user) => addStartRental(user.date)
        },
        newData: {
            name: "Прошедшие время",
            component: (user) => addEndRental(user.date, user.timeRental)
        },
        status: {
            component: (user) => (
                <button
                    onClick={() => onDelete(user.id)}
                    className="button-delete"
                >
                    delete
                </button>
            )
        }
    };
    return (
        <Table
            data={statistic}
            columns={columns}
            onSort={onSort}
            selectedSort={selectedSort}
        />
    );
}
UserTable.propTypes = {
    statistic: PropTypes.array.isRequired,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object.isRequired,
    onDelete: PropTypes.func
};
export default UserTable;
