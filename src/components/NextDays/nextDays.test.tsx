import { render, screen } from "@testing-library/react-native";
import { NextDays } from ".";
import clearDay from "@assets/clear_day.svg";

describe("Component: NextDay", () => {
  it("should be render day", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "30c",
            max: "34c",
            icon: clearDay,
            weather: "Céu Limpo",
          },
          {
            day: "19/07",
            min: "33c",
            max: "33c",
            icon: clearDay,
            weather: "Céu Limpo",
          },
          {
            day: "20/07",
            min: "21c",
            max: "38c",
            icon: clearDay,
            weather: "Nublado",
          },
          {
            day: "21/07",
            min: "22c",
            max: "35c",
            icon: clearDay,
            weather: "Céu Limpo",
          },
          {
            day: "22/07",
            min: "31c",
            max: "33c",
            icon: clearDay,
            weather: "Ensolarado",
          },
        ]}
      />
    );

    expect(screen.getByText("22/07")).toBeTruthy();
  });
});
