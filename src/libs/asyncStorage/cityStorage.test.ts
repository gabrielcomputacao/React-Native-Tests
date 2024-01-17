import { CityProps } from "@services/getCityByNameService";
import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "./cityStorage";

const newCity: CityProps = {
  id: "1",
  name: "Campo Grande",
  latitude: 123,
  longitude: 456,
};

describe("Storage: cityStorage", () => {
  it("Should be return null when do not have a city storaged", async () => {
    const response = await getStorageCity();
    console.log(response);

    expect(response).toBeNull();
  });

  it("should be return city storaged", async () => {
    /* 
      Primeiro foi salvo no storage
      Depois pegou o que esta guardado no storage
      Depois comparou o que estava guardado com o que nos salvamos
    */

    await saveStorageCity(newCity);

    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it("should be remove city storage", async () => {
    await saveStorageCity(newCity);

    await removeStorageCity();

    const response = await getStorageCity();

    expect(response).toBeNull();
  });
});
