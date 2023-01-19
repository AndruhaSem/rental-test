import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBarIsUsers = ({ isOpen }) => {
    return (
        <div className={"dropdown-menu-user" + (isOpen ? " show" : "")}>
            <div className="nav-profile">
                <Link to="/logout" className="dropdown-item">
                    Выход
                </Link>
            </div>
        </div>
    );
};
NavBarIsUsers.propTypes = {
    isOpen: PropTypes.bool
};
export default NavBarIsUsers;
