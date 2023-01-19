import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import EarningsTable from "../earningsTable";

const NavBarIsUsersAdmin = ({ isOpen }) => {
    return (
        <div className={" dropdown-menu" + (isOpen ? " show" : "")}>
            <div className="admin-form">
                <div className="admin-stat-money">
                    <EarningsTable />
                </div>
                <div className="tr">
                    <Link to="/rental" className="dropdown-item">
                        Аренда
                    </Link>
                    <Link to="/statistic" className="dropdown-item">
                        Статистика
                    </Link>
                    <Link to="/logout" className="dropdown-item">
                        Выход
                    </Link>
                </div>
            </div>
        </div>
    );
};
NavBarIsUsersAdmin.propTypes = {
    isOpen: PropTypes.bool
};
export default NavBarIsUsersAdmin;
