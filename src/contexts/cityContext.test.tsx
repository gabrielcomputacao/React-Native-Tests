import { useCity } from "@hooks/useCity";
import { act, renderHook, waitFor } from "@testing-library/react-native";
import { CityProvider } from "./CityContext";

describe("Context: CityContext", () => {
  it("should be change selected city", async () => {
    /* 
        renderHook é necessario para fazer uso de hooks neste exemplo é um hook que chama um context, por isso é preciso passar o wrapper que
        é o provider

    */
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

    /* 
        waitfor é usado para aguardar essa solicitação assincrona e o
        act é para poder lidar com atualização de estado que acontece dentro do componente
    */

    await waitFor(() =>
      act(() =>
        result.current.handleChanceCity({
          id: "1",
          name: "São Paulo",
          latitude: 123,
          longitude: 567,
        })
      )
    );

    /* aqui é testado se o hook esta funcionando , testando essa função que altera o dado dentro do context */

    expect(result.current.city?.name).toBe("São Paulo");
  });
});
