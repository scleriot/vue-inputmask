# winston-googlecloud

Google Cloud Logging transport for winston.js

This library is licensed under MIT Licence.

# Usage
``` js
var winston = require('winston');
//
// Requiring `winston-googlecloud` will expose
// `winston.transports.GoogleCloudLogging`
//
require('winston-googlecloud');

var options = {
    level: 'verbose',
    gcl_project_id: 'my-google-project-id',
    gcl_key_filename: "PATH TO JSON CREDENTIALS FILE",
    gcl_log_name: "my-log"
}
winston.add(winston.transports.GoogleCloudLogging, options);
```
