import { render, screen } from "@testing-library/react-native";
import { WeatherItem } from ".";

import drop from "@assets/drop.svg";

describe("Component: WeatherItem", () => {
  it("should be render WeatherItem", () => {
    render(<WeatherItem title="Umidade do ar" value="81%" icon={drop} />);

    const title = screen.getByText("Umidade do ar");
    const value = screen.getByText("81%");

    expect(title).toBeTruthy();
    expect(value).toBeTruthy();
  });
});
