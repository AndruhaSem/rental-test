import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import EarningsTable from "./earningsTable";

const NavBarIsUsers = ({ isAdmin, isJobs, isOpen }) => {
    return (
        <>
            {isAdmin ? (
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
            ) : null}
            {isJobs ? (
                <div className={"dropdown-menu-user" + (isOpen ? " show" : "")}>
                    <div className="nav-profile">
                        <Link to="/rental" className="dropdown-item">
                            Аренда
                        </Link>

                        <Link to="/logout" className="dropdown-item">
                            Выход
                        </Link>
                    </div>
                </div>
            ) : null}
            {!isAdmin && !isJobs ? (
                <div className={"dropdown-menu-user" + (isOpen ? " show" : "")}>
                    <div className="nav-profile">
                        <Link to="/logout" className="dropdown-item">
                            Выход
                        </Link>
                    </div>
                </div>
            ) : null}
        </>
    );
};
NavBarIsUsers.propTypes = {
    isAdmin: PropTypes.bool,
    isJobs: PropTypes.bool,
    isOpen: PropTypes.bool
};
export default NavBarIsUsers;
