import { defineConfig } from 'vitest/config';

export default defineConfig({
  optimizeDeps: {
    include: ["fixture-cjs-lib"],
    force: true,
  },
  test: {
    browser: {
      enabled: true,
      provider: "playwright",
      name: "chromium",
      slowHijackESM: true,
    },
    diff: './custom-diff-config.ts',
  },
});
