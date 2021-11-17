import { Predictor } from "../src/index";

test("Has correct instance", () => {
  expect(new Predictor()).toBeInstanceOf(Predictor);
});
