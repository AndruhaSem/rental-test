import { createSlice, createAction } from "@reduxjs/toolkit";
import statisticService from "../services/statistics.service";
import { nanoid } from "nanoid";
import history from "../utils/history";

const statisticsSlice = createSlice({
    name: "statistics",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        statisticsRequested: (state) => {
            state.isLoading = true;
        },
        statisticsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        statisticsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        statisticsCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        statisticsRemove: (state, action) => {
            state.entities = state.entities.filter(
                (el) => el.id !== action.payload
            );
        },
        statisticUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((u) => u.id === action.payload.id)
            ] = action.payload;
        }
    }
});

const { reducer: statisticsReducer, actions } = statisticsSlice;
const {
    statisticsRequested,
    statisticsReceived,
    statisticsRequestFailed,
    statisticsCreated,
    statisticsRemove,
    statisticUpdateSuccessed
} = actions;

const statisticUpdateRequested = createAction(
    "statistic/statisticUpdateRequested"
);

export const loadStatisticsList = () => async (dispatch) => {
    dispatch(statisticsRequested());
    try {
        const { content } = await statisticService.getStatistics();
        dispatch(statisticsReceived(content));
    } catch (error) {
        dispatch(statisticsRequestFailed(error.message));
    }
};

export const deleteStatistics = (userId) => async (dispatch) => {
    try {
        await statisticService.removeStatistics(userId);
        dispatch(statisticsRemove(userId));
    } catch (error) {
        dispatch(statisticsRequestFailed(error.message));
    }
};

export const createStatistics = (data) => async (dispatch) => {
    const statistic = {
        id: nanoid(),
        date: Date.now(),
        ...data
    };
    try {
        const { content } = await statisticService.createStatistics(statistic);
        dispatch(statisticsCreated(content));
    } catch (error) {
        dispatch(statisticsRequestFailed(error.message));
    }
};
export const updateStatistic = (payload) => async (dispatch) => {
    dispatch(statisticUpdateRequested());
    try {
        const { content } = await statisticService.update(payload);
        dispatch(statisticUpdateSuccessed(content));
        history.push("/statistic");
    } catch (error) {
        dispatch(statisticsRequestFailed(error.message));
    }
};

export const getStatisticsById = (id) => (state) => {
    if (state.statistics.entities) {
        return state.statistics.entities.find((p) => p.id === id);
    }
};

export const getStatistics = () => (state) => state.statistics.entities;
export const getStatisticsLoadingStatus = () => (state) =>
    state.statistics.isLoading;

export default statisticsReducer;
