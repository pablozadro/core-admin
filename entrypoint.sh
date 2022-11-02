#!/bin/bash
echo "[+] Entrypoint loaded"

python manage.py migrate

# This is to execute the comnands in the docker-compose.yml file
exec "$@"