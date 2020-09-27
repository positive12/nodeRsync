#!/bin/sh
curl -X POST -H\
  "Content-Type: application/json" -d\
  '{ "activity":"RSYNC", 
     "title": "**Start Copying NAS-3 to NAS-251 **",
      "body":"* Location: [  **NEXTCLOUD** ]" }'\
    https://hooks.glip.com/webhook/9cc4278b-8e8d-428a-ad12-489e70fcc218



