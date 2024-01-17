import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherByCityService";
import { api } from "./api";
import { getWeatherByCityService } from "./getWeatherByCityService";

describe("Service: getWeatherByCityService", () => {
  it("should be return weather api data formatted", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const response = await getWeatherByCityService({
      latitude: 123,
      longitude: 5678,
    });

    console.log(response);
    /* verifica se na resposta tem essa propriedade passada */
    expect(response).toHaveProperty("nextDays");
  });
});
