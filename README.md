vitest browser mode playwright/webkit flaky?

```sh
pnpm test run
pnpm test run -- --browser.name=webkit

for ((i=0; i<20; i++)); do
  pnpm test run -- --browser.name=webkit
done
```
