const kusamaJsons = require.context("./networks/kusama/parachain", false, /\.json$/);
const kusamaParachains = {};
kusamaJsons.keys().forEach((k) => {
  const c = kusamaJsons(k);
  if (c.data && c.data.ParaID) {
    kusamaParachains[c.data.ParaID] = c.data;
    try {
      const logoPaths = c.data.Logo.split("/");
      const imageName = logoPaths[logoPaths.length - 1];
      kusamaParachains[
        c.data.ParaID
      ].logo = `https://gcs.subscan.io/projects-info/images/${imageName}`;
    } catch {}
  }
});

const polkadotJsons = require.context("./networks/polkadot/parachain", false, /\.json$/);
const polkadotParachains = {};
polkadotJsons.keys().forEach((k) => {
  const c = polkadotJsons(k);
  if (c.data && c.data.ParaID) {
    polkadotParachains[c.data.ParaID] = c.data;
    try {
      const logoPaths = c.data.Logo.split("/");
      const imageName = logoPaths[logoPaths.length - 1];
      polkadotParachains[
        c.data.ParaID
      ].logo = `https://gcs.subscan.io/projects-info/images/${imageName}`;
    } catch {}
  }
});

const rococoJsons = require.context("./networks/rococo/parachain", false, /\.json$/);
const rococoParachains = {};
rococoJsons.keys().forEach((k) => {
  const c = rococoJsons(k);
  if (c.data && c.data.ParaID) {
    rococoParachains[c.data.ParaID] = c.data;
    try {
      const logoPaths = c.data.Logo.split("/");
      const imageName = logoPaths[logoPaths.length - 1];
      rococoParachains[
        c.data.ParaID
      ].logo = `https://gcs.subscan.io/projects-info/images/${imageName}`;
    } catch {}
  }
});

const westendJsons = require.context("./networks/westend/parachain", false, /\.json$/);
const westendParachains = {};
westendJsons.keys().forEach((k) => {
  const c = westendJsons(k);
  if (c.data && c.data.ParaID) {
    westendParachains[c.data.ParaID] = c.data;
    try {
      const logoPaths = c.data.Logo.split("/");
      const imageName = logoPaths[logoPaths.length - 1];
      westendParachains[
        c.data.ParaID
      ].logo = `https://gcs.subscan.io/projects-info/images/${imageName}`;
    } catch {}
  }
});

const coretimeKusamaJsons = require.context("./networks/coretime-kusama/parachain", false, /\.json$/);
const coretimeKusamaParachains = {};
coretimeKusamaJsons.keys().forEach((k) => {
  const c = coretimeKusamaJsons(k);
  if (c.data && c.data.ParaID) {
    coretimeKusamaParachains[c.data.ParaID] = c.data;
    try {
      const logoPaths = c.data.Logo.split("/");
      const imageName = logoPaths[logoPaths.length - 1];
      coretimeKusamaParachains[
        c.data.ParaID
      ].logo = `https://gcs.subscan.io/projects-info/images/${imageName}`;
    } catch {}
  }
});

const coretimePolkadotJsons = require.context("./networks/coretime-polkadot/parachain", false, /\.json$/);
const coretimePolkadotParachains = {};
coretimePolkadotJsons.keys().forEach((k) => {
  const c = coretimePolkadotJsons(k);
  if (c.data && c.data.ParaID) {
    coretimePolkadotParachains[c.data.ParaID] = c.data;
    try {
      const logoPaths = c.data.Logo.split("/");
      const imageName = logoPaths[logoPaths.length - 1];
      coretimePolkadotParachains[
        c.data.ParaID
      ].logo = `https://gcs.subscan.io/projects-info/images/${imageName}`;
    } catch {}
  }
});

module.exports = {
  parachainInfos: {
     kusama: kusamaParachains,
     polkadot: polkadotParachains,
     rococo: rococoParachains,
     westend: westendParachains,
     "coretime-kusama": coretimeKusamaParachains,
     "coretime-polkadot": coretimePolkadotParachains,
  }
}
