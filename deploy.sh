#!/bin/bash

docker build --tag fluxuscontainerregistry.azurecr.io/fluxus:latest .

docker push fluxuscontainerregistry.azurecr.io/fluxus:latest