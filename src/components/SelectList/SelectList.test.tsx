import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from "./";

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "Campos", latitude: 12332, longitude: 45632 },
    ];

    /* funcao do jest que permite verificar e observar a função que foi passada para o botao
      assim é possivel verificar se essa funcao foi chamada imitando a função original do botao
    */
    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    /* é possivel usar regex para verificar os textos */
    const selectedCity = screen.getByText(/Campinas/);

    /* fireEvent faz com que o botao seja pressionado */
    fireEvent.press(selectedCity);

    // expect(onPress).toBeCalledTimes(1);
    expect(onPress).toBeCalledWith(data[1]);
  });
});
