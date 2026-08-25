# Contributing to projects-info

Thank you for your interest in contributing! This guide explains how to submit or update project information for the [Subscan parachain module](https://subscan.io).

## What You Need

To add or update project info, prepare the following:

1. **Description file** (`<network>.json`) — placed in the correct folder (e.g., `networks/kusama/parachain/<network>.json`)
2. **Network icon** — SVG or PNG, recommended 512×512, placed at `assets/images/<network>.<svg/png>`
3. **Cover image** *(optional)* — SVG or PNG

> If you are only updating resources (images, etc.) without changing the description file, you can skip the signature step below.

## Steps to Submit

1. Put your description file in the appropriate folder:
   - Kusama: `networks/kusama/parachain/<network>.json`
   - Polkadot: `networks/polkadot/parachain/<network>.json`
   - Rococo: `networks/rococo/parachain/<network>.json`
   - Westend: `networks/westend/parachain/<network>.json`
2. Put your icon/cover images in `assets/images/`.
3. Sign your description file using the **parachain owner account**:
   - [Sign for Polkadot](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/signing)
   - [Sign for Kusama](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/signing)
   - [Sign for Rococo](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/signing)
   - [Sign for Westend](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwestend-rpc.polkadot.io#/signing)
4. Open a pull request and fill in the `Para ID Owner & Signature Account` and `Signature Hash` fields.
5. Complete all checklist items in the PR template.

See [this example PR](https://github.com/subscan-explorer/projects-info/pull/58) for reference.

## Description File Format

Use [`networks/polkadot/parachain/template.json`](networks/polkadot/parachain/template.json) as a starting point. Valid JSON is required; indentation and spacing don't matter.

## Important Notes

- Data is displayed publicly on Subscan — please fill in accurate information.
- All fields are optional; use a single space `" "` (not an empty string) for fields you cannot answer at this time, as required by the data format.
- The signature **must** be made by the *owner account* that submitted `registrar_reserve`.
- After every update to the description file, re-sign the latest data and update the signature in your PR.
- After a PR is merged, a new package version is typically released within one to two days.

## Troubleshooting Signature Verification

If the Signature Checker reports **Not-Verified**:

1. Make sure you haven't changed any format except for angle-bracket placeholders.
2. Make sure the signature was made by the correct Parachain Owner account.
3. Make sure the description file is valid JSON.
4. If none of the above help, open an issue and the team will verify manually.
