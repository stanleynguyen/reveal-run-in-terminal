self.window = {};
importScripts('/plugin/hl-9.0.0.js');

onmessage = event => {
  postMessage({
    code: self.hljs.highlightAuto(event.data.code),
    callbackId: event.data.callbackId,
  });
};
