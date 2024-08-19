#!/bin/bash

ENVIRONMENT=$1

if [ "$ENVIRONMENT" == "QA" ]; then
    echo "Deploying to QA environment"
    # QA deployment steps
elif [ "$ENVIRONMENT" == "PROD" ]; then
    echo "Deploying to PROD environment"
    # PROD deployment steps
    DC_NAME="powerimo-site-prod"

    # shellcheck disable=SC1090
    source ~/config/powerimo-site-vars-prod

    docker stop ${DC_NAME} > /dev/null
    docker container rm ${DC_NAME}
    # shellcheck disable=SC2153
    docker pull "${DI_NAME}"

    docker run -d \
        --name=${DC_NAME} \
        -p 15980:80 \
        "${DI_NAME}"
else
    echo "Unknown environment: $ENVIRONMENT"
    exit 1
fi