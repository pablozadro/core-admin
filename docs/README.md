# Docs


## Docker commands

```bash
# builds, (re)creates, starts, and attaches to containers for a service
docker compose up

# enter the web container to execute manage.py
docker container exec -it core_admin_web bash
```


## Python commands

```bash
pip install {package}
pip install {package}=={x.y.z}
```


## Django commands

```bash
python manage.py startapp {app} apps/{app}
python manage.py makemigrations {app}
python manage.py migrate {app}
python manage.py check 
python manage.py test apps/{app}

python manage.py dumpdata {app}.{Model} --indent=2 --output apps/{app}/fixtures/{file}.json
python manage.py loaddata apps/{app}/fixtures/{file}.json
```


## Tasks

```bash
docker container exec -it core_admin_web bash

./tasks/docker/prune
./tasks/db/dump
./tasks/db/load
```