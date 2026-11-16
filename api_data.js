define({ "api": [
  {
    "type": "get",
    "url": "/imagescript/versions",
    "title": "ImageScript versions",
    "group": "Image_Manipulation",
    "description": "<p>Lists the available <a href=\"https://github.com/imagescript/ImageScript/releases\">ImageScript versions</a> pxlAPI supports</p>",
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/ImageScript.js",
    "groupTitle": "Image_Manipulation",
    "name": "GetImagescriptVersions"
  },
  {
    "type": "post",
    "url": "/ajit",
    "title": "Ajit",
    "group": "Image_Manipulation",
    "description": "<p>Overlays an image of Ajit Pai snacking on some popcorn</p>",
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/Ajit.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostAjit",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/ascii",
    "title": "ASCII",
    "group": "Image_Manipulation",
    "description": "<p>Draws the image as ASCII art: every character cell gets the glyph that matches its brightness. The art is an image itself, so it can be shared like any other picture</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"classic\"",
              "\"matrix\"",
              "\"color\"",
              "\"paper\""
            ],
            "optional": true,
            "field": "style",
            "defaultValue": "classic",
            "description": "<p>White glyphs on black, green glyphs on black, glyphs in the cell's own color on black, or black glyphs on paper</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "optional": true,
            "field": "columns",
            "defaultValue": "100",
            "description": "<p>How many characters across the picture is, 20 to 200</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"simple\"",
              "\"detailed\"",
              "\"blocks\""
            ],
            "optional": true,
            "field": "ramp",
            "defaultValue": "simple",
            "description": "<p>The characters, from sparse to dense</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "invert",
            "defaultValue": "false",
            "description": "<p>Swap light and dark, so dark areas get the dense glyphs</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Ascii.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostAscii",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/bighead",
    "title": "Bighead",
    "group": "Image_Manipulation",
    "description": "<p>Finds the faces in the image and blows them up</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0.5..2"
            ],
            "optional": true,
            "field": "radius",
            "defaultValue": "1",
            "description": "<p>How far the effect reaches around each face</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0.2..2"
            ],
            "optional": true,
            "field": "strength",
            "defaultValue": "0.9",
            "description": "<p>How much bigger the faces get (0.9 makes them 1.9 times as big)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Bighead.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostBighead",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/blurfaces",
    "title": "Blur faces",
    "group": "Image_Manipulation",
    "description": "<p>Finds the faces in the given image and hides them. Images without faces are returned as they are. The faces are found on our own server, the image is not sent anywhere else</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"blur\"",
              "\"pixelate\"",
              "\"bar\""
            ],
            "optional": true,
            "field": "style",
            "defaultValue": "blur",
            "description": "<p>How to hide the faces</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"ellipse\"",
              "\"box\""
            ],
            "optional": true,
            "field": "shape",
            "defaultValue": "ellipse",
            "description": "<p>The shape of the hidden area</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0.1..1"
            ],
            "optional": true,
            "field": "strength",
            "defaultValue": "0.5",
            "description": "<p>How strongly to blur or how big the pixels are (not used for <code>bar</code>)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..1"
            ],
            "optional": true,
            "field": "padding",
            "defaultValue": "0.25",
            "description": "<p>How far the hidden area reaches past the face, relative to the face's size</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "color",
            "defaultValue": "#000000",
            "description": "<p>The color of the bar (hex, only used for <code>bar</code>)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Blurfaces.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostBlurfaces",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/bulge",
    "title": "Bulge",
    "group": "Image_Manipulation",
    "description": "<p>Pushes the picture out around a point or every face like a fisheye lens, or pulls it in with a negative <code>strength</code></p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"center\"",
              "\"faces\""
            ],
            "optional": true,
            "field": "target",
            "defaultValue": "center",
            "description": "<p>Whether to distort around a point or around every face in the image (an image without faces gives <code>NO_FACES_DETECTED</code>)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..1"
            ],
            "optional": true,
            "field": "x",
            "defaultValue": "0.5",
            "description": "<p>Where to distort, from left to right (when <code>target</code> is <code>center</code>)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..1"
            ],
            "optional": true,
            "field": "y",
            "defaultValue": "0.5",
            "description": "<p>Where to distort, from top to bottom (when <code>target</code> is <code>center</code>)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0.05..2"
            ],
            "optional": true,
            "field": "radius",
            "defaultValue": "0.5",
            "description": "<p>How far the distortion reaches, relative to the shorter side of the image (or to the size of each face)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "-0.9..3"
            ],
            "optional": true,
            "field": "strength",
            "defaultValue": "1",
            "description": "<p>How strongly to push out (negative values pull in)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Bulge.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostBulge",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/caption",
    "title": "Caption",
    "group": "Image_Manipulation",
    "description": "<p>Adds a classic image macro caption: a line of text at the top and/or at the bottom. The <code>bar</code> style puts black text on a white band above and/or below the picture, so nothing is covered; the <code>impact</code> style sets white text with a black outline over the picture. Long texts are set smaller, to at most two lines. Texts that are too long (more than 200 characters) give <code>INVALID_TOP</code> or <code>INVALID_BOTTOM</code></p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "size": "0..200",
            "optional": true,
            "field": "top",
            "description": "<p>The text at the top</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "size": "0..200",
            "optional": true,
            "field": "bottom",
            "description": "<p>The text at the bottom</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\\\"impact\\\"",
              "\\\"bar\\\""
            ],
            "optional": true,
            "field": "style",
            "defaultValue": "\\\"bar\\\"",
            "description": "<p><code>bar</code> for white bands with black text, <code>impact</code> for white text with an outline over the picture</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Caption.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostCaption",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/deepfry",
    "title": "Deepfry",
    "group": "Image_Manipulation",
    "description": "<p>Makes the picture &quot;deep fried&quot;: the colours are oversaturated and pushed to a red, orange and yellow cast, the contrast is crushed and clipped, the picture is posterized, lens flares are screened on the brightest spots, coloured noise and sharpening are added, and the picture is shrunk, enlarged and re-encoded as a very low quality JPEG several times, which leaves blocky artefacts and ringing</p>",
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
            "field": "amount",
            "defaultValue": "50",
            "description": "<p>How strongly to fry the picture: more saturation, more contrast, more flares, more grain, coarser blocks and more JPEG passes</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "lasers",
            "defaultValue": "false",
            "description": "<p>Adds glowing red laser eyes: each detected face gets a red glow and a beam at each pupil, running to the edge of the picture. Pictures without faces are returned as they would be without this parameter</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Deepfry.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostDeepfry",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/explode",
    "title": "Explode",
    "group": "Image_Manipulation",
    "description": "<p>Makes an animated GIF of the image swelling out from its center (or from every face), popping and wobbling back, looping seamlessly</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "8..24"
            ],
            "optional": true,
            "field": "frames",
            "defaultValue": "14",
            "description": "<p>Number of frames in one loop</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "64..512"
            ],
            "optional": true,
            "field": "size",
            "defaultValue": "320",
            "description": "<p>Width and height of the GIF in pixels</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0.2..2"
            ],
            "optional": true,
            "field": "strength",
            "defaultValue": "1",
            "description": "<p>How far the picture bulges</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"center\"",
              "\"faces\""
            ],
            "optional": true,
            "field": "target",
            "defaultValue": "center",
            "description": "<p>Whether to swell from the middle of the image or from every face in it (an image without faces gives <code>NO_FACES_DETECTED</code>)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "background",
            "defaultValue": "#000000",
            "description": "<p>Background color as hex (<code>#rgb</code> or <code>#rrggbb</code>), or <code>transparent</code>. Transparent GIFs leave traces of earlier frames in some viewers, so the default is opaque</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Explode.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostExplode",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/facemagik",
    "title": "FaceMagik",
    "group": "Image_Manipulation",
    "description": "<p>Applies another effect only inside the faces: the head of every face is distorted with the chosen effect, and the change fades out softly at the edge of the head, so the rest of the picture stays as it is. An image without faces gives <code>NO_FACES_DETECTED</code></p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\\\"magik\\\"",
              "\\\"pixelsort\\\"",
              "\\\"pixelate\\\"",
              "\\\"retro\\\"",
              "\\\"glitch\\\""
            ],
            "optional": true,
            "field": "effect",
            "defaultValue": "\\\"pixelsort\\\"",
            "description": "<p>The effect to apply inside the faces (<code>retro</code> gives the VHS look)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..1"
            ],
            "optional": true,
            "field": "padding",
            "defaultValue": "0.3",
            "description": "<p>How much of the surroundings of the face is included in the head, relative to the size of the face</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/FaceMagik.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostFacemagik",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/faceswap",
    "title": "Face swap",
    "group": "Image_Manipulation",
    "description": "<p>Swaps the faces in the image. The new face is warped onto the face it replaces point by point (a dense face mesh: outline, brows, eyes, nose and mouth), so it takes that face's shape, tilt and turn; it is blended in through a soft mask that follows the face's outline, and its light and colours are matched to the face it replaces. Faces the mesh does not fit (strongly turned ones, animals) are aligned by their eyes, nose and mouth alone. With one image the faces are swapped inside it (<code>mode</code> picks which ones). With two images the first one is the target and the largest face of the second one is put onto its faces (<code>which</code> picks which of them). An image without faces gives <code>NO_FACES_DETECTED</code>, a second image without a face gives <code>NO_SOURCE_FACE</code>, and a single image with fewer than two faces gives <code>NOT_ENOUGH_FACES</code></p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\\\"pair\\\"",
              "\\\"rotate\\\"",
              "\\\"largest\\\""
            ],
            "optional": true,
            "field": "mode",
            "defaultValue": "\\\"pair\\\"",
            "description": "<p>With one image: <code>pair</code> swaps the two biggest faces with each other, <code>rotate</code> gives every face the face of the next one (the last gets the first), <code>largest</code> puts the biggest face onto all the others</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\\\"all\\\"",
              "\\\"largest\\\""
            ],
            "optional": true,
            "field": "which",
            "defaultValue": "\\\"all\\\"",
            "description": "<p>With two images: put the face on every face of the first image, or only on its biggest face</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..1"
            ],
            "optional": true,
            "field": "strength",
            "defaultValue": "1",
            "description": "<p>How much of the new face shows (0 leaves the image as it is)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "colorMatch",
            "defaultValue": "true",
            "description": "<p>Whether to match the colours of the new face to the face it replaces, so skin tones and light fit</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Faceswap.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostFaceswap",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/facezoom",
    "title": "FaceZoom",
    "group": "Image_Manipulation",
    "description": "<p>Zooms into every face in the image, like a magnifying lens centred on it: the middle of each face is magnified and the picture falls back to normal around it. The <code>lines</code> style adds anime-like speed lines around the faces. With <code>animated</code> the zoom pulses from normal size to the given zoom and back, as a looping GIF. An image without faces gives <code>NO_FACES_DETECTED</code></p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1.2..4"
            ],
            "optional": true,
            "field": "zoom",
            "defaultValue": "2",
            "description": "<p>How much the faces are magnified in the middle</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\\\"zoom\\\"",
              "\\\"lines\\\""
            ],
            "optional": true,
            "field": "style",
            "defaultValue": "\\\"zoom\\\"",
            "description": "<p><code>lines</code> adds speed lines around the faces</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "animated",
            "defaultValue": "false",
            "description": "<p>Whether to return a looping GIF of the zoom pulsing in and out (its longer side is at most 512 pixels)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/FaceZoom.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostFacezoom",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/glow",
    "title": "Glow",
    "group": "Image_Manipulation",
    "description": "<p>Adds a soft bloom: the bright parts of the picture spill light into their surroundings, the way a lens or a strong light does. Higher amounts also give a soft-focus, slightly brighter, dreamy look</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..1"
            ],
            "optional": true,
            "field": "amount",
            "defaultValue": "0.5",
            "description": "<p>How strong the glow is (0.5 is a clear glow, 1 is dreamy and overexposed)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "tint",
            "description": "<p>Colour of the glow as hex (<code>#rgb</code> or <code>#rrggbb</code>); by default the glow keeps the colours of the picture</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..1"
            ],
            "optional": true,
            "field": "threshold",
            "defaultValue": "0.7",
            "description": "<p>How bright a part has to be to glow (0 makes everything glow, 1 nothing)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "2..60"
            ],
            "optional": true,
            "field": "radius",
            "defaultValue": "20",
            "description": "<p>How far the glow spreads, in pixels for a picture whose longer side is 1024 (larger pictures spread it proportionally further)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Glow.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostGlow",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "description": "<p>Runs <a href=\"https://github.com/imagescript/ImageScript\">ImageScript</a> code as a service.<br><br> Exposes a polyfill <code>fetch(url, init)</code> function which supports the following <code>init</code> parameters: <code>method</code>, <code>headers</code>, <code>body</code>.<br> Returns a polyfill Response object with the following properties: <code>headers</code>, <code>redirected</code>, <code>status</code>, <code>statusText</code>, <code>ok</code>, <code>url</code>, <code>arrayBuffer()</code>, <code>text()</code>, <code>json()</code>.<br> Limited to 20 fetch calls per script evaluation.<br><br> <code>latest</code> refers to ImageScript 3.x, which has breaking changes compared to 1.x (e.g. 0-based coordinates, see the <a href=\"https://github.com/imagescript/ImageScript/blob/master/CHANGELOG.md\">changelog</a>). Pass a 1.x version explicitly to keep running older scripts.</p>",
    "parameter": {
      "fields": {
        "Path Arguments": [
          {
            "group": "Path Arguments",
            "type": "string",
            "optional": true,
            "field": "version",
            "defaultValue": "latest",
            "description": "<p>The <a href=\"https://github.com/imagescript/ImageScript/releases\">ImageScript version</a> to use</p>"
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
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/implode",
    "title": "Implode",
    "group": "Image_Manipulation",
    "description": "<p>Makes an animated GIF of the image being pulled into its center (or into every face), springing back and wobbling, looping seamlessly</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "8..24"
            ],
            "optional": true,
            "field": "frames",
            "defaultValue": "14",
            "description": "<p>Number of frames in one loop</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "64..512"
            ],
            "optional": true,
            "field": "size",
            "defaultValue": "320",
            "description": "<p>Width and height of the GIF in pixels</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0.2..2"
            ],
            "optional": true,
            "field": "strength",
            "defaultValue": "0.8",
            "description": "<p>How hard the picture is pulled in</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"center\"",
              "\"faces\""
            ],
            "optional": true,
            "field": "target",
            "defaultValue": "center",
            "description": "<p>Whether to pull into the middle of the image or into every face in it (an image without faces gives <code>NO_FACES_DETECTED</code>)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "background",
            "defaultValue": "#000000",
            "description": "<p>Background color as hex (<code>#rgb</code> or <code>#rrggbb</code>), or <code>transparent</code>. Transparent GIFs leave traces of earlier frames in some viewers, so the default is opaque</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Implode.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostImplode",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/magik",
    "title": "Magik",
    "group": "Image_Manipulation",
    "description": "<p>Content-aware resizing, the classic &quot;magik&quot; meme: the seams of least visible change are removed from the image, so the subject keeps its shape while the background bends and warps. The result is stretched back to the original size by default, which makes the distortion visible. With <code>animated</code> the carving is shown as an animated GIF</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0.1..0.75"
            ],
            "optional": true,
            "field": "strength",
            "defaultValue": "0.5",
            "description": "<p>Share of the width and of the height that is removed</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "scale",
            "defaultValue": "true",
            "description": "<p>Whether to stretch the carved image back to the original size (ignored for animations, which always fill the canvas)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "animated",
            "defaultValue": "false",
            "description": "<p>Whether to return an animated GIF of the carving progress</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Magik.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostMagik",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/pat",
    "title": "Pat",
    "group": "Image_Manipulation",
    "description": "<p>Makes a pet-pet style animated GIF: a hand pats the image, which squashes down at every pat and springs back up</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "circle",
            "defaultValue": "true",
            "description": "<p>Whether to crop the image to a circle (otherwise it keeps a square shape with rounded corners)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "64..512"
            ],
            "optional": true,
            "field": "size",
            "defaultValue": "256",
            "description": "<p>Width and height of the GIF in pixels</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0.5..2"
            ],
            "optional": true,
            "field": "speed",
            "defaultValue": "1",
            "description": "<p>How fast the pats are</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "background",
            "defaultValue": "#000000",
            "description": "<p>Background color as hex (<code>#rgb</code> or <code>#rrggbb</code>), or <code>transparent</code>. Transparent GIFs leave traces of earlier frames in some viewers, so the default is opaque</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Pat.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostPat",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/pipeline",
    "title": "Pipeline",
    "group": "Image_Manipulation",
    "description": "<p>Runs an image through several effects in one request, each step working on the result of the one before. A step is an object with the effect's name as <code>op</code> and that effect's parameters next to it, for example <code>{&quot;op&quot;: &quot;pixelate&quot;, &quot;palette&quot;: &quot;gameboy&quot;}</code>. Every effect of the Image Manipulation endpoints that takes one image and returns one is available as a step; effects that return an animation can only be the last step.</p> <p>Available as steps: <code>pixelate</code>, <code>pixelsort</code>, <code>retro</code>, <code>ascii</code>, <code>glitch</code>, <code>jpeg</code>, <code>emojimosaic</code>, <code>lego</code>, <code>magik</code>, <code>bulge</code>, <code>swirl</code>, <code>bighead</code>, <code>blurfaces</code>, <code>smartcrop</code>, <code>facemagik</code>, <code>faceswap</code>, <code>facezoom</code>, <code>deepfry</code>, <code>glow</code>, <code>caption</code>, <code>speechbubble</code>, <code>removebg</code>, <code>quote</code>, <code>pat</code>, <code>zoomblur</code>, <code>shake</code>, <code>spin</code>, <code>rainbow</code>, <code>explode</code>, <code>implode</code>, <code>triggered</code> and <code>wave</code>.</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "object[]",
            "optional": false,
            "field": "steps",
            "description": "<p>The effects to apply, from first to last (1 to 8)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": false,
            "field": "steps.op",
            "description": "<p>The effect's name</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string[]",
            "optional": false,
            "field": "images",
            "description": "<p>The image URL(s) to process</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"images\": [\"https://example.com/photo.jpg\"],\n  \"steps\": [\n    {\"op\": \"pixelsort\", \"lower\": 0.2},\n    {\"op\": \"pixelate\", \"size\": 6, \"palette\": \"pico8\", \"dither\": \"ordered\"}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/image-manipulation/Pipeline.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostPipeline",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/pixelate",
    "title": "Pixelate",
    "group": "Image_Manipulation",
    "description": "<p>Turns the given image into pixel art: big pixels in a small set of colours, either the image's own (picked to match how the colours look, not just their numbers) or a fixed palette like the Game Boy's</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "2..256"
            ],
            "optional": true,
            "field": "size",
            "description": "<p>Edge length of one pixel in the result, in source pixels. Defaults to a result about 64 pixels on its longer side</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "2..64"
            ],
            "optional": true,
            "field": "colors",
            "defaultValue": "16",
            "description": "<p>How many colours to use (ignored when a palette is given)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string|string[]",
            "optional": true,
            "field": "palette",
            "description": "<p>A preset (<code>gameboy</code>, <code>pico8</code>, <code>c64</code>, <code>cga</code>, <code>grayscale</code>, <code>mono</code>) or a list of up to 64 hex colours like <code>[&quot;#1d2b53&quot;, &quot;#ff004d&quot;]</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"none\"",
              "\"ordered\"",
              "\"floyd-steinberg\""
            ],
            "optional": true,
            "field": "dither",
            "defaultValue": "none",
            "description": "<p>How to blend between colours for smoother gradients</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "scale",
            "defaultValue": "true",
            "description": "<p>Whether to scale the result back up to the size of the input (with sharp pixel edges)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Pixelate.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostPixelate",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/pixelsort",
    "title": "Pixelsort",
    "group": "Image_Manipulation",
    "description": "<p>Sorts the pixels in every row or column of the given image by brightness, hue or saturation wherever their brightness is inside a window. The result looks like the image melting into streaks</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"horizontal\"",
              "\"vertical\""
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "horizontal",
            "description": "<p>Whether to sort rows or columns</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"brightness\"",
              "\"hue\"",
              "\"saturation\""
            ],
            "optional": true,
            "field": "by",
            "defaultValue": "brightness",
            "description": "<p>What to sort by</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..1"
            ],
            "optional": true,
            "field": "lower",
            "defaultValue": "0.15",
            "description": "<p>Pixels darker than this stay where they are</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..1"
            ],
            "optional": true,
            "field": "upper",
            "defaultValue": "0.85",
            "description": "<p>Pixels brighter than this stay where they are</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "reverse",
            "defaultValue": "false",
            "description": "<p>Sort from bright to dark instead</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Pixelsort.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostPixelsort",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/quote",
    "title": "Quote",
    "group": "Image_Manipulation",
    "description": "<p>Renders a chat message in the look of a modern dark (or light) chat app: the picture as the avatar in a circle, the name in bold with the time next to it, and the text word-wrapped below. The text can use <strong>bold</strong>, <code>code</code> and @mentions (highlighted like in chat apps); <em>italic</em> is shown as plain text. Line breaks in the text are kept. An optional reply adds a short line above the message. Characters the font doesn't have (such as CJK) are left out. A missing or empty text gives <code>INVALID_TEXT</code></p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "size": "1..500",
            "optional": false,
            "field": "text",
            "description": "<p>The message text. Line breaks are kept</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "size": "1..32",
            "optional": true,
            "field": "name",
            "defaultValue": "pxlAPI",
            "description": "<p>The display name, shown in bold</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "size": "1..40",
            "optional": true,
            "field": "time",
            "defaultValue": "Today at 12:00",
            "description": "<p>The time stamp shown after the name</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "size": "1..120",
            "optional": true,
            "field": "reply",
            "description": "<p>A reply line shown above the message</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "color",
            "defaultValue": "#ffffff",
            "description": "<p>The colour of the name, as hex (<code>#rgb</code> or <code>#rrggbb</code>). The default is <code>#060607</code> on the light theme</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"dark\"",
              "\"amoled\"",
              "\"light\""
            ],
            "optional": true,
            "field": "theme",
            "defaultValue": "dark",
            "description": "<p>The colour theme</p>"
          },
          {
            "group": "Request Parameters",
            "type": "integer",
            "size": "320..1200",
            "optional": true,
            "field": "width",
            "defaultValue": "720",
            "description": "<p>The width of the image in pixels. The height follows the text</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "size": "1..3",
            "optional": true,
            "field": "scale",
            "defaultValue": "2",
            "description": "<p>The pixel ratio the text is set at, for crisp text</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Quote.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostQuote",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/rainbow",
    "title": "Rainbow",
    "group": "Image_Manipulation",
    "description": "<p>Makes an animated GIF in which a rainbow band sweeps across the image and its colors cycle, looping seamlessly</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "6..24"
            ],
            "optional": true,
            "field": "frames",
            "defaultValue": "12",
            "description": "<p>Number of frames in one loop</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "64..512"
            ],
            "optional": true,
            "field": "size",
            "defaultValue": "320",
            "description": "<p>Width and height of the GIF in pixels</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..1"
            ],
            "optional": true,
            "field": "opacity",
            "defaultValue": "0.4",
            "description": "<p>How strongly the rainbow shows over the picture</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "background",
            "defaultValue": "#000000",
            "description": "<p>Background color as hex (<code>#rgb</code> or <code>#rrggbb</code>), or <code>transparent</code>. Transparent GIFs leave traces of earlier frames in some viewers, so the default is opaque</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Rainbow.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostRainbow",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/removebg",
    "title": "Remove background",
    "group": "Image_Manipulation",
    "description": "<p>Cuts the subject out of the given image and makes the rest transparent. The subject is found on our own server, the image is not sent anywhere else. Use a format with transparency (<code>png</code> is the default, also <code>webp</code>, <code>avif</code> and <code>jxl</code>) or give a <code>background</code> color</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "background",
            "defaultValue": "transparent",
            "description": "<p>Fill the background with this color (hex, <code>#rgb</code> or <code>#rrggbb</code>) instead of making it transparent</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"cutout\"",
              "\"mask\""
            ],
            "optional": true,
            "field": "output",
            "defaultValue": "cutout",
            "description": "<p>Return the cut-out image, or only the mask (white is the subject) to use it in your own compositing</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "crop",
            "defaultValue": "false",
            "description": "<p>Crop the result to the subject</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/RemoveBg.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostRemovebg",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/retro",
    "title": "Retro",
    "group": "Image_Manipulation",
    "description": "<p>Gives the image an old-media look: the 1-bit black and white dithering of the original Macintosh, a newspaper halftone (colored or black dots), an old CRT monitor (curved glass, scanlines, shadow mask, bloom) or a worn VHS tape (jittering rows, bleeding color, noise and a tracking band)</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"mac\"",
              "\"halftone\"",
              "\"crt\"",
              "\"vhs\""
            ],
            "optional": true,
            "field": "style",
            "defaultValue": "mac",
            "description": "<p>The look to apply</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "optional": true,
            "field": "width",
            "defaultValue": "512",
            "description": "<p>For <code>mac</code>: the width in pixels of the dither grid, 64 to 1024</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "optional": true,
            "field": "size",
            "defaultValue": "10",
            "description": "<p>For <code>halftone</code>: the size of a dot cell in pixels, 4 to 40</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "color",
            "defaultValue": "true",
            "description": "<p>For <code>halftone</code>: colored (CMYK-style) dots on paper instead of black dots</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "optional": true,
            "field": "intensity",
            "defaultValue": "0.7",
            "description": "<p>How strong the effect is, 0 to 1</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "osd",
            "defaultValue": "false",
            "description": "<p>For <code>vhs</code>: a VCR &quot;PLAY&quot; on-screen display in the top-left corner</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Retro.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostRetro",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/shake",
    "title": "Shake",
    "group": "Image_Manipulation",
    "description": "<p>Makes an earthquake-like animated GIF: the image jitters with decaying offsets and a slight tilt, leaves a faint ghost of the previous frame and gets red and blue fringes along the direction of the shake</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0.1..1"
            ],
            "optional": true,
            "field": "intensity",
            "defaultValue": "0.6",
            "description": "<p>How violent the shaking is</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "6..24"
            ],
            "optional": true,
            "field": "frames",
            "defaultValue": "12",
            "description": "<p>Number of frames in the GIF</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "64..512"
            ],
            "optional": true,
            "field": "size",
            "defaultValue": "320",
            "description": "<p>Width and height of the GIF in pixels</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Shake.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostShake",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/smartcrop",
    "title": "Smart crop",
    "group": "Image_Manipulation",
    "description": "<p>Crops the given image to a size and keeps what matters in it: the faces if there are any (they are found on our own server), else the part of the image with the most detail</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "16..1024"
            ],
            "optional": true,
            "field": "width",
            "defaultValue": "512",
            "description": "<p>The width of the result</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "16..1024"
            ],
            "optional": true,
            "field": "height",
            "defaultValue": "512",
            "description": "<p>The height of the result</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"auto\"",
              "\"faces\"",
              "\"detail\""
            ],
            "optional": true,
            "field": "focus",
            "defaultValue": "auto",
            "description": "<p>What to keep: <code>faces</code> (<code>NO_FACES_DETECTED</code> if there are none), <code>detail</code>, or <code>auto</code> for faces if there are any and detail otherwise</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"all\"",
              "\"largest\""
            ],
            "optional": true,
            "field": "faces",
            "defaultValue": "all",
            "description": "<p>Whether to keep all faces or only the largest one</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..3"
            ],
            "optional": true,
            "field": "padding",
            "defaultValue": "0.8",
            "description": "<p>How much room to leave around the faces, relative to the largest face's size</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Smartcrop.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostSmartcrop",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
              "\"clown\"",
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
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/speechbubble",
    "title": "SpeechBubble",
    "group": "Image_Manipulation",
    "description": "<p>Places a speech bubble with text over the picture, in its top or bottom part. The bubble is white with a black outline and a tail that points at the speaker; the text wraps and shrinks to fit. A missing or empty text gives <code>INVALID_TEXT</code></p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "size": "1..280",
            "optional": false,
            "field": "text",
            "description": "<p>The text of the bubble</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\\\"top\\\"",
              "\\\"bottom\\\""
            ],
            "optional": true,
            "field": "position",
            "defaultValue": "\\\"top\\\"",
            "description": "<p>Whether the bubble is in the top or the bottom part of the picture</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\\\"left\\\"",
              "\\\"right\\\"",
              "\\\"none\\\""
            ],
            "optional": true,
            "field": "tail",
            "defaultValue": "\\\"left\\\"",
            "description": "<p>Which way the tail points (down for a bubble at the top, up for one at the bottom), or no tail at all</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/SpeechBubble.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostSpeechbubble",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/spin",
    "title": "Spin",
    "group": "Image_Manipulation",
    "description": "<p>Makes an animated GIF of the image turning around its center, looping seamlessly</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "circle",
            "defaultValue": "true",
            "description": "<p>Whether to crop the image to a circle (otherwise it keeps a square shape with rounded corners)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"clockwise\"",
              "\"counterclockwise\""
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "clockwise",
            "description": "<p>Direction of the turn</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0.5..3"
            ],
            "optional": true,
            "field": "speed",
            "defaultValue": "1",
            "description": "<p>How fast the image turns</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "zoom",
            "defaultValue": "false",
            "description": "<p>Whether the image also pulses in and out slightly</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "64..512"
            ],
            "optional": true,
            "field": "size",
            "defaultValue": "256",
            "description": "<p>Width and height of the GIF in pixels</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "background",
            "defaultValue": "#000000",
            "description": "<p>Background color as hex (<code>#rgb</code> or <code>#rrggbb</code>), or <code>transparent</code>. Transparent GIFs leave traces of earlier frames in some viewers, so the default is opaque</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Spin.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostSpin",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/swirl",
    "title": "Swirl",
    "group": "Image_Manipulation",
    "description": "<p>Twists the picture around a point or every face</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"center\"",
              "\"faces\""
            ],
            "optional": true,
            "field": "target",
            "defaultValue": "center",
            "description": "<p>Whether to distort around a point or around every face in the image (an image without faces gives <code>NO_FACES_DETECTED</code>)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..1"
            ],
            "optional": true,
            "field": "x",
            "defaultValue": "0.5",
            "description": "<p>Where to distort, from left to right (when <code>target</code> is <code>center</code>)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..1"
            ],
            "optional": true,
            "field": "y",
            "defaultValue": "0.5",
            "description": "<p>Where to distort, from top to bottom (when <code>target</code> is <code>center</code>)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0.05..2"
            ],
            "optional": true,
            "field": "radius",
            "defaultValue": "0.5",
            "description": "<p>How far the distortion reaches, relative to the shorter side of the image (or to the size of each face)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "-3..3"
            ],
            "optional": true,
            "field": "turns",
            "defaultValue": "1",
            "description": "<p>How many full turns the center is twisted (negative values turn the other way)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Swirl.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostSwirl",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/triggered",
    "title": "Triggered",
    "group": "Image_Manipulation",
    "description": "<p>Makes an animated GIF of the image shaking violently with a new random jolt on every frame, tinted red and flickering red, with a red banner at the bottom carrying the given text in big bold capitals; the banner jumps on its own. The picture is zoomed in, so the shaking never shows an edge. The shake is seeded, so the same request always gives the same GIF</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "text",
            "defaultValue": "TRIGGERED",
            "description": "<p>Text of the banner, from 1 to 24 characters (otherwise <code>INVALID_TEXT</code>)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "6..24"
            ],
            "optional": true,
            "field": "frames",
            "defaultValue": "12",
            "description": "<p>Number of frames in one loop</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "64..512"
            ],
            "optional": true,
            "field": "size",
            "defaultValue": "320",
            "description": "<p>Width and height of the GIF in pixels</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0.2..1"
            ],
            "optional": true,
            "field": "intensity",
            "defaultValue": "0.6",
            "description": "<p>How violently the picture shakes</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "background",
            "defaultValue": "#000000",
            "description": "<p>Background color as hex (<code>#rgb</code> or <code>#rrggbb</code>), or <code>transparent</code>. Transparent GIFs leave traces of earlier frames in some viewers, so the default is opaque</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Triggered.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostTriggered",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/wave",
    "title": "Wave",
    "group": "Image_Manipulation",
    "description": "<p>Makes an animated GIF of the image rippling like a flag, looping seamlessly</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "8..24"
            ],
            "optional": true,
            "field": "frames",
            "defaultValue": "16",
            "description": "<p>Number of frames in one loop</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0.5..10"
            ],
            "optional": true,
            "field": "amplitude",
            "defaultValue": "4",
            "description": "<p>How far the picture ripples, in percent of the image size</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"horizontal\"",
              "\"vertical\""
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "horizontal",
            "description": "<p>Whether the rows ripple sideways or the columns ripple up and down</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "64..512"
            ],
            "optional": true,
            "field": "size",
            "defaultValue": "320",
            "description": "<p>Width and height of the GIF in pixels</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "background",
            "defaultValue": "#000000",
            "description": "<p>Background color as hex (<code>#rgb</code> or <code>#rrggbb</code>), or <code>transparent</code>. Transparent GIFs leave traces of earlier frames in some viewers, so the default is opaque</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Wave.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostWave",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
    "url": "/zoomblur",
    "title": "Zoomblur",
    "group": "Image_Manipulation",
    "description": "<p>Smears the image along the lines toward a center point, like a camera pulling toward the subject. A still image keeps its size; with <code>animated</code> it makes a looping GIF in which the blur swells and fades</p>",
    "parameter": {
      "fields": {
        "Request Parameters": [
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0.05..0.6"
            ],
            "optional": true,
            "field": "strength",
            "defaultValue": "0.25",
            "description": "<p>How far the blur reaches toward the center: 0.6 smears each pixel most of the way there</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..1"
            ],
            "optional": true,
            "field": "x",
            "defaultValue": "0.5",
            "description": "<p>Horizontal position of the center, from left to right</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "0..1"
            ],
            "optional": true,
            "field": "y",
            "defaultValue": "0.5",
            "description": "<p>Vertical position of the center, from top to bottom</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "4..24"
            ],
            "optional": true,
            "field": "samples",
            "defaultValue": "12",
            "description": "<p>How many points along each line are averaged; more is smoother but slower</p>"
          },
          {
            "group": "Request Parameters",
            "type": "boolean",
            "optional": true,
            "field": "animated",
            "defaultValue": "false",
            "description": "<p>Whether to make a looping GIF of the blur swelling and fading instead of a still image</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "64..512"
            ],
            "optional": true,
            "field": "size",
            "defaultValue": "320",
            "description": "<p>Width and height of the animated GIF in pixels (a still image keeps its own size)</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "optional": true,
            "field": "background",
            "defaultValue": "#000000",
            "description": "<p>Background color as hex (<code>#rgb</code> or <code>#rrggbb</code>), or <code>transparent</code>; only used when <code>animated</code> is set. Transparent GIFs leave traces of earlier frames in some viewers, so the default is opaque</p>"
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
    "filename": "controllers/image-manipulation/Zoomblur.js",
    "groupTitle": "Image_Manipulation",
    "name": "PostZoomblur",
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
          },
          {
            "group": "Request Parameters",
            "type": "string",
            "allowedValues": [
              "\"png\"",
              "\"jpeg\"",
              "\"webp\"",
              "\"avif\"",
              "\"jxl\"",
              "\"gif\""
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to encode the result in. Defaults to <code>png</code> for still images and <code>gif</code> for animations. Animations can only be encoded as <code>gif</code>, <code>png</code> (APNG) or <code>webp</code></p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "allowedValues": [
              "1..100"
            ],
            "optional": true,
            "field": "quality",
            "description": "<p>The quality for <code>jpeg</code>, <code>webp</code>, <code>avif</code> and <code>jxl</code> (still images). Setting it makes <code>webp</code> and <code>jxl</code> lossy, which often gives files a fraction of the size. Without it they are lossless</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>The supplied authorization has no access to this resource</p>"
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
            "description": "<p>No valid Authorization header was supplied</p>"
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
            "description": "<p>The supplied authorization has no access to this resource</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/management/users/:id/discord",
    "title": "Show linked Discord account",
    "group": "~Management",
    "description": "<p>Gets the name of the Discord account linked to the given user. The name is cached for a few hours.</p>",
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The Discord account ID</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>The Discord username</p>"
          },
          {
            "group": "Success 200",
            "type": "string|null",
            "optional": false,
            "field": "global_name",
            "description": "<p>The display name</p>"
          },
          {
            "group": "Success 200",
            "type": "string|null",
            "optional": false,
            "field": "avatar",
            "description": "<p>The avatar hash</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/management/user/DiscordUser.js",
    "groupTitle": "~Management",
    "name": "GetManagementUsersIdDiscord",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authorization header was supplied</p>"
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
            "description": "<p>The supplied authorization has no access to this resource</p>"
          }
        ]
      }
    }
  }
] });
