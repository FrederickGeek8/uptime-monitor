import { parse } from "dotenv";
import { parseURIToPackagePath } from "./site";

test("parseURIToPackagePath", () => {
  // test formats from https://docs.npmjs.com/cli/v8/commands/npm-install
  expect(parseURIToPackagePath("name")).toBe("name");
  expect(parseURIToPackagePath("name@version")).toBe("name");
  expect(parseURIToPackagePath("@types/jest")).toBe("@types/jest");
  expect(parseURIToPackagePath("upptime/uptime-monitor")).toBe("uptime-monitor");
  // TODO: Parse other types of URI.
});
