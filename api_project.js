define({
  "name": "pxlAPI",
  "version": "0.0.0",
  "description": "pxlAPI Image Processing API",
  "title": "pxlAPI documentation",
  "header": {
    "title": "Introduction",
    "content": "<h2><strong>Introduction</strong></h2>\n<p><strong>pxlAPI</strong> is an HTTP image processing/manipulation API that also provides other miscellaneous services (e.g. web\nscraping).</p>\n<h3>Sending requests</h3>\n<p>All requests to <strong>pxlAPI</strong> should go to the APIs base URL (<code>https://api.pxlapi.dev/</code>), followed by the path of the\naction you want to execute (for example <code>https://api.pxlapi.dev/emojimosaic</code>). All available actions are documented on\nthis page.</p>\n<p>Most requests require an application access token to be supplied. This can be done by setting the <code>Authentication</code> HTTP\nheader to a value of <code>Application &lt;token&gt;</code>. Your Applications access tokens are available via\nthe <a href=\"https://pxlapi.dev\">management panel</a>.</p>\n<p>All JSON <code>POST</code> and <code>PATCH</code> requests should include a <code>Content-Type</code> header with a value of <code>application/json</code>. If this\nheader is not supplied, the API will interpret the input as a binary buffer. The <code>Content-Type</code> header can be omitted\nwhen directly <code>POST</code>ing image data to the API, image type auto detection will be run here.</p>\n<p>When directly <code>POST</code>ing an image, controller parameters will be retrieved from the requests query\nparameters (<code>?parameter=value</code>). The JSON request body, if supplied, will always take priority.</p>\n<h3>Credits</h3>\n<p>Users get 30,000 free credits per month. This is equivalent to 5 minutes of processing time, assuming no special\nfeatures (like face detection) have been used. For users who require more credits, paid credit packages are available\nvia the management dashboard. When a user runs out of credits, the API will respond with a <code>402 Payment Required</code>.</p>\n<p>Please note that GIF processing can yield a large amount of processing time (and calls to face detection), so you might\nwant to either limit the count of frames to process (via the <code>frameCount</code> request parameter), or instead only process a\nsingle frame of the GIF (either by directly supplying a still image (JPEG or PNG), or by setting <code>frameCount</code> to 1).</p>\n<h3>Quota</h3>\n<p>Quota limits the amount of credits users and applications can spend per day. There are no quota limit set by default,\nbut custom limits can be set either via the edit account tab or the applications settings in the management portal. This\ncan be useful if you don't want a single application to use up all your credits, or you want to limit how many credits\nyou want to spend per day. When an application exceeds the set quota limits, the API will respond with\na <code>429 Too Many Requests</code></p>\n"
  },
  "template": {
    "withCompare": false,
    "withGenerator": false
  },
  "useHostUrlAsSampleUrl": false,
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2021-03-05T18:00:22.362Z",
    "url": "https://apidocjs.com",
    "version": "0.25.0"
  }
});
