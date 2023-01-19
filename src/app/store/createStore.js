import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookingReducer from "./booking";
import moneyReducer from "./money";
import statisticsReducer from "./statistics";
import usersReducer from "./users";

const rootReducer = combineReducers({
    money: moneyReducer,
    statistics: statisticsReducer,
    users: usersReducer,
    booking: bookingReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
