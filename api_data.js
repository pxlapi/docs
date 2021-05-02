define({ "api": [
  {
    "type": "get",
    "url": "/imagescript/versions",
    "title": "ImageScript versions",
    "group": "Image_Manipulation",
    "description": "<p>Lists the available <a href=\"https://github.com/matmen/ImageScript/releases\">ImageScript versions</a> pxlAPI supports</p>",
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/ImageScript.js",
    "groupTitle": "Image_Manipulation",
    "name": "GetImagescriptVersions"
  },
  {
    "type": "post",
    "url": "/emojimosaic",
    "title": "Emoji Mosaic",
    "group": "Image_Manipulation",
    "description": "<p>Turns the given image into a mosaic of emojis. First image will be the image recreated, all following images will be used as custom emojis</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "6.."
            ],
            "optional": true,
            "field": "groupSize",
            "description": "<p>How big of a pixel square to group into one emoji. Defaults to a 32x32 emoji result</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "scale",
            "defaultValue": "false",
            "description": "<p>Whether to resize the resulting image to the original images dimensions</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string[]",
            "optional": false,
            "field": "images",
            "description": "<p>The image URL(s) to process</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/EmojiMosaic.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostEmojimosaic",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "null",
            "description": "<p>The processed image data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid (see response text for more info)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/eyes/:type",
    "title": "Eyes",
    "group": "Image_Manipulation",
    "description": "<p>Applies different types of eyes to the faces in the image. Accepts one image with at least one human face</p>",
    "parameter": {
      "fields": {
        "Path Arguments": [
          {
            "group": "Path Arguments",
            "type": "string",
            "allowedValues": [
              "\"big\"",
              "\"black\"",
              "\"bloodshot\"",
              "\"blue\"",
              "\"default\"",
              "\"googly\"",
              "\"green\"",
              "\"horror\"",
              "\"illuminati\"",
              "\"money\"",
              "\"pink\"",
              "\"red\"",
              "\"small\"",
              "\"spinner\"",
              "\"spongebob\"",
              "\"white\"",
              "\"yellow\"",
              "\"random\""
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "default",
            "description": "<p>The eye type to apply</p>"
          }
        ],
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string[]",
            "optional": true,
            "field": "types",
            "description": "<p>What types to limit &quot;random&quot; to (defaults to all available filters)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string[]",
            "optional": false,
            "field": "images",
            "description": "<p>The image URL(s) to process</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/Eyes.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostEyesType",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "null",
            "description": "<p>The processed image data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid (see response text for more info)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/flag/:flag",
    "title": "Flag",
    "group": "Image_Manipulation",
    "description": "<p>Overlays the given flag onto the given image</p>",
    "parameter": {
      "fields": {
        "Path Arguments": [
          {
            "group": "Path Arguments",
            "type": "string",
            "allowedValues": [
              "\"asexual\"",
              "\"aromantic\"",
              "\"bisexual\"",
              "\"pansexual\"",
              "\"gay\"",
              "\"lesbian\"",
              "\"trans\"",
              "\"nonbinary\"",
              "\"genderfluid\"",
              "\"genderqueer\"",
              "\"polysexual\"",
              "\"austria\"",
              "\"belgium\"",
              "\"botswana\"",
              "\"bulgaria\"",
              "\"ivory\"",
              "\"estonia\"",
              "\"france\"",
              "\"gabon\"",
              "\"gambia\"",
              "\"germany\"",
              "\"guinea\"",
              "\"hungary\"",
              "\"indonesia\"",
              "\"ireland\"",
              "\"italy\"",
              "\"luxembourg\"",
              "\"monaco\"",
              "\"nigeria\"",
              "\"poland\"",
              "\"russia\"",
              "\"romania\"",
              "\"sierraleone\"",
              "\"thailand\"",
              "\"ukraine\"",
              "\"yemen\""
            ],
            "optional": true,
            "field": "flag",
            "defaultValue": "gay",
            "description": "<p>The flag to overlay</p>"
          }
        ],
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "64..192"
            ],
            "optional": true,
            "field": "opacity",
            "defaultValue": "128",
            "description": "<p>What opacity to overlay the flag with</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string[]",
            "optional": false,
            "field": "images",
            "description": "<p>The image URL(s) to process</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/Flag.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostFlagFlag",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "null",
            "description": "<p>The processed image data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid (see response text for more info)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/flash",
    "title": "Flash",
    "group": "Image_Manipulation",
    "description": "<p>Creates a flashy GIF from the given image (inverts every other frame)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "allowedValues": [
              "20..100"
            ],
            "optional": true,
            "field": "delay",
            "defaultValue": "40",
            "description": "<p>The delay to apply between frames (when generating a GIF from a static image)</p>"
          }
        ],
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string[]",
            "optional": false,
            "field": "images",
            "description": "<p>The image URL(s) to process</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/Flash.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostFlash",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "null",
            "description": "<p>The processed image data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid (see response text for more info)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/glitch",
    "title": "Glitch",
    "group": "Image_Manipulation",
    "description": "<p>Applies a glitch effect to the given image</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "iterations",
            "defaultValue": "10",
            "description": "<p>How many byte chunks to modify</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "amount",
            "defaultValue": "5",
            "description": "<p>Byte chunk length</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean|object",
            "optional": true,
            "field": "gif",
            "description": "<p>Additional information for glitching static images into a GIF</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..30"
            ],
            "optional": true,
            "field": "gif.count",
            "defaultValue": "10",
            "description": "<p>How many frames to generate</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "10..1000"
            ],
            "optional": true,
            "field": "gif.delay",
            "defaultValue": "100",
            "description": "<p>How long to display each frame for (in ms)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string[]",
            "optional": false,
            "field": "images",
            "description": "<p>The image URL(s) to process</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/Glitch.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostGlitch",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "null",
            "description": "<p>The processed image data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid (see response text for more info)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/imagescript/:version",
    "title": "ImageScript",
    "group": "Image_Manipulation",
    "description": "<p>BETA<br> Runs <a href=\"https://github.com/matmen/ImageScript\">ImageScript</a> code as a service.<br><br> Exposes a polyfill <code>fetch(url, init)</code> function which supports the following <code>init</code> parameters: <code>method</code>, <code>headers</code>, <code>body</code>.<br> Returns a polyfill Response object with the following properties: <code>headers</code>, <code>redirected</code>, <code>status</code>, <code>statusText</code>, <code>ok</code>, <code>url</code>, <code>arrayBuffer()</code>, <code>text()</code>, <code>json()</code>.<br> Limited to 20 fetch calls per script evaluation.</p>",
    "parameter": {
      "fields": {
        "Path Arguments": [
          {
            "group": "Path Arguments",
            "type": "string",
            "optional": true,
            "field": "version",
            "defaultValue": "latest",
            "description": "<p>The <a href=\"https://github.com/matmen/ImageScript/releases\">ImageScript version</a> to use</p>"
          }
        ],
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>The code to evaluate</p>"
          },
          {
            "group": "Request Parameters",
            "type": "object",
            "optional": true,
            "field": "inject",
            "description": "<p>The data to inject as global variables</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1000..20000"
            ],
            "optional": true,
            "field": "timeout",
            "defaultValue": "10000",
            "description": "<p>Maximum run time in ms</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/ImageScript.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostImagescriptVersion",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "null",
            "description": "<p>The processed image data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid (see response text for more info)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/jpeg",
    "title": "JPEG",
    "group": "Image_Manipulation",
    "description": "<p>Applies a low-quality JPEG effect to the given image</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "defaultValue": "1",
            "description": "<p>What JPEG quality to encode the image as</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string[]",
            "optional": false,
            "field": "images",
            "description": "<p>The image URL(s) to process</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/JPEG.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostJpeg",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "null",
            "description": "<p>The processed image data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid (see response text for more info)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/lego",
    "title": "Lego",
    "group": "Image_Manipulation",
    "description": "<p>Turns the given image into a plane of LEGO 1x1 pieces</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "6.."
            ],
            "optional": true,
            "field": "groupSize",
            "description": "<p>How big of a pixel square to group into one brick. Defaults to a 32x32 brick result</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "scale",
            "defaultValue": "false",
            "description": "<p>Whether to resize the resulting image to the original images dimensions</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string[]",
            "optional": false,
            "field": "images",
            "description": "<p>The image URL(s) to process</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/Lego.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostLego",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "null",
            "description": "<p>The processed image data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid (see response text for more info)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/snapchat/:filter",
    "title": "Snapchat",
    "group": "Image_Manipulation",
    "description": "<p>Applies a snapchat-like filter to the faces in the image. Accepts one image with at least one human face</p>",
    "parameter": {
      "fields": {
        "Path Arguments": [
          {
            "group": "Path Arguments",
            "type": "string",
            "allowedValues": [
              "\"dog\"",
              "\"dog2\"",
              "\"dog3\"",
              "\"pig\"",
              "\"flowers\"",
              "\"random\""
            ],
            "optional": true,
            "field": "filter",
            "defaultValue": "dog",
            "description": "<p>The filter to apply</p>"
          }
        ],
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string[]",
            "optional": true,
            "field": "filters",
            "description": "<p>What filters to limit &quot;random&quot; to (defaults to all available filters)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string[]",
            "optional": false,
            "field": "images",
            "description": "<p>The image URL(s) to process</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/Snapchat.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostSnapchatFilter",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "null",
            "description": "<p>The processed image data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid (see response text for more info)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/sonic",
    "title": "Sonic",
    "group": "Image_Manipulation",
    "description": "<p>Renders the given text on a sonic quote template</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "1..1000"
            ],
            "optional": false,
            "field": "text",
            "description": "<p>What text to print into the speech bubble</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/Sonic.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostSonic",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "null",
            "description": "<p>The processed image data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid (see response text for more info)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/thonkify",
    "title": "Thonkify",
    "group": "Image_Manipulation",
    "description": "<p>Renders the given text in a thinking font</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "size": "1..70",
            "optional": false,
            "field": "text",
            "description": "<p>The text to render</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/Thonkify.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostThonkify",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "null",
            "description": "<p>The processed image data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid (see response text for more info)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/image_search",
    "title": "Image Search",
    "group": "Utility",
    "description": "<p>Searches the internet for images matching the given query</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "1..128"
            ],
            "optional": false,
            "field": "query",
            "description": "<p>The query to search for</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"off\"",
              "\"moderate\"",
              "\"strict\""
            ],
            "optional": true,
            "field": "safeSearch",
            "defaultValue": "strict",
            "description": "<p>What safe search setting to use</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "meta",
            "defaultValue": "false",
            "description": "<p>Whether to return meta data (page title and URL)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string[]|object[]",
            "optional": false,
            "field": "body",
            "description": "<p>An array of image URLs (when <code>meta = false</code>) or image objects (when <code>meta = true</code>)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "body.url",
            "description": "<p>The images URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "body.title",
            "description": "<p>The images page title</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "body.location",
            "description": "<p>The images location (page URL)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>No results were found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/util/ImageSearch.js",
    "groupTitle": "Utility",
    "name": "PostImage_search",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/klines/:pair",
    "title": "KLines",
    "group": "Utility",
    "description": "<p>Creates a candlestick chart for the given coin pair / ticks</p>",
    "parameter": {
      "fields": {
        "Path Arguments": [
          {
            "group": "Path Arguments",
            "type": "string",
            "optional": true,
            "field": "pair",
            "description": "<p>The <a href=\"https://www.binance.com/api/v3/exchangeInfo\">coin pair</a> to generate a candlestick chart for (e.g. <code>BNBBUSD</code>). Optional if custom ticks are sent.</p>"
          }
        ],
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"1m\"",
              "\"3m\"",
              "\"5m\"",
              "\"15m\"",
              "\"30m\"",
              "\"1h\"",
              "\"2h\"",
              "\"4h\"",
              "\"6h\"",
              "\"8h\"",
              "\"12h\"",
              "\"1d\"",
              "\"3d\"",
              "\"1w\"",
              "\"1mo\""
            ],
            "optional": true,
            "field": "interval",
            "defaultValue": "1m",
            "description": "<p>Timespan between candlesticks</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "..1000"
            ],
            "optional": true,
            "field": "limit",
            "defaultValue": "90",
            "description": "<p>How many candlesticks to draw</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number[][]",
            "optional": true,
            "field": "ticks",
            "description": "<p>Custom ticks (lets you send in <a href=\"https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data\">binance API compatible</a> tick data)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "object",
            "optional": true,
            "field": "pair",
            "description": "<p>Custom pair data to display</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "pair.baseAsset",
            "description": "<p>Custom base asset name to display</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "pair.quoteAsset",
            "description": "<p>Custom quote asset name to display</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/util/KLines.js",
    "groupTitle": "Utility",
    "name": "PostKlinesPair",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "null",
            "description": "<p>The processed image data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid (see response text for more info)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/screenshot",
    "title": "Screenshot",
    "group": "Utility",
    "description": "<p>Screenshots the given URL (optionally with the given language and device emulation)</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>The URL to screenshot</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "device",
            "description": "<p>The device to emulate. See <a href=\"https://github.com/microsoft/playwright/blob/17e953c2d8bd19ace20059ffaaa85f3f23cfb19d/src/server/deviceDescriptors.js#L21-L857\">list of available devices</a>. Defaults to a non-specific browser with a viewport of 1920x1080 pixels.</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "locale",
            "defaultValue": "en-US",
            "description": "<p>The locale to set the browser to</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string[]",
            "optional": true,
            "field": "blocklist",
            "description": "<p>A list of domains to block</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "defaultBlocklist",
            "defaultValue": "true",
            "description": "<p>Whether to block a list of predefined, known-bad domains (e.g. NSFW content)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"chromium\"",
              "\"firefox\""
            ],
            "optional": true,
            "field": "browser",
            "defaultValue": "chromium",
            "description": "<p>What browser engine to use for screenshotting</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"dark\"",
              "\"light\""
            ],
            "optional": true,
            "field": "theme",
            "defaultValue": "dark",
            "description": "<p>What theme to use</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "size": "1000..30000",
            "optional": true,
            "field": "timeout",
            "defaultValue": "20000",
            "description": "<p>The max time to wait until the site has loaded (in ms)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "fullPage",
            "defaultValue": "false",
            "description": "<p>Whether to capture the entire page</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/util/Screenshot.js",
    "groupTitle": "Utility",
    "name": "PostScreenshot",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "null",
            "description": "<p>The processed image data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid (see response text for more info)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/web_search",
    "title": "Web Search",
    "group": "Utility",
    "description": "<p>Searches the internet for websites matching the given query</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "1..128"
            ],
            "optional": false,
            "field": "query",
            "description": "<p>The query to search for</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"off\"",
              "\"moderate\"",
              "\"strict\""
            ],
            "optional": true,
            "field": "safeSearch",
            "defaultValue": "strict",
            "description": "<p>What safe search setting to use</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "results",
            "description": "<p>An array of web results</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "results.title",
            "description": "<p>The result's title</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "results.description",
            "description": "<p>The result's description</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "results.url",
            "description": "<p>The result's URL</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "news",
            "description": "<p>An array of news results</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "news.title",
            "description": "<p>The news entry's title</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "news.source",
            "description": "<p>The news entry's source</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "news.image",
            "description": "<p>The news entry's image</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "news.url",
            "description": "<p>The news entry's URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "images",
            "description": "<p>An array of related image URLs. If you want to search for images only, use <a href=\"#PostImage_search\">Image Search</a> instead.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "relatedQueries",
            "description": "<p>An array of related queries</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>No results were found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/util/WebSearch.js",
    "groupTitle": "Utility",
    "name": "PostWeb_search",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Application access token (<code>Application APPLICATION_TOKEN</code>)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/management/applications/:id",
    "title": "Show Application",
    "group": "~Management",
    "description": "<p>Gets the specified applications data</p>",
    "parameter": {
      "fields": {
        "Path Arguments": [
          {
            "group": "Path Arguments",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Application id (or &quot;@&quot; for authenticated application)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access token (&quot;Application APPLICATION_TOKEN&quot;)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/management/application/Application.js",
    "groupTitle": "~Management",
    "name": "GetManagementApplicationsId",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The applications unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "owner_id",
            "description": "<p>The applications owners user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "display_name",
            "description": "<p>The applications display name</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Whether the application is active or not</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>The applications API token</p>"
          },
          {
            "group": "Success 200",
            "type": "number|null",
            "optional": false,
            "field": "quota",
            "description": "<p>The applications processing time quota</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>The supplied authentication has no access to this resource</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>The given resource could not be found</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/management/users/:id",
    "title": "Show User",
    "group": "~Management",
    "description": "<p>Gets the given users data</p>",
    "parameter": {
      "fields": {
        "Path Arguments": [
          {
            "group": "Path Arguments",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The users ID (or &quot;@&quot; for the authenticated user)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access token (&quot;Application APPLICATION_TOKEN&quot;)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/management/user/User.js",
    "groupTitle": "~Management",
    "name": "GetManagementUsersId",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The users unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email_address",
            "description": "<p>The users email address</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "display_name",
            "description": "<p>The users display name</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "permissions_value",
            "description": "<p>The users permissions integer</p>"
          },
          {
            "group": "Success 200",
            "type": "string|null",
            "optional": false,
            "field": "discord_id",
            "description": "<p>The users linked Discord account ID</p>"
          },
          {
            "group": "Success 200",
            "type": "number|null",
            "optional": false,
            "field": "quota",
            "description": "<p>The users processing time quota (in ms)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "monthly_credits",
            "description": "<p>The users remaining monthly credits</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "credits",
            "description": "<p>The users remaining purchased credits</p>"
          },
          {
            "group": "Success 200",
            "type": "number|null",
            "optional": false,
            "field": "credit_alert",
            "description": "<p>The users active credit alert</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>The given resource could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>The supplied authentication has no access to this resource</p>"
          }
        ]
      }
    }
  }
] });
