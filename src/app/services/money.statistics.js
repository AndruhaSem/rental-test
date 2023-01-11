import httpService from "./http.service";

const statisticEndpoint = "money/";

const moneyService = {
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
    }
};
export default moneyService;
