// worker.js
onmessage = function(e) {
  let num = e.data;
  postMessage(num * 2);
};