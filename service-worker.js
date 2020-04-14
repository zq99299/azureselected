/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e2caa65af4fc08a886177e0dc0e9cce6"
  },
  {
    "url": "assets/css/0.styles.8970f8ee.css",
    "revision": "3598d3815a9dc63cd89273845abe06da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.54e5233c.js",
    "revision": "d5823d3e126983ab4aaf65a47ace90f3"
  },
  {
    "url": "assets/js/11.cd3df416.js",
    "revision": "45bc4cb829f95e90eb51ed255494f6b1"
  },
  {
    "url": "assets/js/12.7fdab60b.js",
    "revision": "4e95db84b35f4499b09533f98db9dbaa"
  },
  {
    "url": "assets/js/13.92642c95.js",
    "revision": "60bf7830d36611af4439acaafe2a24a5"
  },
  {
    "url": "assets/js/14.35292508.js",
    "revision": "46220734decbb8e5e1ffe6f1ab1c72c7"
  },
  {
    "url": "assets/js/15.6bf1f6eb.js",
    "revision": "351a8caf2c422642c5396f2c1a5c5491"
  },
  {
    "url": "assets/js/16.fef45c3c.js",
    "revision": "75d91a9aa992200ea3a54c301fd483e9"
  },
  {
    "url": "assets/js/17.2f736bcd.js",
    "revision": "7a4b3dd28b7abefbbb31d6418a39ebda"
  },
  {
    "url": "assets/js/18.0de4b2ee.js",
    "revision": "90114ab948733897e234e5379d106cb6"
  },
  {
    "url": "assets/js/19.df1949e3.js",
    "revision": "206cd59677189ad81e880147fcb9447f"
  },
  {
    "url": "assets/js/2.024090f7.js",
    "revision": "ed926cadc31732b620577d49a5699f36"
  },
  {
    "url": "assets/js/20.9b57aff5.js",
    "revision": "3248b29f47f92bc39523e37040653dab"
  },
  {
    "url": "assets/js/21.33250630.js",
    "revision": "632d42426eef6f06196ae69c7467f339"
  },
  {
    "url": "assets/js/22.490c1ea1.js",
    "revision": "467550699c77423006195c15caa0aff6"
  },
  {
    "url": "assets/js/23.986d72c3.js",
    "revision": "e43a02e0f971e57757fa1df411cb955f"
  },
  {
    "url": "assets/js/24.f4bb1e22.js",
    "revision": "5f646d15acb48d4baffbb0b318eb352c"
  },
  {
    "url": "assets/js/25.906da7d9.js",
    "revision": "766b52cc3edec16eed549986d866e491"
  },
  {
    "url": "assets/js/26.f5e9fe46.js",
    "revision": "f348e3aa6d132cabec0de2465d0a8e99"
  },
  {
    "url": "assets/js/27.a3ead658.js",
    "revision": "2baaee75a6a31a8dda83db5bf657201a"
  },
  {
    "url": "assets/js/28.237e395a.js",
    "revision": "224ce9237e8bdf219c4bc2c8a8cb5934"
  },
  {
    "url": "assets/js/29.af301d10.js",
    "revision": "dd1d3c2502c9f9ad99dd53cd00bfcb92"
  },
  {
    "url": "assets/js/3.c99638c5.js",
    "revision": "12e20176f3446bc033ced6d68e329889"
  },
  {
    "url": "assets/js/30.c2566ce5.js",
    "revision": "a305ef0e566e5bd7f40c1d24b25e9413"
  },
  {
    "url": "assets/js/31.5d60b26c.js",
    "revision": "2cbee3a679741ab8cda5fdc49a8f0305"
  },
  {
    "url": "assets/js/32.fd3eee7e.js",
    "revision": "8dac487bf241823f2172a01b8b5cdc02"
  },
  {
    "url": "assets/js/33.60d35447.js",
    "revision": "94550e9e858814f683b7b1d5c19c19e4"
  },
  {
    "url": "assets/js/34.76b802a1.js",
    "revision": "0caa8aa177e2f1377e497edd77e64d50"
  },
  {
    "url": "assets/js/35.c0d5cde9.js",
    "revision": "9011b5284a8d9be8fc497848f07a5b74"
  },
  {
    "url": "assets/js/36.ce441778.js",
    "revision": "085814820341f347e1d7300de4955810"
  },
  {
    "url": "assets/js/37.53a9472b.js",
    "revision": "7077f4e386d0d6fafc0e9b3e5dbf8035"
  },
  {
    "url": "assets/js/38.f3bdb7a1.js",
    "revision": "19d7fa114ac475368b49caba12a9f7a6"
  },
  {
    "url": "assets/js/39.2be3d3a1.js",
    "revision": "0eff3227661e5813a4c4f0a527735fe2"
  },
  {
    "url": "assets/js/4.209f09af.js",
    "revision": "6177bcd1f8f58911e44ca80ff7bc469f"
  },
  {
    "url": "assets/js/40.1742313e.js",
    "revision": "015250170386bfda22d3e52ca61f87ce"
  },
  {
    "url": "assets/js/41.07900bd1.js",
    "revision": "937606eef775ffd1e8a34c5f5d28f7b7"
  },
  {
    "url": "assets/js/42.52b31133.js",
    "revision": "9a27b6d68cc575b8c61bc6909653e184"
  },
  {
    "url": "assets/js/43.ad4743a1.js",
    "revision": "a6c5a6d4bc92977b285d0b9bf6110b59"
  },
  {
    "url": "assets/js/44.a9654cc5.js",
    "revision": "df780b07d6f7512cd623b3815d0662f8"
  },
  {
    "url": "assets/js/45.e5b10457.js",
    "revision": "ced45d5609f5b71f80c0abbd3e5bd1d7"
  },
  {
    "url": "assets/js/46.5abc2616.js",
    "revision": "5fa8f28865eaca27ea18aa23419a7ff9"
  },
  {
    "url": "assets/js/47.95a6ea4e.js",
    "revision": "568df1a30fa3a18483f270cddbb1557b"
  },
  {
    "url": "assets/js/48.8dfc0dae.js",
    "revision": "edb888d257aa420c70de3d7a5c343bce"
  },
  {
    "url": "assets/js/49.2906b3a6.js",
    "revision": "75b7893e646f54d7731b09f636e1ec42"
  },
  {
    "url": "assets/js/5.4abcb495.js",
    "revision": "46c54d19d48d297dae47f0813dc03112"
  },
  {
    "url": "assets/js/50.f85bc68e.js",
    "revision": "50031cb669e8685195b9fc2366ba6c63"
  },
  {
    "url": "assets/js/51.cd8b0728.js",
    "revision": "7f258d309367e9d74a90334be858c80d"
  },
  {
    "url": "assets/js/52.59653a15.js",
    "revision": "ff01f7ae7ff0eed7b26a6acd3f2bf369"
  },
  {
    "url": "assets/js/53.9bcffc9a.js",
    "revision": "c5b2cf3e9c1ae909eefbc45628b71c92"
  },
  {
    "url": "assets/js/54.bcdf8c4b.js",
    "revision": "b6aa9169c2003f7c44b55da41440d94b"
  },
  {
    "url": "assets/js/55.ce4aa210.js",
    "revision": "047027c772a7f49401e9ceaca4aec112"
  },
  {
    "url": "assets/js/56.0560d544.js",
    "revision": "29023c07ade726990f38f3def73d4818"
  },
  {
    "url": "assets/js/6.8e24df31.js",
    "revision": "564d2ec58d41b57ad36398959cc52361"
  },
  {
    "url": "assets/js/7.63807aba.js",
    "revision": "894bfe56454ce3304d28e492696b4739"
  },
  {
    "url": "assets/js/8.98289253.js",
    "revision": "a0047c4c720c4ec9144e972dbe1baa0d"
  },
  {
    "url": "assets/js/9.35305062.js",
    "revision": "e824a3d7a522828d6973bdb4ff686ba3"
  },
  {
    "url": "assets/js/app.62ea8ba9.js",
    "revision": "abeffbe3e133f4eaadcc9752a52fd6a8"
  },
  {
    "url": "CODE_OF_CONDUCT.html",
    "revision": "47629a515be56883ddc87ce864e7ea65"
  },
  {
    "url": "content/cloud-advocate/2019-12/deploying-java-ee-apps-to-azure-part-1.html",
    "revision": "9a86acf811a6b857a5c324a2ce6fbaec"
  },
  {
    "url": "content/cloud-advocate/2019-12/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "904e4345ebdf69029e3d445bf3d8c92f"
  },
  {
    "url": "content/cloud-advocate/2019-12/Manage-multiple-Azure-tenancies-with-Azure-Lighthouse.html",
    "revision": "dedc19e615908ab99c768047b5d2133a"
  },
  {
    "url": "content/cloud-advocate/2019-12/what-i-learned-about-azure-arc-and-other-services-at-microsoft-ignite-2019.html",
    "revision": "00ff149f87516ad1a13471c68d1af285"
  },
  {
    "url": "content/cloud-advocate/2020-01/can-you-use-blazor-for-only-part-of-an-app.html",
    "revision": "b62ee994a31013fa1651c980f7af799c"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-2.html",
    "revision": "670ed5e054bdbbbab530d06ebe6ae99a"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-3.html",
    "revision": "1a160b7e59cb6cf944833c275894245b"
  },
  {
    "url": "content/cloud-advocate/2020-01/how-to-learn-microsoft-azure-in-2020.html",
    "revision": "53a0e604b8dee5e2ccceff844d1ffc63"
  },
  {
    "url": "content/cloud-advocate/2020-01/managing-security-with-azure-lighthouse-and-azure-arc.html",
    "revision": "06fb143da0978253c04fa623e881e391"
  },
  {
    "url": "content/cloud-advocate/2020-02/how-to-reduce-the-costs-of-your-azure-iaas-vms.html",
    "revision": "3db1bc89c5c63825b9e822d44288c9f2"
  },
  {
    "url": "content/cloud-advocate/2020-02/how-to-use-github-actions-to-deploy-an-azure-virtual-machine.html",
    "revision": "e6dc44e6482e925bfda8449c8dce79d2"
  },
  {
    "url": "content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "6b7325e6b591aa6c0a39c5c1248c94dc"
  },
  {
    "url": "content/cloud-advocate/2020-02/the-secret-art-of-debugging.html",
    "revision": "05e077ae3925ced998b9d0b74a3a3463"
  },
  {
    "url": "content/cloud-advocate/2020-03/9-advanced-tips-for-production-machine-learning.html",
    "revision": "7862a1d10cffe4832d53bb9c19acee89"
  },
  {
    "url": "content/cloud-advocate/2020-03/a-modern-developer-s-workflow-for-twine.html",
    "revision": "ab28532e1075cd5e1cbca5e974425bf0"
  },
  {
    "url": "content/cloud-advocate/2020-03/create-your-first-model-with-azure-custom-vision-and-python.html",
    "revision": "67e4090d9a85bc6813ec1a6db5ba5b1b"
  },
  {
    "url": "content/cloud-advocate/2020-03/getting-started-with-azureml-notebook-vms.html",
    "revision": "8d63908e05b38b4ee70f730f898f9f09"
  },
  {
    "url": "content/cloud-advocate/2020-04/creating-generative-art-using-gan-on-azureml.html",
    "revision": "186320e394c03a0634a8b34ef6ca3b8f"
  },
  {
    "url": "content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "b3e70e81bcf9b5ee909f0c8001460126"
  },
  {
    "url": "content/index.html",
    "revision": "b291459fac82b885e44eb0b980ffad54"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "fd2836235bc59689b105aad5f048e2dd"
  },
  {
    "url": "img/azure-bit.png",
    "revision": "162128b495a62b636fb9f217ecd71785"
  },
  {
    "url": "img/logo_azure.svg",
    "revision": "ee96dfb4ed5fa38ab074f7e6257f2250"
  },
  {
    "url": "index.html",
    "revision": "b530fe4867ba9f20723f7a88b3755c03"
  },
  {
    "url": "LICENSE.html",
    "revision": "86ad54cb0095b5a11d0504a575b38c3f"
  },
  {
    "url": "tags.html",
    "revision": "046a1bd7cce7c2b235867cffefdc2dea"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2019-12/deploying-java-ee-apps-to-azure-part-1.html",
    "revision": "d19c62e486f6a2545e3afaf5cbdb88ee"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2019-12/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "e63033d99f1e60dfdf68163ff4f8c411"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/can-you-use-blazor-for-only-part-of-an-app.html",
    "revision": "e819890ed6b7ae9db0f684e8ab6d809b"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-2.html",
    "revision": "c620841276a4118c057714a9a3d68ccb"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-3.html",
    "revision": "e5c3a07315e6de1c7172c7d8ba1e2a48"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/how-to-learn-microsoft-azure-in-2020.html",
    "revision": "e234391e3616ae7499a11f2e9776fb6d"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/managing-security-with-azure-lighthouse-and-azure-arc.html",
    "revision": "d3c8cee3da53df2a04f1ba6c2d7fc791"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/how-to-reduce-the-costs-of-your-azure-iaas-vms.html",
    "revision": "72e7612b714f5b7adb6badbc388a20cb"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/how-to-use-github-actions-to-deploy-an-azure-virtual-machine.html",
    "revision": "04b6e003b0344d82b37856427cdd3df1"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "0dd73ea16526b4ad5804666f8bb38a21"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/the-secret-art-of-debugging.html",
    "revision": "b235b80bbc9154babcfacec591217a5d"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-03/a-modern-developer-s-workflow-for-twine.html",
    "revision": "2b2b3295b92393d4ab351fb83e0de0d5"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-03/create-your-first-model-with-azure-custom-vision-and-python.html",
    "revision": "c10768a2467315d53c202ed28b2460cd"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-03/getting-started-with-azureml-notebook-vms.html",
    "revision": "432b851275f0550581b525e743829493"
  },
  {
    "url": "zh-cn/content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "083879782de3e988ac8e03b6f592a4f3"
  },
  {
    "url": "zh-cn/content/index.html",
    "revision": "4c4738ee6086060b74459c9546f91525"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "c0e0cebb51f4533d0bfec570a71fe3f9"
  },
  {
    "url": "zh-cn/tags.html",
    "revision": "16bf77824d937b7246912a020c605ecc"
  },
  {
    "url": "zh-tw/content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "39c959a3169559942fca609ff3f0dea5"
  },
  {
    "url": "zh-tw/content/index.html",
    "revision": "1ddeacc4fb4364557116a07b884378c8"
  },
  {
    "url": "zh-tw/index.html",
    "revision": "64c4d77b2be425971947b9d6511492ee"
  },
  {
    "url": "zh-tw/tags.html",
    "revision": "a5bb49a216b8fe91cab160e33ca6a0b1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
