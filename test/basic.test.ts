import { expect, test } from 'vitest';
import * as lib from "fixture-cjs-lib";

test('ok', async () => {
  expect(1).toBe(1)
  expect(lib).toBeDefined();
});
