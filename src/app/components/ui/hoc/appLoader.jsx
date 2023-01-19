import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    getUsersLoadingStatus,
    loadUsersList,
    getIsLoggedIn
} from "../../../store/users";
import { loadmoneyList } from "../../../store/money";
import { loadStatisticsList } from "../../../store/statistics";
import { loadBookingList } from "../../../store/booking";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersStatusLoading = useSelector(getUsersLoadingStatus());
    useEffect(() => {
        dispatch(loadBookingList());
        if (isLoggedIn) {
            dispatch(loadUsersList());
            dispatch(loadmoneyList());
            dispatch(loadStatisticsList());
        }
    }, [isLoggedIn]);
    if (usersStatusLoading) return "Loading...!";
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
