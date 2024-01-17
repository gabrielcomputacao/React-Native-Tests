import { mockCityAPIResponse } from "@__tests__/mocks/mockCityAPIResponse";
import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe("getCityByNameService", () => {
  it("should return city information", async () => {
    /* 
        ### spyOn
    o metodo spyOn permite verificar se algum requisicação foi feita nessa api , e se algum metodo foi utilizado que é
        definido ali no segundo parametro, se foi utilizado ela vai acusar
    */

    const data = mockCityAPIResponse;

    /* 
        ### mockResolvedValue
        Atraves desse função permite passar os dados que serao retornados na api, e assim verificar se foram retornados imitando um dado da api real
    */

    jest.spyOn(api, "get").mockResolvedValue({
      data: data,
    });

    const response = await getCityByNameService("Campo Grande");
    console.log(response);

    /* verificar se a resposta é maior do que zero */
    expect(response.length).toBeGreaterThan(0);
  });
});
