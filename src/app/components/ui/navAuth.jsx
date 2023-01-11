import React from "react";
import { useAuth } from "../../hooks/useAuth";

const navAuth = (Component) => (props) => {
    const { currentUser } = useAuth();
    return (
        <Component
            {...props}
            isAdmin={currentUser.isAdmin}
            isJobs={currentUser.isJobs}
        />
    );
};

export default navAuth;
