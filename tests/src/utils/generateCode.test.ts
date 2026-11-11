import { describe, it, expect } from "vitest";
import { generateSixDigitCode } from "../../../src/utils/generateCode.util";

describe("generateSixDigitCode", () => {
  it("genera una cadena de exactamente 6 dígitos", () => {
    const code = generateSixDigitCode();
    expect(typeof code).toBe("string");
    expect(code).toMatch(/^\d{6}$/);
  });

  it("genera un número entero positivo entre 100000 y 999999", () => {
    const value = Number(generateSixDigitCode());
    expect(Number.isInteger(value)).toBe(true);
    expect(value).toBeGreaterThanOrEqual(100000);
    expect(value).toBeLessThanOrEqual(999999);
  });

  it("genera códigos distintos en llamadas consecutivas", () => {
    const codes = new Set(Array.from({ length: 20 }, () => generateSixDigitCode()));
    expect(codes.size).toBeGreaterThan(1);
  });
});
