import {
  render,
  fireEvent,
  screen,
  waitFor,
} from "@__tests__/utils/customRender";
import { Search } from ".";
import { api } from "@services/api";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

describe("Screen: Search", () => {
  it("should be show city option.", async () => {
    /* o jest.spyon serve para mocar os dados da api, para ser possivel usar a api nos testes precisa ter os dados sendo imitados por meio do mock */
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    render(<Search />);

    const searchInput = screen.getByTestId("search-input");
    fireEvent.changeText(searchInput, "São Paulo");

    const option = await waitFor(() => screen.findByText(/são paulo/));
    expect(option).toBeTruthy();
  });
});
