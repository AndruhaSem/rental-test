import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import navAuth from "./navAuth";
import NavBarIsUsers from "./NavBarIsUsers";

const NavProfile = () => {
    const { currentUser } = useAuth();
    const [isOpen, setOpen] = useState(false);
    function toggleMenu() {
        setOpen((prevState) => !prevState);
    }
    const ComponentNavHoc = navAuth(NavBarIsUsers);

    return (
        <>
            <div className="dropdown" onClick={toggleMenu}>
                <div className="btn dropdown-toggle d-flex align-items-center">
                    <div className="me-2">{currentUser.name}</div>
                    <img
                        src={currentUser.image}
                        alt=""
                        height="40"
                        className="img-responsive rounded-circle"
                    />
                </div>

                <ComponentNavHoc isOpen={isOpen} />
            </div>
        </>
    );
};

export default NavProfile;
