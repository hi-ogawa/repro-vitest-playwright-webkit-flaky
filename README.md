vitest browser mode playwright/webkit flaky?

probably it doesn't reproduce outside of Vitest repo since normally Vitest is not a linked dep?

```sh
pnpm test run
pnpm test run -- --browser.name=webkit

for ((i=0; i<20; i++)); do
  echo "::::"
  echo ":::: trial $i"
  echo "::::"
  pnpm test run -- --browser.name=webkit --browser.headless
done
```
