module.exports = {
  "app": {
    "local_modules_path": "/source/deltanetdan/github/adapt-authoring"
  },
  "adapt-authoring-logger": {
    "enabledLevels": [
      "error",
      "warn",
      "success",
      "info",
      "debug"
    ]
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
    "rootDir": "/source/deltanetdan/github/adapt-authoring",
    "tempDir": "/source/deltanetdan/github/adapt-authoring/temp"
  },
  "adapt-authoring-docs": {
    "output_dir": "/source/deltanetdan/github/adapt-authoring/docs"
  },
  "adapt-authoring-auth": {
    "disable": true,
    "tokenSecret": "1234567890",
    "tokenLifespan": "99y",
    "tokenIssuer": "adapt"
  }
};
