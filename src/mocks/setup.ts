import { beforeAll, afterAll, afterEach } from "vitest";
import "@testing-library/jest-dom";
import "whatwg-fetch";
import { server } from "./server";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
