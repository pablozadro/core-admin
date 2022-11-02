# Core-Admin
It ain't much, but it's honest work.


## 1. Setup environment

Rename `.env.example` file to `.env` and fill with the required data. 
**Use a simulated string for the secret key** to be able to build.
```bash
cp .env.example .env
```


## 2. Build Docker Services

```bash
docker compose build
docker compose up
``` 


## 3. Generate a the SECRET_KEY

```bash
docker container exec -it core_admin_web bash
./tasks/utils/secret_key
```


## 4. Create the admin user (if needed)
Now the superuser is created with the fixtures so this steps it's not required.

```bash
docker container exec -it core_admin_web bash
python manage.py createsuperuser
```


## 5. Load fixtures

```bash
docker container exec -it core_admin_web bash
./tasks/db/load
```

## 6. Setup the UI

```bash
cd ui
nvm use
npm install

npm run sass:watch
```