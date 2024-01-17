import { CityAPIResponse } from "@services/getCityByNameService";

export const mockCityAPIResponse: CityAPIResponse = {
  id: "1",
  name: "Campo Grande",
  sys: {
    country: "BR",
  },
  coord: {
    lat: 123,
    lon: 456,
  },
};
