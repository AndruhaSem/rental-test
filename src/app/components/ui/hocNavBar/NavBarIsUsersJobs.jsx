import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBarIsUsersJobs = ({ isOpen }) => {
    return (
        <div className={"dropdown-menu-jobs" + (isOpen ? " show" : "")}>
            <div className="nav-profile">
                <Link to="/rental" className="dropdown-item">
                    Аренда
                </Link>

                <Link to="/logout" className="dropdown-item">
                    Выход
                </Link>
            </div>
        </div>
    );
};
NavBarIsUsersJobs.propTypes = {
    isOpen: PropTypes.bool
};
export default NavBarIsUsersJobs;
