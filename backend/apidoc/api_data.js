define({ "api": [
  {
    "type": "delete",
    "url": "/action/:id",
    "title": "Delete an action by id",
    "group": "Action",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of action</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X DELETE -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/action/555ecb997aa6360e40f26451",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "n",
            "description": "<p>Number of deleted actions (0 or 1)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "ok",
            "description": "<p>Mongoose internals</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"n\": 0,\n  \"ok\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/action.js",
    "groupTitle": "Action",
    "name": "DeleteActionId"
  },
  {
    "type": "get",
    "url": "/action",
    "title": "Get a list of actions",
    "group": "Action",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>Maximum number of results returned</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "skip",
            "defaultValue": "0",
            "description": "<p>Number of results skipped</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "includeRatings",
            "defaultValue": "false",
            "description": "<p>Include individual user ratings of action</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/action",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"__v\": 8,\n    \"_id\": \"555ef84b2fd41ffc6e078a34\",\n    \"description\": \"Disabling standby can save up to 10% in total electricity costs.\",\n    \"effort\": 3,\n    \"impact\": 2,\n    \"date\": \"2015-07-01T12:04:33.599Z\",\n    \"name\": \"Disable standby on your devices\",\n    \"numLikes\": 4\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/action.js",
    "groupTitle": "Action",
    "name": "GetAction"
  },
  {
    "type": "get",
    "url": "/action/:actionId/picture",
    "title": "Get action picture",
    "group": "Action",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "actionId",
            "description": "<p>ID of comment</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Content-Type: image/png\" -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/action/555f0163688305b57c7cef6c/picture",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<image data>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/action.js",
    "groupTitle": "Action",
    "name": "GetActionActionidPicture"
  },
  {
    "type": "get",
    "url": "/action/:id",
    "title": "Fetch an action by id",
    "group": "Action",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of action</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/action/555ecb997aa6360e40f26451",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"__v\": 8,\n  \"_id\": \"555ef84b2fd41ffc6e078a34\",\n  \"description\": \"Disabling standby can save up to 10% in total electricity costs.\",\n  \"effort\": 3,\n  \"impact\": 2,\n  \"date\": \"2015-07-01T12:04:33.599Z\",\n  \"name\": \"Disable standby on your devices\",\n  \"numLikes\": 4,\n  \"numComments\": 42,\n  \"numUsers\": 3,\n  \"ratings\": [\n    {\n      \"_id\": \"testUser\",\n      \"rating\": 4,\n      \"effort\": 3\n    },\n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/action.js",
    "groupTitle": "Action",
    "name": "GetActionId"
  },
  {
    "type": "get",
    "url": "/action/search",
    "title": "Search for actions (TODO: implement me)",
    "group": "Action",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "q",
            "description": "<p>Search query</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/action/search\\?q\\=foobar",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/action.js",
    "groupTitle": "Action",
    "name": "GetActionSearch"
  },
  {
    "type": "post",
    "url": "/action",
    "title": "Create new action",
    "group": "Action",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Action name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Action description</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "category",
            "defaultValue": "oneshot",
            "description": "<p>Category of action. Can be one of:</p> <ul> <li> <p><strong>oneshot</strong>: action only needs to be performed once, then it’s considered done (eg. disable standby setting on your devices)</p> </li> <li> <p><strong>reminder</strong>: enabling action sets a reminder X days into the future, when performed once, it’s considered done (eg. perform a weatherization repair just before winter)</p> </li> <li> <p><strong>continuous</strong>: action is valid for a long period of time, requires the user to be aware of it all the time (eg. turn lights, appliances etc. off when not in use)</p> </li> <li> <p><strong>repeating</strong>: like reminders but will also repeat every X days. (eg. change &amp; clean filters in heating and cooling equipment monthly)</p> </li> </ul> "
          },
          {
            "group": "Parameter",
            "type": "<p>json</p> ",
            "optional": true,
            "field": "activation",
            "description": "<p>Settings for when action is activated:</p> <pre><code class=\"language-json\">{ &quot;repeat&quot;: Number, &quot;delay&quot;: Number, &quot;configurable&quot;: Boolean } </code></pre> <p>Where</p> <ul> <li> <p><strong>repeat</strong>: how often (days) does the action repeat? (default = 0, never)</p> </li> <li> <p><strong>delay</strong>: how many days to delay this action with? (default = 0, no delay)</p> </li> <li> <p><strong>configurable</strong>: is user allowed to customize <strong>repeat</strong> and <strong>delay</strong> if they have non-zero defaults. (values of zero always customizeable to allow postponing an action. default = false)</p> </li> </ul> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "impact",
            "defaultValue": "3",
            "description": "<p>Initial impact estimation of the action (1 [least] - 5 [most])</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "effort",
            "defaultValue": "3",
            "description": "<p>Initial effort estimation of the action (1 [least] - 5 [most])</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"name\": \"Disable standby on your devices\",\n  \"description\": \"Disabling standby can save up to 10% in total electricity costs.\",\n  \"impact\": 2,\n  \"effort\": 2\n}' \\\nhttp://localhost:3000/api/action",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"__v\": 0,\n  \"_id\": \"555f0163688305b57c7cef6c\",\n  \"description\": \"Disabling standby can save up to 10% in total electricity costs.\",\n  \"effort\": 2,\n  \"impact\": 2,\n  \"name\": \"Disable standby on your devices\",\n  \"date\": \"2015-07-01T12:04:33.599Z\",\n  \"ratings\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/action.js",
    "groupTitle": "Action",
    "name": "PostAction"
  },
  {
    "type": "post",
    "url": "/action/:actionId/picture",
    "title": "Attach picture to action",
    "group": "Action",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "actionId",
            "description": "<p>ID of action</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: image/png\" -H \"Authorization: Bearer $API_TOKEN\" \\\n--data-binary @/path/to/picture.png \\\nhttp://localhost:3000/api/action/555f0163688305b57c7cef6c/picture",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/action.js",
    "groupTitle": "Action",
    "name": "PostActionActionidPicture"
  },
  {
    "type": "put",
    "url": "/action/rate/:id",
    "title": "Create/update user's rating of action",
    "group": "Action",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of action</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "rating",
            "description": "<p>Rating of action (0 = unlike, 1 = like)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "effort",
            "description": "<p>Effort estimate (1 [least] - 5 [most])</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X PUT -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"rating\": 1\n}' \\\nhttp://localhost:3000/api/action/rate/555ef84b2fd41ffc6e078a34\n\n# or\ncurl -i -X PUT -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"effort\": 3\n}' \\\nhttp://localhost:3000/api/action/rate/555ef84b2fd41ffc6e078a34",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5594dbeadfbb985d0ac150c4\",\n  \"name\": \"Disable standby on your devices\",\n  \"description\": \"Disabling standby can save up to 10% in total electricity costs.\",\n  \"__v\": 0,\n  \"ratings\": {\n    \"5593ccfa9255daa130890164\": {\n      \"date\": \"2015-07-02T06:37:39.845Z\",\n      \"name\": \"Test User\",\n      \"rating\": 1,\n      \"effort\": 3\n    }\n  },\n  \"effort\": 2,\n  \"impact\": 2,\n  \"date\": \"2015-07-01T12:04:33.599Z\",\n  \"activation\": {\n    \"configurable\": false\n  },\n  \"category\": \"oneshot\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/action.js",
    "groupTitle": "Action",
    "name": "PutActionRateId"
  },
  {
    "type": "delete",
    "url": "/action/:actionId/comment/:commentId",
    "title": "Delete a comment",
    "group": "Action_Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "actionId",
            "description": "<p>ID of action whose comment will be deleted</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "commentId",
            "description": "<p>ID of comment to be deleted</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X DELETE -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/action/555f0163688305b57c7cef6c/comment/555f0163688305b57c7cef6d",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"ok\":1,\n  \"n\":1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/action.js",
    "groupTitle": "Action_Comments",
    "name": "DeleteActionActionidCommentCommentid"
  },
  {
    "type": "get",
    "url": "/action/:actionId/comments",
    "title": "Get a list of action comments",
    "group": "Action_Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "actionId",
            "description": "<p>ID of action whose comments are requested</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Maximum number of results returned</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "skip",
            "defaultValue": "0",
            "description": "<p>Number of results skipped</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"limit\": \"50\",\n  \"skip\": \"0\"\n}' \\\nhttp://localhost:3000/api/action/555f0163688305b57c7cef6c/comments",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"_id\": \"555f0163688305b57c7cef6d\",\n    \"actionId\": \"555f0163688305b57c7cef6c\",\n    \"name\": \"Test User\",\n    \"email\": \"testuser1@test.com\",\n    \"comment\": \"This is an amazing and easy to perform action!\",\n    \"numLikes\": 42,\n    \"date\": \"2015-07-01T12:04:33.599Z\",\n    \"__v\": 0,\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/action.js",
    "groupTitle": "Action_Comments",
    "name": "GetActionActionidComments"
  },
  {
    "type": "get",
    "url": "/action/comment/:commentId/picture",
    "title": "Get comment picture",
    "group": "Action_Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "commentId",
            "description": "<p>ID of comment</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Content-Type: image/png\" -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/action/comment/555f0163688305b57c7cef6c/picture",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<image data>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/action.js",
    "groupTitle": "Action_Comments",
    "name": "GetActionCommentCommentidPicture"
  },
  {
    "type": "post",
    "url": "/action/:actionId/comment",
    "title": "Create new action comment",
    "group": "Action_Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "actionId",
            "description": "<p>ID of action being commented</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comment",
            "description": "<p>Text contents of comment</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"comment\": \"This is an amazing and easy to perform action!\"\n}' \\\nhttp://localhost:3000/api/action/555f0163688305b57c7cef6c/comment",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"__v\": 0,\n  \"actionId\": \"555f0163688305b57c7cef6c\",\n  \"userId\": \"555f0163688305b57c7cef6e\",\n  \"name\": \"Test User\",\n  \"email\": \"testuser1@test.com\",\n  \"comment\": \"This is an amazing and easy to perform action!\",\n  \"date\": \"2015-07-01T12:04:33.599Z\",\n  \"_id\": \"555f0163688305b57c7cef6d\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/action.js",
    "groupTitle": "Action_Comments",
    "name": "PostActionActionidComment"
  },
  {
    "type": "post",
    "url": "/action/comment/:commentId/picture",
    "title": "Attach picture to comment",
    "group": "Action_Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "commentId",
            "description": "<p>ID of comment</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: image/png\" -H \"Authorization: Bearer $API_TOKEN\" \\\n--data-binary @/path/to/picture.png \\\nhttp://localhost:3000/api/action/comment/555f0163688305b57c7cef6c/picture",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/action.js",
    "groupTitle": "Action_Comments",
    "name": "PostActionCommentCommentidPicture"
  },
  {
    "type": "put",
    "url": "/action/:actionId/comment/:commentId/rate",
    "title": "Create/update user's rating of action comment",
    "group": "Action_Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "actionId",
            "description": "<p>MongoId of action</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "commentId",
            "description": "<p>MongoId of action comment</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating of action (0 or 1. Means unlike, like)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X PUT -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"rating\": 1\n}' \\\nhttp://localhost:3000/api/action/831ef84b2fd41ffc6e078a35/comment/555ef84b2fd41ffc6e078a34/rate",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"55b1e95d28fa449f29b8cc19\",\n  \"actionId\": \"555f0163688305b57c7cef6c\",\n  \"name\": \"Test User\",\n  \"email\": \"testuser@test.com\",\n  \"comment\": \"This is an amazing and easy to perform action!\",\n  \"date\": \"2015-07-24T07:29:33.227Z\",\n  \"__v\": 0,\n  \"numLikes\": 42,\n  \"hasPicture\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/action.js",
    "groupTitle": "Action_Comments",
    "name": "PutActionActionidCommentCommentidRate"
  },
  {
    "type": "delete",
    "url": "/challenge/:id",
    "title": "Delete a challenge by id",
    "group": "Challenge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of challenge</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X DELETE -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/challenge/555ecb997aa6360e40f26451",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "n",
            "description": "<p>Number of deleted challenges (0 or 1)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "ok",
            "description": "<p>Mongoose internals</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"n\": 0,\n  \"ok\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/challenge.js",
    "groupTitle": "Challenge",
    "name": "DeleteChallengeId"
  },
  {
    "type": "get",
    "url": "/challenge",
    "title": "Get a list of challenges",
    "group": "Challenge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>Maximum number of results returned</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "skip",
            "defaultValue": "0",
            "description": "<p>Number of results skipped</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "includeRatings",
            "defaultValue": "false",
            "description": "<p>Include individual user ratings of challenge</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/challenge",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"__v\": 8,\n    \"_id\": \"555ef84b2fd41ffc6e078a34\",\n    \"avgRating\": 4.25,\n    \"description\": \"Disabling standby can save up to 10% in total electricity costs.\",\n    \"effort\": 3,\n    \"impact\": 10,\n    \"name\": \"Disable standby on your devices\",\n    \"numRatings\": 4\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/challenge.js",
    "groupTitle": "Challenge",
    "name": "GetChallenge"
  },
  {
    "type": "get",
    "url": "/challenge/:id",
    "title": "Fetch a challenge by id",
    "group": "Challenge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of challenge</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/challenge/555ecb997aa6360e40f26451",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5593ea61caed58c705a25278\",\n  \"name\": \"Test challenge\",\n  \"description\": \"Test description\",\n  \"__v\": 0,\n  \"ratings\": {\n    \"5593ccfa9255daa130890164\": {\n      \"rating\": 4,\n      \"name\": \"Test User\",\n      \"comment\": \"This challenge is awesome!\",\n      \"date\": \"2015-07-01T13:39:51.678Z\"\n    }\n  },\n  \"actions\": [\n    \"555eda2531039c1853352b7c\",\n    \"555eda2531039c1853352b7f\"\n  ],\n  \"avgRating\": 4,\n  \"numRatings\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/challenge.js",
    "groupTitle": "Challenge",
    "name": "GetChallengeId"
  },
  {
    "type": "get",
    "url": "/challenge/search",
    "title": "Search for Challenges by name (TODO: implement me)",
    "group": "Challenge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "q",
            "description": "<p>Search query</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/challenge/search\\?q\\=foobar",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/challenge.js",
    "groupTitle": "Challenge",
    "name": "GetChallengeSearch"
  },
  {
    "type": "post",
    "url": "/challenge",
    "title": "Create new challenge",
    "group": "Challenge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Challenge name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Challenge description</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "actions",
            "description": "<p>List of action IDs</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ratings</p> ",
            "optional": false,
            "field": "Rating",
            "description": "<p>for a challenge, (1 [least] - 5 [most]), default 0</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"name\": \"Test challenge\",\n  \"description\": \"Test description\",\n  \"actions\": [\"555eda2531039c1853352b7f\", \"555eda2531039c1853352b7c\"]\n}' \\\nhttp://localhost:3000/api/challenge",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"__v\": 0,\n  \"name\": \"Test challenge\",\n  \"description\": \"Test description\",\n  \"_id\": \"5593ea61caed58c705a25278\",\n  \"actions\": [\n    \"555eda2531039c1853352b7f\",\n    \"555eda2531039c1853352b7c\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/challenge.js",
    "groupTitle": "Challenge",
    "name": "PostChallenge"
  },
  {
    "type": "put",
    "url": "/challenge/rate/:id",
    "title": "Create/update user's rating of challenge",
    "group": "Challenge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of challenge</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating of challenge (1 [least] - 5 [most])</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X PUT -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"rating\": 4,\n  \"comment\": \"This challenge is really awesome!\"\n}' \\\nhttp://localhost:3000/api/challenge/rate/555ef84b2fd41ffc6e078a34",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5593ea61caed58c705a25278\",\n  \"name\": \"Test challenge\",\n  \"description\": \"Test description\",\n  \"__v\": 0,\n  \"ratings\": {\n    \"5593ccfa9255daa130890164\": {\n      \"rating\": 4,\n      \"name\": \"Test User\",\n      \"comment\": \"This challenge is really awesome!\",\n      \"date\": \"2015-07-01T13:39:51.678Z\"\n    }\n  },\n  \"actions\": [\n    \"555eda2531039c1853352b7c\",\n    \"555eda2531039c1853352b7f\"\n  ],\n  \"avgRating\": 4,\n  \"numRatings\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/challenge.js",
    "groupTitle": "Challenge",
    "name": "PutChallengeRateId"
  },
  {
    "type": "delete",
    "url": "/challenge/:challengeId/comment/:commentId",
    "title": "Delete a comment",
    "group": "Challenge_Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "challengeId",
            "description": "<p>ID of challenge whose comment will be deleted</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "commentId",
            "description": "<p>ID of comment to be deleted</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X DELETE -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/challenge/555f0163688305b57c7cef6c/comment/555f0163688305b57c7cef6d",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"ok\":1,\n  \"n\":1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/challenge.js",
    "groupTitle": "Challenge_Comments",
    "name": "DeleteChallengeChallengeidCommentCommentid"
  },
  {
    "type": "get",
    "url": "/challenge/:challengeId/comments",
    "title": "Get a list of challenge comments",
    "group": "Challenge_Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "challengeId",
            "description": "<p>ID of challenge whose comments are requested</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Maximum number of results returned</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "skip",
            "defaultValue": "0",
            "description": "<p>Number of results skipped</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"limit\": \"50\",\n  \"skip\": \"0\"\n}' \\\nhttp://localhost:3000/api/challenge/555f0163688305b57c7cef6c/comments",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"_id\": \"555f0163688305b57c7cef6d\",\n    \"challengeId\": \"555f0163688305b57c7cef6c\",\n    \"name\": \"Test User\",\n    \"email\": \"testuser1@test.com\",\n    \"comment\": \"This is an amazing and easy to perform challenge!\",\n    \"date\": \"2015-07-01T12:04:33.599Z\",\n    \"__v\": 0,\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/challenge.js",
    "groupTitle": "Challenge_Comments",
    "name": "GetChallengeChallengeidComments"
  },
  {
    "type": "post",
    "url": "/challenge/:challengeId/comment",
    "title": "Create new challenge comment",
    "group": "Challenge_Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "challengeId",
            "description": "<p>ID of challenge being commented</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comment",
            "description": "<p>Text contents of comment</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"comment\": \"This is an amazing and easy to perform challenge!\"\n}' \\\nhttp://localhost:3000/api/challenge/555f0163688305b57c7cef6c/comment",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"__v\": 0,\n  \"challengeId\": \"555f0163688305b57c7cef6c\",\n  \"name\": \"Test User\",\n  \"email\": \"testuser1@test.com\",\n  \"comment\": \"This is an amazing and easy to perform challenge!\",\n  \"date\": \"2015-07-01T12:04:33.599Z\",\n  \"_id\": \"555f0163688305b57c7cef6d\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/challenge.js",
    "groupTitle": "Challenge_Comments",
    "name": "PostChallengeChallengeidComment"
  },
  {
    "type": "delete",
    "url": "/household/:id",
    "title": "Delete a Community by id",
    "group": "Community",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of Community</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X DELETE -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/community/555ecb997aa6360e40f26451",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "n",
            "description": "<p>Number of deleted communities (0 or 1)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "ok",
            "description": "<p>Mongoose internals</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"n\": 0,\n  \"ok\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/community.js",
    "groupTitle": "Community",
    "name": "DeleteHouseholdId"
  },
  {
    "type": "get",
    "url": "/community/:id",
    "title": "Fetch a community by id",
    "group": "Community",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of community</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/community/555ecb997aa6360e40f26451",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"__v\": 8,\n  \"_id\": \"555ef84b2fd41ffc6e078a34\",\n   \"name\": \"Otaniemi Community\",\n  \"challenges\": [\n    {\n    \"id\": \"555eda2531039c1853352b7f\",\n    \"name\": \"Reduce energy consumption by 10%\"\n    },\n    {\n     \"id\": \"455eda2531039c1853335b7f\",\n    \"name\": \"Save for 2 solar panels for the area\"\n    }\n ],\n  \"actions\": [\n    {\n    \"id\": \"345eda2531039c1853352b7f\",\n    \"name\": \"Use the clothes washer/dryer only once per week\"\n    },\n    {\n     \"id\": \"7645eda34531039c1853352b7f\",\n    \"name\": \"Turn off lights during the day in Summer\"\n    }\n ],\n  \"members\": [\n    {\n      \"_id\": \"testUser1\",\n      \"name\": \"Jane\",\n    },\n     {\n      \"_id\": \"testUser2\",\n      \"name\": \"Jack\",\n    },\n    ...\n  ],\n  \"date\": \"2015-07-01T12:04:33.599Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/community.js",
    "groupTitle": "Community",
    "name": "GetCommunityId"
  },
  {
    "type": "get",
    "url": "/community/list",
    "title": "List all of user's communities",
    "group": "Community",
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/community/list",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/community.js",
    "groupTitle": "Community",
    "name": "GetCommunityList"
  },
  {
    "type": "get",
    "url": "/community/top/:id",
    "title": "Display top actions from community",
    "group": "Community",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of action</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Count limit</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "actions",
            "description": "<p>List of top actions in the community, actions with high rating</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/community/top/315ea82f7fec0ffaee5",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/community.js",
    "groupTitle": "Community",
    "name": "GetCommunityTopId"
  },
  {
    "type": "post",
    "url": "/community",
    "title": "Create new community",
    "group": "Community",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Unique Name of the community</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "challenges",
            "description": "<p>Challenges specific to the community</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "actions",
            "description": "<p>Actions specific to the community</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"name\": \"Otaniemi Community\",\n  \"challenges\": [\n    {\n      \"id\": \"555eda2531039c1853352b7f\",\n      \"name\": \"Reduce energy consumption by 10%\"\n    },\n    {\n      \"id\": \"455eda2531039c1853335b7f\",\n      \"name\": \"Save for 2 solar panels for the area\"\n    }\n  ],\n  \"actions\": [\n    {\n      \"id\": \"345eda2531039c1853352b7f\",\n      \"name\": \"Use the clothes washer/dryer only once per week\"\n    },\n    {\n      \"id\": \"7645eda34531039c1853352b7f\",\n      \"name\": \"Turn off lights during the day in Summer\"\n    }\n  ],\n  \"members\": [\n    {\n      \"_id\": \"testUser1\",\n      \"name\": \"Jane\"\n    },\n    {\n      \"_id\": \"testUser2\",\n      \"name\": \"Jack\"\n    }\n  ]\n}' \\\nhttp://localhost:3000/api/community",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"__v\": 0,\n  \"_id\": \"555f0163688305b57c7cef6c\",\n  \"name\": \"Otaniemi Community\",\n  \"challenges\": [\n    {\n      \"id\": \"555eda2531039c1853352b7f\",\n      \"name\": \"Reduce energy consumption by 10%\"\n    },\n    {\n      \"id\": \"455eda2531039c1853335b7f\",\n      \"name\": \"Save for 2 solar panels for the area\"\n    }\n  ],\n  \"actions\": [\n    {\n      \"id\": \"345eda2531039c1853352b7f\",\n      \"name\": \"Use the clothes washer/dryer only once per week\"\n    },\n    {\n      \"id\": \"7645eda34531039c1853352b7f\",\n      \"name\": \"Turn off lights during the day in Summer\"\n    }\n  ],\n  \"members\": [\n    \"User\": {\n      \"_id\": \"testUser1\",\n      \"name\": \"Jane\"\n    },\n    \"User\": {\n      \"_id\": \"testUser2\",\n      \"name\": \"Jack\"\n    }\n  ],\n  \"date\": \"2015-07-01T12:04:33.599Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/community.js",
    "groupTitle": "Community",
    "name": "PostCommunity"
  },
  {
    "type": "post",
    "url": "/community/communityPicture/:communityId",
    "title": "Update your Community picture",
    "group": "Community",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "communityId",
            "description": "<p>MongoId of community</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/profile\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: image/png\" -H \"Authorization: Bearer $API_TOKEN\" \\\n--data-binary @/path/to/picture.png \\\nhttp://localhost:3000/api/community/communityPicture/555f0163688305b57c7cef6c",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/community.js",
    "groupTitle": "Community",
    "name": "PostCommunityCommunitypictureCommunityid"
  },
  {
    "type": "put",
    "url": "/action/rate/:id",
    "title": "Create/update community's rating by user",
    "group": "Community",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of community</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating of community (0 = unlike, 1 = like)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "comment",
            "description": "<p>Comment attached to rating</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/community/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X PUT -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"rating\": 1,\n  \"comment\": \"This community is really awesome!\"\n}' \\\nhttp://localhost:3000/api/action/rate/555ef84b2fd41ffc6e078a34",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5594dbeadfbb985d0ac150c4\",\n  \"name\": \"Otaniemi Community\",\n  \"description\": \"Disabling standby can save up to 10% in total electricity costs.\",\n  \"__v\": 0,\n  \"ratings\": {\n    \"5593ccfa9255daa130890164\": {\n      \"date\": \"2015-07-02T06:37:39.845Z\",\n      \"comment\": \"This community is really awesome!\",\n      \"name\": \"Test User\",\n      \"rating\": 1\n    }\n  },\n \"challenges\": [\n   {\n     \"id\": \"555eda2531039c1853352b7f\",\n     \"name\": \"Reduce energy consumption by 10%\"\n   },\n   {\n     \"id\": \"455eda2531039c1853335b7f\",\n     \"name\": \"Save for 2 solar panels for the area\"\n   }\n ],\n  \"date\": \"2015-07-01T12:04:33.599Z\",\n   \"members\": [\n   {\n     \"_id\": \"testUser1\",\n     \"name\": \"Jane\"\n   },\n   {\n     \"_id\": \"testUser2\",\n     \"name\": \"Jack\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/community.js",
    "groupTitle": "Community",
    "name": "PutActionRateId"
  },
  {
    "type": "put",
    "url": "/community/join/:id",
    "title": "Join community",
    "group": "Community",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of community</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X PUT -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/community/join/555ef84b2fd41ffef6e078a34",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/community.js",
    "groupTitle": "Community",
    "name": "PutCommunityJoinId"
  },
  {
    "type": "put",
    "url": "/community/leave/:id",
    "title": "Leave community",
    "group": "Community",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of community</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X PUT -H \"Authorization: Bearer $API_TOKEN\" -d \\\nhttp://localhost:3000/api/community/leave/555ef84b2fd41ffef6e078a34",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/community.js",
    "groupTitle": "Community",
    "name": "PutCommunityLeaveId"
  },
  {
    "type": "delete",
    "url": "/community/:communityId/comment/:commentId",
    "title": "Delete a comment",
    "group": "Community_Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "communityId",
            "description": "<p>ID of community whose comment will be deleted</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "commentId",
            "description": "<p>ID of comment to be deleted</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X DELETE -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/community/555f0163688305b57c7cef6c/comment/555f0163688305b57c7cef6d",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"ok\":1,\n  \"n\":1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/community.js",
    "groupTitle": "Community_Comments",
    "name": "DeleteCommunityCommunityidCommentCommentid"
  },
  {
    "type": "get",
    "url": "/community/:communityId/comments",
    "title": "Get a list of community comments",
    "group": "Community_Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "communityId",
            "description": "<p>ID of community whose comments are requested</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Maximum number of results returned</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "skip",
            "defaultValue": "0",
            "description": "<p>Number of results skipped</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"limit\": \"50\",\n  \"skip\": \"0\"\n}' \\\nhttp://localhost:3000/api/community/555f0163688305b57c7cef6c/comments",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"_id\": \"555f0163688305b57c7cef6d\",\n    \"communityId\": \"555f0163688305b57c7cef6c\",\n    \"name\": \"Test User\",\n    \"email\": \"testuser1@test.com\",\n    \"comment\": \"This is a fun community!\",\n    \"date\": \"2015-07-01T12:04:33.599Z\",\n    \"__v\": 0,\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/community.js",
    "groupTitle": "Community_Comments",
    "name": "GetCommunityCommunityidComments"
  },
  {
    "type": "post",
    "url": "/community/:communityId/comment",
    "title": "Create new community comment",
    "group": "Community_Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "communityId",
            "description": "<p>ID of community being commented</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comment",
            "description": "<p>Text contents of comment</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"comment\": \"This is a fun community!\"\n}' \\\nhttp://localhost:3000/api/community/555f0163688305b57c7cef6c/comment",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"__v\": 0,\n  \"communityId\": \"555f0163688305b57c7cef6c\",\n  \"userId\": \"555f0163688305b57c7cef6e\",\n  \"name\": \"Test User\",\n  \"email\": \"testuser1@test.com\",\n  \"comment\": \"This is a fun community!\",\n  \"date\": \"2015-07-01T12:04:33.599Z\",\n  \"_id\": \"555f0163688305b57c7cef6d\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/community.js",
    "groupTitle": "Community_Comments",
    "name": "PostCommunityCommunityidComment"
  },
  {
    "type": "get",
    "url": "/consumption",
    "title": "Get energy consumption data",
    "group": "Consumption",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>CIVIS backend user ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>CIVIS backend user token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "from",
            "description": "<p>Start date string in simplified extended ISO8601 format</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "to",
            "description": "<p>End date string in simplified extended ISO8601 format</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "res",
            "description": "<p>Granularity of the answer. Possible values: quarterly, hourly, daily, weekly, monthly</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "backend/routes/consumption.js",
    "groupTitle": "Consumption",
    "name": "GetConsumption"
  },
  {
    "type": "get",
    "url": "/consumption/appliance/:id",
    "title": "Consumption data for a specific appliance",
    "group": "Consumption",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>appliance id</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\ncurl -i -X GET -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\nhttp://localhost:3000/api/consumption/appliance/164172718301",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n  0.1187375511508435,\n  0.9294693802949041,\n  0.1715518836863339,\n  0.10940657090395689,\n  0.6286844359710813\n]",
          "type": "[json]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/consumption.js",
    "groupTitle": "Consumption",
    "name": "GetConsumptionApplianceId"
  },
  {
    "type": "get",
    "url": "/consumption/getSensors",
    "title": "list of sensors and appliances for that user",
    "group": "Consumption",
    "examples": [
      {
        "title": "Example usage",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/consumption/getSensors",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n     \"appliances\": [\n         {\n             \"appliance\": \"Washing Machine\",\n             \"quantity\": 2,\n             \"_id\": \"55d2f971dfe4845d50451705\"\n         },\n         {\n             \"appliance\": \"Heater\",\n             \"quantity\": 4,\n             \"_id\": \"55d2f971dfe4845d50451704\"\n         }\n     ]\n },\n {\n     \"sensors\": [\n         {\n             \"_id\": \"55d2ef2f739304394f9f079f\",\n             \"sensorNumber\": 0,\n             \"sensorType\": 0,\n             \"measureUnit\": \"Wh\",\n             \"label\": \"Consumo Elettrico\",\n             \"lastSampleTimestamp\": \"2015-07-10T15:42:11.000Z\",\n             \"_apartmentId\": \"55d2ef2f739304394f9f0795\",\n             \"__v\": 0\n         },..\n     ]\n }",
          "type": "[json]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/consumption.js",
    "groupTitle": "Consumption",
    "name": "GetConsumptionGetsensors"
  },
  {
    "type": "get",
    "url": "/consumption/getUsagePoint/:apartmentId",
    "title": "Get UsagePoint and sensors",
    "group": "Consumption",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "apartmentId",
            "description": "<p>apartmentId of desired UsagePoint</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/consumption/getUsagePoint/14",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"apartmentId\":\"14\",\n\"_id\":\"55af508c9210ee7b13342d8e\",\n\"__v\":0,\n\"Sensors\":[\n  {\n  \"sensorNumber\":0,\n  \"sensorType\":0,\n  \"measureUnit\":\"Wh\",\n  \"label\":\"Consumo Elettrico\",\n  \"lastSampleTimestamp\":\"2015-07-10T15:42:11.000Z\",\n  \"_apartmentId\":\"55af508c9210ee7b13342d8e\",\n  \"_id\":\"55af508d9210ee7b13342d90\",\"__v\":0\n  },\n  {\n  \"sensorNumber\":1,\n  \"sensorType\":1,\n  \"measureUnit\":\"Wh\",\n  \"label\":\"Freezer\",\n  \"lastSampleTimestamp\":\"2015-07-10T15:45:23.000Z\",\n  \"_apartmentId\":\"55af508c9210ee7b13342d8e\",\n  \"_id\":\"55af508d9210ee7b13342d91\",\n  \"__v\":0\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/consumption.js",
    "groupTitle": "Consumption",
    "name": "GetConsumptionGetusagepointApartmentid"
  },
  {
    "type": "get",
    "url": "/consumption/last",
    "title": "Last reading of consumption data",
    "group": "Consumption",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\ncurl -i -X GET -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"userId\": \"dummy\",\n  \"token\": \"dummy\"\n}' \\\nhttp://localhost:3000/api/consumption/last",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  consumption: 0.9164172718301415,\n}",
          "type": "[json]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/consumption.js",
    "groupTitle": "Consumption",
    "name": "GetConsumptionLast"
  },
  {
    "type": "get",
    "url": "/consumption/tou",
    "title": "Time of Usage",
    "group": "Consumption",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "horizon",
            "description": "<p>must be one of the following [1,6,12,24,48,72]</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\ncurl -i -X GET -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"userId\": \"dummy\",\n  \"token\": \"dummy\",\n  \"horizon\": 6\n}' \\\nhttp://localhost:3000/api/consumption/tou",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n  0.9164172718301415,\n  0.1187375511508435,\n  0.9294693802949041,\n  0.1715518836863339,\n  0.10940657090395689,\n  0.6286844359710813\n]",
          "type": "[json]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/consumption.js",
    "groupTitle": "Consumption",
    "name": "GetConsumptionTou"
  },
  {
    "type": "get",
    "url": "/downloadMyData",
    "title": "Fetch IntervalBlock data from Reply",
    "group": "Consumption",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "usagepoint",
            "description": "<p>ApartmentID/UsagePoint</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "from",
            "description": "<p>Starting Date to fetch data from</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "to",
            "description": "<p>Ending Date to fetch data from</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "res",
            "defaultValue": "MONTHLY",
            "description": "<p>Other types RAW/DAILY/WEEKLY/MONTHLY. Stream will be saved in db only if its MONTHLY.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ctype",
            "defaultValue": "S_CONS",
            "description": "<p>S_CONS/S_PROD</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d '{\n \"usagepoint\": 14,\n \"from\": \"2015-06-01\",\n\"to\":\"2015-06-06\",\n\"ctype\":\"S_CONS\",\n\"res\":\"MONTHLY\n}' http://localhost:3000/api/consumption/downloadMyData",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"IntervalBlock\": [\n       {\n           \"__v\": 0,\n           \"apartmentId\": \"14\",\n           \"_apartmentId\": \"55af508c9210ee7b13342d8e\",\n           \"type\": \"S_CONS\",\n           \"kind\": 0,\n           \"_id\": \"55b6427740e5c8de12e3aae1\"\n       }\n   ],\n   \"IntervalReadings\": [\n       {\n           \"__v\": 0,\n           \"_intervalBlockId\": \"55b6427740e5c8de12e3aae1\",\n           \"value\": \"5928.74046667293\",\n           \"timeslot\": \"F2\",\n           \"_id\": \"55b6427740e5c8de12e3aae5\",\n           \"timePeriod\": {\n               \"start\": \"2015-05-31T22:00:00.000Z\",\n               \"duration\": 2592000,\n               \"datacoverage\": 597586\n           }\n       },\n       {\n           \"__v\": 0,\n           \"_intervalBlockId\": \"55b6427740e5c8de12e3aae1\",\n           \"value\": \"6627.6354826726\",\n           \"timeslot\": \"F1\",\n           \"_id\": \"55b6427740e5c8de12e3aaea\",\n           \"timePeriod\": {\n               \"start\": \"2015-05-31T22:00:00.000Z\",\n               \"duration\": 2592000,\n               \"datacoverage\": 833685\n           }\n       },\n       .....\n   ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/consumption.js",
    "groupTitle": "Consumption",
    "name": "GetDownloadmydata"
  },
  {
    "type": "post",
    "url": "/consumption/getAllUsagePointsData",
    "title": "Fetch all UsagePoints & Sensors from Reply",
    "group": "Consumption",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "AddUsagePoints",
            "description": "<p>adds new usage points only</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "UpdateUsagePoints",
            "description": "<p>updates existing UsagePoints with new sensor data if available</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>[Number]</p> ",
            "optional": true,
            "field": "ApartmentId",
            "description": "<p>Adds/Updates the value of only that particular ApartmentId/Ids</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage(PENDING-For now only data is fetched!!):",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  'AddUsagePoints': true,\n  'UpdateUsagePoints': true,\n  'ApartmentId': [14,17]\n}' \\\nhttp://localhost:3000/api/consumption/getAllUsagePointsData",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n { ApartmentID: '14',\n   Success: true,\n   UsagePoint: { __v: 0, apartmentId: '14', _id: 55acb78868440371168b57c7 }\n },\n { ApartmentID: '42',\n   Success: true,\n   UsagePoint: { __v: 0, apartmentId: '42', _id: 55acb78868440371168b57cc }\n },\n { ApartmentID: '17',\n   Success: true,\n   UsagePoint: { __v: 0, apartmentId: '17', _id: 55acb78868440371168b57c8 }\n },\n { ApartmentID: '73',\n   Success: true,\n   UsagePoint: { __v: 0, apartmentId: '73', _id: 55acb78868440371168b57cd }\n }\n]",
          "type": "[json]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/consumption.js",
    "groupTitle": "Consumption",
    "name": "PostConsumptionGetallusagepointsdata"
  },
  {
    "type": "get",
    "url": "/cooperative/:id",
    "title": "Fetch an cooperative by id",
    "group": "Cooperative",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of cooperative</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/cooperative/55f14ce337d4bef728a861ab",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"__v\": 8,\n  \"_id\": \"555ef84b2fd41ffc6e078a34\",\n  \"date\": \"2015-07-01T12:04:33.599Z\",\n  \"name\": \"BRF Hamarby\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/cooperative.js",
    "groupTitle": "Cooperative",
    "name": "GetCooperativeId"
  },
  {
    "type": "post",
    "url": "/cooperative",
    "title": "Create new cooperative",
    "group": "Cooperative",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Cooperative name</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"name\": \"BRF Hamarby\",\n}' \\\nhttp://localhost:3000/api/cooperative",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"__v\": 0,\n  \"_id\": \"55f14ce337d4bef728a861ab\",\n  \"name\": \"BRF Hamarby\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/cooperative.js",
    "groupTitle": "Cooperative",
    "name": "PostCooperative"
  },
  {
    "type": "get",
    "url": "/auth/facebook",
    "title": "Redirect to Facebook login",
    "group": "Facebook_Login",
    "version": "0.0.0",
    "filename": "backend/routes/auth.js",
    "groupTitle": "Facebook_Login",
    "name": "GetAuthFacebook"
  },
  {
    "type": "get",
    "url": "/auth/facebook/callback",
    "title": "Callback URL for Facebook login",
    "group": "Facebook_Login",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Sting</p> ",
            "optional": true,
            "field": "token",
            "description": "<p>After the Facebook call back, the location is redirected to <code>/#/welcome/</code> followed by a user token if the  login is successful. The String value can be &quot;fbUnauthorized&quot;, &quot;err&quot;, or a user token.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/routes/auth.js",
    "groupTitle": "Facebook_Login",
    "name": "GetAuthFacebookCallback"
  },
  {
    "type": "get",
    "url": "/auth/facebook/callbackfb",
    "title": "Callback URL for Facebook login for connection",
    "group": "Facebook_Login",
    "version": "0.0.0",
    "filename": "backend/routes/auth.js",
    "groupTitle": "Facebook_Login",
    "name": "GetAuthFacebookCallbackfb"
  },
  {
    "type": "get",
    "url": "/auth/facebookc",
    "title": "Connecting existing accounts with fb",
    "group": "Facebook_Login",
    "version": "0.0.0",
    "filename": "backend/routes/auth.js",
    "groupTitle": "Facebook_Login",
    "name": "GetAuthFacebookc"
  },
  {
    "type": "get",
    "url": "/feedback",
    "title": "Get feedback comments",
    "group": "Feedback",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "limit",
            "defaultValue": "100",
            "description": "<p>Maximum number of results returned</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "skip",
            "defaultValue": "0",
            "description": "<p>Number of results skipped</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"limit\": \"50\",\n  \"skip\": \"0\"\n}' \\\nhttp://localhost:3000/api/feedback",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"__v\": 0,\n    \"content\": {\n      \"_id\": \"559535ced51d8717277cd815\",\n      \"text\": \"Thank you for this app!\"\n    },\n    \"kind\": \"actionCompleted\",\n    \"date\": \"2015-07-02T12:59:58.932Z\",\n    \"_id\": \"559535ced51d8717277cd816\",\n    \"email\": \"testuser1@test.com\",\n    \"name\": \"My Name\"\n  },\n  {\n    \"__v\": 0,\n    \"content\": {\n      \"_id\": \"559535ced51d8717277cd815\",\n      \"text\": \"Thank you for this app!\"\n    },\n    \"kind\": \"actionCompleted\",\n    \"date\": \"2015-07-02T12:59:58.932Z\",\n    \"_id\": \"559535ced51d8717277cd816\",\n    \"email\": null,\n    \"name\": null\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/feedback.js",
    "groupTitle": "Feedback",
    "name": "GetFeedback"
  },
  {
    "type": "post",
    "url": "/feedback",
    "title": "Send feedback",
    "group": "Feedback",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "anonymous",
            "defaultValue": "false",
            "description": "<p>false = include user's name &amp; email</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>Contents of feedback (free-form JSON)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "content._id",
            "description": "<p>In case the feedback is related to an action, set this to the action's id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "content.text",
            "description": "<p>If there's only one text-field set this to the comment itself</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "kind",
            "description": "<p>What kind of feedback is this, must be one of &quot;general, actionCompleted, actionCanceled&quot;</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"anonymous\": false,\n  \"kind\": \"actionCompleted\",\n  \"content\": {\n    \"_id\": \"559535ced51d8717277cd815\",\n    \"text\": \"Thank you for this app!\"\n  }\n}' \\\nhttp://localhost:3000/api/feedback",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"__v\": 0,\n  \"content\": {\n    \"_id\": \"559535ced51d8717277cd815\",\n    \"text\": \"Thank you for this app!\"\n    },\n  \"date\": \"2015-07-02T12:59:58.932Z\",\n  \"_id\": \"559535ced51d8717277cd816\",\n  \"email\": \"testuser1@test.com\",\n  \"kind\": \"actionCompleted\",\n  \"name\": \"My Name\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/feedback.js",
    "groupTitle": "Feedback",
    "name": "PostFeedback"
  },
  {
    "type": "delete",
    "url": "/household/:id",
    "title": "Delete a Household by id",
    "group": "Household",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of household</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE http://localhost:3000/api/household/555ecb997aa6360e40f26451",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "n",
            "description": "<p>Number of deleted household (0 or 1)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "ok",
            "description": "<p>Mongoose internals</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"n\": 0,\n  \"ok\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/household.js",
    "groupTitle": "Household",
    "name": "DeleteHouseholdId"
  },
  {
    "type": "get",
    "url": "/household/:id",
    "title": "Fetch a household by id",
    "group": "Household",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of household</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/api/household/555ecb997aa6360e40f26451",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"__v\": 8,\n  \"_id\": \"555ef84b2fd41ffc6e078a34\",\n  \"apartmentId\": XYZ,\n  \"appliancesList': [\n    {\n      \"appliance\":\"Washing Machine\",\n      \"quanity\":2\n    },\n    {\n      \"appliance\":\"Heater\",\n      \"quanity\":4\n    }\n  ],\n  \"address\": \"Konemiehentie 2, Otaniemi, Espoo 02150\",\n  \"members\": [\n    {\n      \"_id\": \"testUser1\",\n      \"name\": \"Jane\",\n    },\n     {\n      \"_id\": \"testUser2\",\n      \"name\": \"Jack\",\n    },\n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/household.js",
    "groupTitle": "Household",
    "name": "GetHouseholdId"
  },
  {
    "type": "post",
    "url": "/household",
    "title": "Create new household",
    "group": "Household",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "apartmentId",
            "description": "<p>Energy meter id of the household</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>Household address</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "members",
            "description": "<p>Member ids and names in the household</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Authorization: Bearer $API_TOKEN\" -H \"Content-Type: application/json\" -d \\\n'{\n  \"apartmentId\": \"XYZ\",\n  \"appliancesList\": [\n     {\n     \"appliance\": \"Washing Machine\",\n     \"quantity\": 2\n     },\n     {\n      \"appliance\": \"Heater\",\n      \"quantity\": 4\n     }\n  ],\n  \"address\": \"Konemiehentie 2, Espoo, 02150\",\n  \"members\": [\n     {\n       \"_id\": \"testUser1\",\n       \"name\": \"Jane\",\n     },\n      {\n       \"_id\": \"testUser2\",\n       \"name\": \"Jack\",\n     }\n   ]\n}' \\\nhttp://localhost:3000/api/household",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"__v\": 0,\n  \"_id\": \"555f0163688305b57c7cef6c\",\n  \"apartmentId\": \"XYZ\",\n  \"appliancesList': [\n    {\n      \"appliance\":\"Washing Machine\",\n      \"quanity\":2\n    },\n    {\n      \"appliance\":\"Heater\",\n      \"quanity\":4\n    }\n  ],\n  \"address\": \"Konemiehentie 2, Otaniemi, Espoo, 02150\",\n   \"members\": [\n     \"User\":\n      {\n       \"_id\": \"testUser1\",\n       \"name\": \"Jane\",\n     },\n    \"User\" :\n     {\n      \"_id\": \"testUser2\",\n      \"name\": \"Jack\",\n    }\n  ],\n  \"energyVal\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/household.js",
    "groupTitle": "Household",
    "name": "PostHousehold"
  },
  {
    "type": "post",
    "url": "/household/connectUsagePoint",
    "title": "Connect Household to a usagepoint",
    "group": "Household",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST -H \"Content-Type: application/json\" -d \\\n'{\n  \"apartmentId\": \"UsagePoint apartmentId\",\n  \"familyId\": \"family secret\"\n}' \\\nhttp://localhost:3000/api/household/connectUsagePoint",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n \"_id\": \"55d46b3c39659b8018435238\",\n \"apartmentId\": \"17\",\n \"energyVal\": \"0\",\n \"ownerId\": \"55d2ea529e8773a54c2814fb\",\n \"__v\": 0,\n \"_usagePoint\": \"55d2ef2f739304394f9f0796\",\n \"pendingInvites\": [],\n \"members\": [],\n \"familyComposition\": {\n     \"NumKids\": 0,\n     \"NumAdults\": 0\n },\n \"appliancesList\": [\n     {\n         \"appliance\": \"Washing Machine\",\n         \"quantity\": 2,\n         \"_id\": \"55d46b3c39659b801843523a\"\n     },\n     {\n         \"appliance\": \"Heater\",\n         \"quantity\": 4,\n         \"_id\": \"55d46b3c39659b8018435239\"\n     }\n ],\n \"address\": \"Konemiehentie 2, Espoo, 02150\",\n \"connected\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/household.js",
    "groupTitle": "Household",
    "name": "PostHouseholdConnectusagepoint"
  },
  {
    "type": "post",
    "url": "/household/invite/:userId",
    "title": "Invite a user to your household",
    "group": "Household",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of an user</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST -H \"Content-Type: application/json\" -d \\ \nhttp://localhost:3000/api/household/invite/555f0163688305b57c7cef6c",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/household.js",
    "groupTitle": "Household",
    "name": "PostHouseholdInviteUserid"
  },
  {
    "type": "put",
    "url": "/household/add/:id",
    "title": "Add appliance to household",
    "group": "Household",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of household</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "List",
            "description": "<p>of appliances in the household</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \\\n-H \"Authorization: Bearer 615ea82f7fec0ffaee5...\" \\\n-H \"Content-Type: application/json\" -d \\\n'{\n  \"appliance\": \"1 Oven 800W\"\n}' \\\nhttp://localhost:3000/api/household/add/555ef84b2fd41ffef6e078a34",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/household.js",
    "groupTitle": "Household",
    "name": "PutHouseholdAddId"
  },
  {
    "type": "put",
    "url": "/household/addmember/:id",
    "title": "Add member to household",
    "group": "Household",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of household</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "List",
            "description": "<p>of members in the household</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " curl -i -X PUT \\\n -H \"Authorization: Bearer 615ea82f7fec0ffaee5...\" \\\n -H \"Content-Type: application/json\" -d \\\n '{\n   \"_id\": \"testUser1\",\n   \"name\": \"Jane\",\n  }'\n'{\n   \"_id\": \"testUser2\",\n   \"name\": \"Jack\",\n }' \\\n http://localhost:3000/api/household/addmember/555ef84b2fd41ffef6e078a34",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/household.js",
    "groupTitle": "Household",
    "name": "PutHouseholdAddmemberId"
  },
  {
    "type": "put",
    "url": "/household/:id",
    "title": "Update household profile",
    "group": "Household",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of household</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "address",
            "description": "<p>Adress Object of household</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "houseType",
            "description": "<p>housetyp of household</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \\\n-H \"Authorization: Bearer 615ea82f7fec0ffaee5...\" \\\n-H \"Content-Type: application/json\" -d \\\n'{\n  \"Address\": \"Konemiehentie 2, Otaniemi, Espoo, 02150\"\n}' \\\nhttp://localhost:3000/api/household/555ef84b2fd41ffef6e078a34",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/household.js",
    "groupTitle": "Household",
    "name": "PutHouseholdId"
  },
  {
    "type": "put",
    "url": "/household/invite/:id",
    "title": "Accept or reject a household invite",
    "group": "Household",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of the household (that sent the invitation)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "accepted",
            "description": "<p>TRUE if the received invitation is accepted, FALSE otherwise</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST -H \"Content-Type: application/json\" -d \\\n'{\n  \"accepted\": \"true\",\n}' \\\nhttp://localhost:3000/api/household/555f0163688305b57c7cef6c",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/household.js",
    "groupTitle": "Household",
    "name": "PutHouseholdInviteId"
  },
  {
    "type": "put",
    "url": "/household/remove/:id",
    "title": "Remove appliance from household",
    "group": "Household",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of action</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "List",
            "description": "<p>of appliances in the household</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \\\n-H \"Authorization: Bearer 615ea82f7fec0ffaee5...\" \\\n-H \"Content-Type: application/json\" -d \\\n'{\n  \"appliance\": \"1 Oven 800W\"\n}' \\\nhttp://localhost:3000/api/household/remove/555ef84b2fd41ffef6e078a34",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/household.js",
    "groupTitle": "Household",
    "name": "PutHouseholdRemoveId"
  },
  {
    "type": "put",
    "url": "/household/removemember/:householdId/:userId",
    "title": "Remove a member from household",
    "group": "Household",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "householdId",
            "description": "<p>MongoId of the household</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>MongoId of the user (a member of the household)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " curl -i -X PUT \\\n -H \"Authorization: Bearer 615ea82f7fec0ffaee5...\" \\\n -H \"Content-Type: application/json\" -d \\\n '{\n   \"_id\": \"testUser1\",\n   \"name\": \"Jane\",\n  }'\n'{\n   \"_id\": \"testUser2\",\n   \"name\": \"Jack\",\n }' \\\n http://localhost:3000/api/household/removemember/555ef84b2fd41ffef6e078a34",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/household.js",
    "groupTitle": "Household",
    "name": "PutHouseholdRemovememberHouseholdidUserid"
  },
  {
    "type": "get",
    "url": "/production/last",
    "title": "Last reading of production data",
    "group": "Production",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\ncurl -i -X GET -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"userId\": \"dummy\",\n  \"token\": \"dummy\"\n}' \\\nhttp://localhost:3000/api/production/last",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  production: 0.9164172718301415,\n}",
          "type": "[json]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/production.js",
    "groupTitle": "Production",
    "name": "GetProductionLast"
  },
  {
    "type": "get",
    "url": "/user/actions",
    "title": "List user's actions based on type of actions",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "q",
            "description": "<p>Search query</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/user/actions\\?q\\=foobar",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "GetUserActions"
  },
  {
    "type": "get",
    "url": "/user/invites",
    "title": "Get your pending invites",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/user/invites",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"pendingHouseholdInvites\": [\n   '5562c1d46b1083a13e5b7843'\n  ],\n  \"pendingCommunityInvites\" [\n   '5562c1d46b1083a13e5b7844'\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "GetUserInvites"
  },
  {
    "type": "get",
    "url": "/user/profile",
    "title": "Get your profile",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/user/profile",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"email\": \"testuser1@test.com\",\n  \"profile\": {\n    \"name\": \"Test User\"\n  },\n  \"actions\": {\n    \"pending\": {},\n    \"inProgress\": {},\n    \"done\": {},\n    \"declined\": {},\n    \"na\": {}\n  },\n  \"leaves\": 42,\n  \"householdId\": null,\n  \"pendingHouseholdInvites\": [\n   '5562c1d46b1083a13e5b7843'\n  ],\n  \"pendingCommunityInvites\" [\n   '5562c1d46b1083a13e5b7844'\n  ],\n  \"energyConsumption\": {},\n  \"production\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "GetUserProfile"
  },
  {
    "type": "get",
    "url": "/user/profile/:userId",
    "title": "Get another user's profile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of desired user</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/user/profile/555f0163688305b57c7cef6c",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"email\": \"testuser1@test.com\",\n  \"profile\": {\n    \"name\": \"Test User\"\n  },\n  \"actions\": {\n    \"pending\": {},\n    \"inProgress\": {},\n    \"done\": {},\n    \"declined\": {},\n    \"na\": {}\n  },\n  \"leaves\": 42,\n  \"householdId\": null,\n  \"energyConsumption\": {},\n  \"production\": 0\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "GetUserProfileUserid"
  },
  {
    "type": "get",
    "url": "/user/profilePicture/:userId",
    "title": "Get user's profile picture",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/profile\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\"\nhttp://localhost:3000/api/user/profilePicture/:userId",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<image data>",
          "type": "binary"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "GetUserProfilepictureUserid"
  },
  {
    "type": "get",
    "url": "/user/search",
    "title": "Search for users",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "email",
            "description": "<p>Search by email</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Search by user's profile name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "userId",
            "description": "<p>Search by user's MongoId</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"name\": \"Test User\"\n}' \\\nhttp://localhost:3000/api/user/search",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"_id\": \"5562c1d46b1083a13e5b7843\",\n    \"email\": \"testUser@foo.com\",\n    \"profile\": {\n      \"name\": \"Test User\",\n      ...\n    }\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "GetUserSearch"
  },
  {
    "type": "get",
    "url": "/user/token",
    "title": "Get current API token",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>HTTP Basic Authentication credentials</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "\"Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==\"",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# NOTE: exceptionally uses your email:password, replace them in the export command below!\nexport HTTP_BASIC=$(echo -n \"testuser1@test.com:topsecret\" | base64)\n\ncurl -i -X GET -H \"Authorization: Basic $HTTP_BASIC\" \\\nhttp://localhost:3000/api/user/token",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"token\": \"615ea82f7fec0ffaee5...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "GetUserToken"
  },
  {
    "type": "get",
    "url": "/user/:userId/achievements",
    "title": "Get user's achievements",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/user/555f0163688305b57c7cef6c/achievements",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  TODO\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "GetUserUseridAchievements"
  },
  {
    "type": "get",
    "url": "/user/:userId/fbfriends",
    "title": "Get user's friends from facebook",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/user/555f0163688305b57c7cef6c/fbfriends",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n       \"_id\": \"55db07f688c54b2331c1536d\",\n       \"profile\": {\n           \"name\": \"John Amicifhiijch Rosenthalberg\",\n           \"gender\": \"male\",\n           \"dob\": \"1980-08-07T22:00:00.000Z\"\n       }\n   },\n   {\n       \"_id\": \"55dd7f4b313bc4551d8cecbe\",\n       \"profile\": {\n           \"name\": \"Betty Amifjibhgdbg Fergieson\",\n           \"gender\": \"female\",\n           \"dob\": \"1980-08-07T22:00:00.000Z\"\n       }\n   },..\n ]",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "GetUserUseridFbfriends"
  },
  {
    "type": "post",
    "url": "/user/postFB",
    "title": "Post on FB (always ask user before posting)",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "message",
            "description": "<p>Message to be posted</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/profile\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"message\": \"Hey I completed xyz challenge. (You can also add a link to a photograph)\"\n}' \\\nhttp://localhost:3000/api/user/postFB",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{//id is post_id from facebook\n  \"id\":\"10155784135330422_10156011152545422\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{//if error occurs\n \"message\": \"Duplicate status message\",\n \"type\": \"FacebookApiException\",\n \"code\": 506,\n \"error_subcode\": 1455006,\n \"is_transient\": false,\n \"error_user_title\": \"Duplicate Status Update\",\n \"error_user_msg\": \"This status update is identical to the last one..\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "PostUserPostfb"
  },
  {
    "type": "post",
    "url": "/user/profile",
    "title": "Update your profile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Your nickname</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "dob",
            "description": "<p>Your date of birth</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "photo",
            "description": "<p>Profile photo</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/profile\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"name\": \"New Name\",\n  \"dob\": \"11 25 1990\"\n}' \\\nhttp://localhost:3000/api/user/profile",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"dob\": \"1990-11-25T00:00:00.000Z\",\n  \"name\": \"New Name\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "PostUserProfile"
  },
  {
    "type": "post",
    "url": "/user/profilePicture",
    "title": "Update your profile picture",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/profile\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: image/png\" -H \"Authorization: Bearer $API_TOKEN\" \\\n--data-binary @/path/to/picture.png \\\nhttp://localhost:3000/api/user/profilePicture",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "PostUserProfilepicture"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "New user registration",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>User's e-mail address</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>User's nickname</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "language",
            "description": "<p>User's preferred language; for now have support for English (default), Italian and Swedish</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# NOTE: this is the only API call which does not require authentication!\n\ncurl -i -X POST -H \"Content-Type: application/json\" -d \\\n'{\n  \"email\": \"testuser@test.com\",\n  \"name\": \"Test User\",\n  \"password\": \"topsecret\",\n  \"language\": \"Swedish\"\n}' \\\nhttp://localhost:3000/api/user/register",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"token\": \"2af38938a7e2aa3daa429278a8f4...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "PostUserRegister"
  },
  {
    "type": "post",
    "url": "/user/sendMail/:type",
    "title": "Send an Email invitation",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the invitation. Can be one of:</p> <ul> <li><strong>householdMember</strong>: The mail receiver is invited to sign up YouPower and to join the sender's household</li> <li><strong>TODO</strong>: The mail receiver is invited to sign up YouPower</li> </ul> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of the receiver</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the receiver</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "message",
            "description": "<p>The sender's private message to the receiver</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/profile\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n'{\n  \"name\": \"Receiver Name\",\n  \"email\": \"receiver@example.com\",\n  \"message\": \"A private message\"\n}' \\\nhttp://localhost:3000/api/user/user/sendMail/householdMember",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "PostUserSendmailType"
  },
  {
    "type": "post",
    "url": "/user/token",
    "title": "Generate new API token",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>HTTP Basic Authentication credentials</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "\"Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==\"",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# NOTE: exceptionally uses your email:password, replace them in the export command below!\nexport HTTP_BASIC=$(echo -n \"testuser1@test.com:topsecret\" | base64)\n\ncurl -i -X POST -H \"Authorization: Basic $HTTP_BASIC\" \\\nhttp://localhost:3000/api/user/token",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"token\": \"615ea82f7fec0ffaee5...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "backend/routes/user.js",
    "groupTitle": "User",
    "name": "PostUserToken"
  },
  {
    "type": "get",
    "url": "/user/action",
    "title": "Get user's action list",
    "group": "User_Action",
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/user/action",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"pending\": {},\n  \"inProgress\": {\n    \"55b230d69a8c96f177154fa1\": {\n      \"_id\": \"55b230d69a8c96f177154fa1\",\n      \"name\": \"Disable standby\",\n      \"description\": \"Turn off and unplug standby power of TV, stereo, computer, etc.\",\n      \"effort\": 2,\n      \"impact\": 2,\n      \"category\": null,\n      \"startedDate\": \"2015-08-11T10:31:39.934Z\"\n    },\n    \"55b230d69a8c96f177154fa2\": {\n      \"startedDate\": \"2015-08-11T10:43:33.485Z\",\n      \"impact\": 3,\n      \"effort\": 4,\n      \"description\": \"Find and seal up leaks\",\n      \"name\": \"Leaks\",\n      \"_id\": \"55b230d69a8c96f177154fa2\"\n    }\n  },\n  \"done\": {},\n  \"declined\": {},\n  \"na\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/userAction.js",
    "groupTitle": "User_Action",
    "name": "GetUserAction"
  },
  {
    "type": "get",
    "url": "/user/action/suggested",
    "title": "Get list of suggested user actions",
    "group": "User_Action",
    "description": "<p>Returns top three most recent actions that the user has not tried</p> ",
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X GET -H \"Authorization: Bearer $API_TOKEN\" \\\nhttp://localhost:3000/api/user/action/suggested",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"__v\": 0,\n    \"_id\": \"555f0163688305b57c7cef6c\",\n    \"description\": \"Disabling standby can save up to 10% in total electricity costs.\",\n    \"effort\": 2,\n    \"impact\": 2,\n    \"name\": \"Disable standby on your devices\",\n    \"ratings\": []\n  },\n  {\n    ...\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "backend/routes/userAction.js",
    "groupTitle": "User_Action",
    "name": "GetUserActionSuggested"
  },
  {
    "type": "post",
    "url": "/user/action/:actionId",
    "title": "Change state for user action",
    "group": "User_Action",
    "description": "<p>Used to start/stop actions for a user.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "actionId",
            "description": "<p>Action's MongoId</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "state",
            "description": "<p>Can be one of: 'pending', 'inProgress', 'alreadyDoing', 'done', 'canceled', 'declined', 'na'.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "postponed",
            "description": "<p>Must be provided if state is 'pending'. Specifies at which time the user will be reminded of the action again.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "# Get API token via /api/user/token\nexport API_TOKEN=fc35e6b2f27e0f5ef...\n\ncurl -i -X POST -H \"Authorization: Bearer $API_TOKEN\" -H \"Content-Type: application/json\" -d \\\n'{\n  \"state\": \"inProgress\"\n}' \\\nhttp://localhost:3000/api/user/action/55b230d69a8c96f177154fa1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"pending\": {},\n  \"inProgress\": {\n    \"55b230d69a8c96f177154fa1\": {\n      \"_id\": \"55b230d69a8c96f177154fa1\",\n      \"name\": \"Disable standby\",\n      \"description\": \"Turn off and unplug standby power of TV, stereo, computer, etc.\",\n      \"effort\": 2,\n      \"impact\": 2,\n      \"category\": null,\n      \"startedDate\": \"2015-08-11T10:31:39.934Z\"\n    },\n    \"55b230d69a8c96f177154fa2\": {\n      \"startedDate\": \"2015-08-11T10:43:33.485Z\",\n      \"impact\": 3,\n      \"effort\": 4,\n      \"description\": \"Find and seal up leaks\",\n      \"name\": \"Leaks\",\n      \"_id\": \"55b230d69a8c96f177154fa2\"\n    }\n  },\n  \"done\": {},\n  \"declined\": {},\n  \"na\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/userAction.js",
    "groupTitle": "User_Action",
    "name": "PostUserActionActionid"
  },
  {
    "type": "get",
    "url": "/buildings/getData",
    "title": "Get energy consumption data",
    "group": "buildings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "buildingName",
            "description": "<p>Name of the Building</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Type",
            "description": "<p>Electricity/Heating/Water</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "backend/routes/buildings.js",
    "groupTitle": "buildings",
    "name": "GetBuildingsGetdata"
  },
  {
    "type": "post",
    "url": "/buildings/storeEnergyData",
    "title": "Fetch all UsagePoints & Sensors from Reply",
    "group": "buildings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "BuildingName",
            "description": "<p>Name of the building</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Type",
            "description": "<p>Electricity/Heating/Water</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>[Number]</p> ",
            "optional": true,
            "field": "ApartmentId",
            "description": "<p>Adds/Updates the value of only that particular ApartmentId/Ids</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage(PENDING-For now only data is fetched!!):",
        "content": " # Get API token via /api/user/token\n export API_TOKEN=fc35e6b2f27e0f5ef...\n\n curl -i -X POST -H \"Content-Type: application/json\" -H \"Authorization: Bearer $API_TOKEN\" -d \\\n '{\n   'BuildingName': 'Marintalo',\n   'Type': 'Electricity',\n\t  'fileName':'Electricity.csv'\n }' \\\n http://localhost:3000/api/consumption/getAllUsagePointsData",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n { ApartmentID: '14',\n   Success: true,\n   UsagePoint: { __v: 0, apartmentId: '14', _id: 55acb78868440371168b57c7 }\n },\n { ApartmentID: '42',\n   Success: true,\n   UsagePoint: { __v: 0, apartmentId: '42', _id: 55acb78868440371168b57cc }\n },\n { ApartmentID: '17',\n   Success: true,\n   UsagePoint: { __v: 0, apartmentId: '17', _id: 55acb78868440371168b57c8 }\n },\n { ApartmentID: '73',\n   Success: true,\n   UsagePoint: { __v: 0, apartmentId: '73', _id: 55acb78868440371168b57cd }\n }\n]",
          "type": "[json]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/routes/buildings.js",
    "groupTitle": "buildings",
    "name": "PostBuildingsStoreenergydata"
  }
] });