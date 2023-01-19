import { createSlice } from "@reduxjs/toolkit";
import statisticService from "../services/statistics.service";
import { nanoid } from "nanoid";

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
        }
    }
});

const { reducer: statisticsReducer, actions } = statisticsSlice;
const {
    statisticsRequested,
    statisticsReceived,
    statisticsRequestFailed,
    statisticsCreated,
    statisticsRemove
} = actions;

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

export const getStatistics = () => (state) => state.statistics.entities;
export const getStatisticsLoadingStatus = () => (state) =>
    state.statistics.isLoading;

export default statisticsReducer;
