import { render, screen } from "@testing-library/react-native";

import { Input } from "./index";

describe("Component: Input", () => {
  it("should be render without activity indicator if isLoading props is undefined", () => {
    render(<Input />);

    /* com o testeId é possivel fazer testes para encontrar esse componente dentro do input
        ao utilizar o get ele retorna uma excessao caso nao encontre o componente
    */
    const activityIndicator = screen.queryByTestId("activity-indicator");

    expect(activityIndicator).toBeNull();
  });

  it("should be render without activity indicator if isLoading props is true", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId("activity-indicator");
    /* espera-se que ele seja renderizado */
    expect(activityIndicator).toBeTruthy();
  });
});
