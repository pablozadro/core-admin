# Core-Admin
It ain't much, but it's honest work.


## Getting started

### Setup environment

Rename `.env.example` file to `.env` and fill with the required data:
```bash
cp .env.example .env
```

### Build the project

```bash
docker-compose build
docker-compose up
``` 

### Create the admin user

```bash
docker container exec -it core_web bash
python manage.py createsuperuser
```