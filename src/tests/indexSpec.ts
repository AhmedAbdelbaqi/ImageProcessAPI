import supertest from "supertest";
import { app, resizeFunc } from "../index";

const request = supertest(app);
describe("Test of the request", () => {
  it("1. Test the Response ", async () => {
    const Response = await request.get("/image");
    expect(Response.status).toBe(200);
  });

  it("2. Resolve of Image resize ", async () => {
    const result = await resizeFunc(
      "./images/full/",
      "./images/thumb/",
      "fjord",
      50,
      50
    );
    expect(result).toEqual("/../images/thumb/fjord.jpg");
  });
});
