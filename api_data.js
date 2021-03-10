define({ "api": [
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
              "6..48"
            ],
            "optional": true,
            "field": "groupSize",
            "defaultValue": "12",
            "description": "<p>How big of a pixel square to group into one emoji</p>"
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
            "type": "buffer",
            "optional": false,
            "field": "body",
            "description": "<p>The image data</p>"
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
            "description": "<p>The supplied data was invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
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
              "6..16"
            ],
            "optional": true,
            "field": "groupSize",
            "defaultValue": "8",
            "description": "<p>How big of a pixel square to group into one brick</p>"
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
            "type": "buffer",
            "optional": false,
            "field": "body",
            "description": "<p>The image data</p>"
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
            "description": "<p>The supplied data was invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
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
            "type": "buffer",
            "optional": false,
            "field": "body",
            "description": "<p>The image data</p>"
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
            "description": "<p>The supplied data was invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
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
            "type": "buffer",
            "optional": false,
            "field": "body",
            "description": "<p>The image data</p>"
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
            "description": "<p>The supplied data was invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
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
    "version": "0.0.0",
    "filename": "controllers/util/ImageSearch.js",
    "groupTitle": "Utility",
    "name": "PostImage_search",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
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
            "description": "<p>The device to emulate. See <a href=\"https://github.com/Microsoft/playwright/blob/master/src/server/deviceDescriptors.ts#L20\">list of available devices</a></p>"
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
            "defaultValue": "undefined",
            "description": "<p>What theme to use</p>"
          },
          {
            "group": "Request Parameters",
            "type": "number",
            "size": "1000..60000",
            "optional": true,
            "field": "timeout",
            "defaultValue": "30000",
            "description": "<p>The max time to wait until the site has loaded (in ms)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/util/Screenshot.js",
    "groupTitle": "Utility",
    "name": "PostScreenshot",
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
            "type": "buffer",
            "optional": false,
            "field": "body",
            "description": "<p>The image data</p>"
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
            "description": "<p>The supplied data was invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
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
            "optional": false,
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
            "description": "<p>An array of related image URLs. If you want to search for images only, use <a href=\"/#api-Utility-PostImage_search\">Image Search</a> instead.</p>"
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
    "version": "0.0.0",
    "filename": "controllers/util/WebSearch.js",
    "groupTitle": "Utility",
    "name": "PostWeb_search",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The supplied data was invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>No valid Authentication header was supplied</p>"
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
