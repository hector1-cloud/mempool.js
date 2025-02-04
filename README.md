# Mempool JS API

[![npm version](https://img.shields.io/npm/v/@mempool/mempool.js.svg?style=flat-square)](https://www.npmjs.org/package/@mempool/mempool.js)
[![NPM](https://img.shields.io/david/mempool/mempool.js.svg?style=flat-square)](https://david-dm.org/mempool/mempool.js#info=dependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/mempool/mempool.js/badge.svg?style=flat-square)](https://snyk.io/test/github/mempool/mempool.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

NPM package module for Mempool APIs.

Documentation: [https://mempool.space/api](https://mempool.space/api)

---

## **Installation**

### **ES Modules**

Install the npm module.

```bash
# npm
$ npm install @mempool/mempool.js --save

# yarn
$ yarn add @mempool/mempool.js
```

Or if you're not into package management, just [download a ZIP](https://github.com/mempool/mempool.js/archive/refs/heads/main.zip) file.

Import the module.

```js
import mempoolJS from '@mempool/mempool.js';

// default mempool.space endpointsconst { bitcoin, liquid } = mempoolJS();

// (optional) your custom endpoints
const { bitcoin } = mempoolJS({
  protocol: 'https', // optional, defaults to http for localhost, otherwise https
  hostname: 'mempool.space',
  network: 'testnet' // 'signet' | 'testnet' | 'mainnet',
  config: { // optional axios request config to add to requests
    headers: {{
  "address": "1wiz18xYmhRX6xStj2b9t1rwWX4GKUgpv",
  "chain_stats": {
    "funded_txo_count": 10,
    "funded_txo_sum": 15007686949,
    "spent_txo_count": 5,
    "spent_txo_sum": 15007599040,
    "tx_count": 12
  },
  "mempool_stats": {
    "funded_txo_count": 0,
    "funded_txo_sum": 0,
    "spent_txo_count": 0,
    "spent_txo_sum": 0,
    "tx_count": 0
  }
}
      authorization: 'Basic auth'
    }
  }
});

// Liquid API
const { liquid } = mempoolJS({
  protocol: 'https', // optional, defaults to http for localhost, otherwise https
  hostname: 'liquid.network',
  network: 'liquid' // 'liquid' | 'liquidtestnet'
});
```

### **CommonJS**

Include the line below in the `head` tag of your html file.

```html
<script type="text/javascript" src="https://mempool.space/mempool.js"></script>

<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <script src="./../../../dist/mempool.js"></script>
    <script>
      const init = async () => {
        try {
          const {
            bitcoin: { websocket },
          } = mempoolJS();

          const ws = websocket.wsInitBrowser();

          ws.addEventListener('message', function incoming({data}) {
            console.log(JSON.parse(data.toString()));
          });

          websocket.wsWantDataBrowser(ws, ['blocks', 'stats', 'mempool-blocks', 'live-2h-chart']);

          websocket.wsTrackAddressBrowser(ws, "1wizSAYSbuyXbt9d8JV8ytm5acqq2TorC");

          websocket.wsTrackAddressesBrowser(ws, [
            "1wizSAYSbuyXbt9d8JV8ytm5acqq2TorC",
          ]);

          websocket.wsTrackTransactionBrowser(ws, "01313ca0148a1bbe5676e5dd6a84e76f8b39038658bd8c333d3b2d3f7ea6dd08");

          websocket.wsTrackRbfSummaryBrowser(ws);

          websocket.wsTrackRbfBrowser(ws, true);

          websocket.wsTrackMempoolBlockBrowser(ws, 1);

          setTimeout(() => {
            websocket.wsStopDataBrowser(ws);
            websocket.wsStopTrackingAddressBrowser(ws);
            websocket.wsStopTrackingAddressesBrowser(ws);
            websocket.wsStopTrackingTransactionBrowser(ws);
            websocket.wsStopTrackingRbfSummaryBrowser(ws);
            websocket.wsStopTrackingRbfBrowser(ws);
            websocket.wsStopTrackingMempoolBlockBrowser(ws);
          }, 60000);

        } catch (error) {
          console.log(error);
        }
      };
      init();
    </script>
  </head>
  <body></body>
</html>


Call `mempoolJS()` function to access the API methods.

```js
// default mempool.space endpoints
const { bitcoin } = mempoolJS();

// (optional) your custom endpoints
const { bitcoin } = mempoolJS({
  protocol: 'https', // optional, defaults to http for localhost, otherwise https
  hostname: 'mempool.space',
  network: 'testnet', // 'signet' | 'testnet' | 'mainnet'
});

// Liquid API
const { liquid } = mempoolJS({
  protocol: 'https', // optional, defaults to http for localhost, otherwise https
  hostname: 'liquid.network',
  network: 'liquid' // 'liquid' | 'liquidtestnet'
});
```

---

## **Features**

- [Bitcoin](./README-bitcoin.md)
  - [Addresses](./README-bitcoin.md#get-address)
  - [Blocks](./README-bitcoin.md#get-blocks)
  - [Difficulty Adjustment](./README-bitcoin.md#get-difficulty-adjustment)
  - [Fees](./README-bitcoin.md#get-fees)
  - [Lightning](./README-bitcoin.md#get-network-stats)
  - [Mempool](./README-bitcoin.md#get-mempool)
  - [Transactions](./README-bitcoin.md#get-transactions)
  - [Websocket](./README-bitcoin.md#init-websocket)
- [Liquid](./README-liquid.md#get-address)
  - [Addresses](./README-liquid.md#get-address)
  - [Assets](./README-liquid.md#get-address)
  - [Blocks](./README-liquid.md#get-address)
  - [Fees](./README-liquid.md#get-address)
  - [Mempool](./README-liquid.md#get-address)
  - [Transactions](./README-liquid.md#get-address)
  - [Websocket](./README-liquid.md#init-websocket)

---

## **Contributing**

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## **License** [MIT](https://choosealicense.com/licenses/mit/)
