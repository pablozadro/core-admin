# Core / Docs / Docker


```bash
docker system prune # remove all unused containers, networks, images
docker system prune -a # remove all, not just dangling ones
docker system prune -a --volumes # also the volumes
```


```bash
# run the command using the web service to create the project
sudo docker-compose run web django-admin startproject core .

docker-compose build # build/rebuild the project
docker-compose up # builds, (re)creates, starts, and attaches to containers for a service
```


```bash
docker image ls -a # list all images
```


```bash
docker container stop {container_name}
docker container exec -it {container_name} bash
```

```bash
docker volume inspect {volume_name}
```

```bash
docker container exec -it core_web bash
python manage.py migrate
python manage.py createsuperuser
```

```bash
python manage.py makemigrations {app}
```

## Flow

```bash
# ONLY THE FIRST TIME!
sudo docker-compose run web django-admin startproject core .

docker-compose build
docker-compose up

docker container exec -it core_web bash
python manage.py migrate
python manage.py createsuperuser
```