module.exports = {
  "app": {
    "local_modules_path": "/source/adapt-security/adapt-authoring"
  },
  "adapt-authoring-logger": {
    "levels": [
      "error",
      "warn",
      "success",
      "info",
      "debug"
    ],
    "dateFormat": "iso",
    "showTimestamp": true
  },
  "adapt-authoring-mongodb": {
    "host": "localhost",
    "port": 27017,
    "dbname": "at-test"
  },
  "adapt-authoring-server": {
    "host": "localhost",
    "port": 5000,
    "logStackOnError": true,
    "url": "http://localhost:5000"
  },
  "adapt-authoring-core": {
    "rootDir": "/source/adapt-security/adapt-authoring",
    "tempDir": "/source/adapt-security/adapt-authoring/temp"
  },
  "adapt-authoring-docs": {
    "outputDir": "/source/adapt-security/adapt-authoring/docs"
  },
  "adapt-authoring-auth": {
    "disable": false,
    "tokenSecret": "1234567890",
    "tokenLifespan": "99y",
    "tokenIssuer": "adapt",
    "logMissingPermissions": true
  },
  "adapt-authoring-sessions": {
    "collectionName": "usersessions",
    "lifespan": 604800000,
    "sameSite": "none",
    "secure": false,
    "secret": "hghdjsklsjdhffgfhfhffh"
  },
  "adapt-authoring-adaptFramework": {
    "buildLifespan": "7 days"
  },
  "adapt-authoring-jsonschema": {
    "formatOverrides": {}
  },
  "adapt-authoring-lang": {
    "locale": "en",
    "supportedLanguages": ["en"]
  },
  "adapt-authoring-middleware": {
    "acceptedTypes": ["application/json"],
    "fileUploadMaxFileSize": 524288000,
    "fileUploadTempDir": "/source/adapt-security/adapt-authoring/temp/uploads"
  },
  "adapt-authoring-localauth": {
    "saltRounds": 0,
    "failsUntilTemporaryLock": 5,
    "failsUntilPermanentLock": 20,
    "temporaryLockDuration": 1
  },
  "adapt-authoring-roles": {
    "roleDefinitions": [
      {
        "shortName": "authduser",
        "displayName": "Authenticated User",
        "scopes": [
          "clear:session",
          "read:config",
          "read:lang"
        ]
      },
      {
        "shortName" : "superuser",
        "displayName" : "Super user",
        "scopes" : [ "*:*"]
      }
    ],
    "defaultRoles": ["authduser"],
    "defaultRolesForAuthTypes": {
      "github": ["superuser"],
      "local": ["authduser"]
    }
  },
  "adapt-authoring-assets": {
    "maxFileUploadSize": 1000000,
    "uploadDir": "/source/adapt-security/adapt-authoring/temp/uploads",
    "thumbnailMaxWidth": 200,
    "thumbnailMaxHeight": 100,
    "thumbnailSuffix": "_tn",
    "acceptableTypes": ["image/jpeg", "image/png", "image/gif", "audio/mpeg", "video/mp4"]
  }
};