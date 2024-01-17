/* foi criado um custo render */
import { act, render, screen, waitFor } from "@__tests__/utils/customRender";
import { Routes } from ".";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherByCityService";

describe("Routes", () => {
  it("should be render Search screen when not city selected", async () => {
    /* para o uso de um componente que tem o usesafeareaview é preciso fazer o mock dos dados do areasafe */

    const { debug } = render(<Routes />);

    /* 
        waitfor fica esperando esse findbytexxt
        Que fica procurando ate estourar um timeout
    */

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));

    expect(title).toBeTruthy();
  });

  it("should be render dashboard screen when has city selected", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: "1",
      name: "São Paulo",
      latitude: 123,
      longitude: 678,
    };

    await saveStorageCity(city);

    // const { debug } = render(<Routes />, { wrapper: CityProvider });

    await act(() => waitFor(() => render(<Routes />)));
    // const { debug } = render(<Routes />);

    const title = screen.getByText(city.name);

    expect(title).toBeTruthy();
  });
});
