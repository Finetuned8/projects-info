const assert = require("assert");

const { parachainInfos } = require("../dist/main.js");

const expectedNetworks = [
  "kusama",
  "polkadot",
  "rococo",
  "westend",
  "coretime-kusama",
  "coretime-polkadot",
];

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

assert.ok(isPlainObject(parachainInfos), "Expected parachainInfos export");

for (const network of expectedNetworks) {
  assert.ok(
    Object.prototype.hasOwnProperty.call(parachainInfos, network),
    `Expected network export for ${network}`
  );
  assert.ok(isPlainObject(parachainInfos[network]), `Expected ${network} export to be a plain object`);
}
