import httpService from "./http.service";

const statisticEndpoint = "statistics/";

const statisticService = {
    get: async () => {
        const { data } = await httpService.get(statisticEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            statisticEndpoint + payload.id,
            payload
        );
        return data;
    },
    remove: async (commentId) => {
        const { data } = await httpService.delete(
            statisticEndpoint + commentId
        );
        return data;
    }
};
export default statisticService;
