#!/bin/sh

cat /app/openapi_specs/SAP

export FLASK_APP=main.py
export FLASK_DEBUG=1
export APP_CONFIG_FILE=config.py
export FLASK_RUN_HOST=0.0.0.0
export FLASK_RUN_PORT=6000
flask run
