import type { WcWallet } from '@web3modal/core'


export const walletConfig: WcWallet[] = [
  {
    id: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
    name: "MetaMask",
    homepage: "https://metamask.io/",
    image_id: "5195e9db-94d8-4579-6f11-ef553be95100",
    order: 10,
    mobile_link: "metamask://",
    desktop_link: null,
    webapp_link: null,
    app_store: "https://apps.apple.com/us/app/metamask/id1438144202",
    play_store: "https://play.google.com/store/apps/details?id=io.metamask",
    rdns: null,
    chrome_store:
      "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
    injected: [
      {
        namespace: "eip155",
        injected_id: "isMetaMask",
      },
    ],
  },
  {
    id: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
    name: "Trust Wallet",
    homepage: "https://trustwallet.com/",
    image_id: "7677b54f-3486-46e2-4e37-bf8747814f00",
    order: 20,
    mobile_link: "trust://",
    desktop_link: null,
    webapp_link: null,
    app_store: "https://apps.apple.com/app/apple-store/id1288339409",
    play_store:
      "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",
    rdns: null,
    chrome_store:
      "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph",
    injected: [
      {
        namespace: "≈",
        injected_id: "isTrust",
      },
      {
        namespace: "eip155",
        injected_id: "isTrustWallet",
      },
    ],
  },
  {
    id: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
    name: "Safe",
    homepage: "https://safe.global/",
    image_id: "3913df81-63c2-4413-d60b-8ff83cbed500",
    order: 30,
    mobile_link: "safe://",
    desktop_link: null,
    webapp_link: "https://app.safe.global/",
    app_store: "https://apps.apple.com/app/id1515759131",
    play_store: "https://play.google.com/store/apps/details?id=io.gnosis.safe",
    rdns: null,
    chrome_store: null,
    injected: null,
  },
  {
    id: "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",
    name: "Rainbow",
    homepage: "https://rainbow.me/",
    image_id: "7a33d7f1-3d12-4b5c-f3ee-5cd83cb1b500",
    order: 40,
    mobile_link: "rainbow://",
    desktop_link: null,
    webapp_link: null,
    app_store:
      "https://apps.apple.com/app/apple-store/id1457119021?pt=119997837&ct=wc&mt=8",
    play_store:
      "https://play.google.com/store/apps/details?id=me.rainbow&referrer=utm_source%3Dwc%26utm_medium%3Dconnector%26utm_campaign%3Dwc",
    rdns: "me.rainbow",
    chrome_store:
      "https://chrome.google.com/webstore/detail/rainbow/opfgelmcmbiajamepnmloijbpoleiama?utm_source=wc&utm_medium=connector&utm_campaign=wc",
    injected: [
      {
        namespace: "eip155",
        injected_id: "isRainbow",
      },
    ],
  },
];
