import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherByCityService";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { Dashboard } from ".";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

describe("Screen: Dashboard", () => {
  /* fazer algo antes de executar todos os testes */
  beforeAll(async () => {
    const city = {
      id: "1",
      name: "Rio do Sul, BR",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);
  });

  /* fazer algo depois dos testes */
  afterAll(() => {});

  it("should be show city weather", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    render(<Dashboard />);

    const cityName = await waitFor(() => screen.findByText(/rio do sul/i));

    expect(cityName).toBeTruthy();
  });

  it("should be show another selected weather city", async () => {
    /* 
        1- Busca informações do tempo/clima da cidade selecionada 
        2- Busca informações da cidade
        3- Busca informações do tempo/clima da nova cidade selecionada
    */

    /* 
        quando usa a primeira chamada vai ser o que foi passada, e em cada requisição é possivel chamar o mock
    */

    jest
      .spyOn(api, "get")
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse });

    render(<Dashboard />);

    /* 
        aguarda o elemento sair da tela usando o waitforElementoTobeRemoved
    */

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const cityName = "São Paulo";

    await waitFor(() =>
      act(() => {
        const search = screen.getByTestId("search-input");

        fireEvent.changeText(search, cityName);
      })
    );

    await waitFor(() =>
      act(() => {
        fireEvent.press(screen.getByText(cityName, { exact: false }));
      })
    );

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy();
  });
});
