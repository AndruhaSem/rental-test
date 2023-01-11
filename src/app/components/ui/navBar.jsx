import React from "react";
import { Link } from "react-router-dom";
import NavProfile from "./navProfile";
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
    const { currentUser } = useAuth();

    return (
        <nav>
            <div className="header">
                <ul className="nav">
                    <li className="nav-item mr-hed">
                        <Link className="nav-link" to="/">
                            Главное
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/reservations">
                            Бронирование
                        </Link>
                    </li>
                </ul>

                {currentUser ? (
                    <NavProfile />
                ) : (
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
