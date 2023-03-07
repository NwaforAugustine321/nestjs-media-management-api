
## Nestjs media api
# Project Guidelines

A brief guideline on how to build and run the service.


## Run Locally

Clone the project

```bash
  git clone https://github.com/NwaforAugustine321/nestjs-media-management-api.git
```

Go to the project directory

```bash
  cd next-api
```

Install dependencies


```bash
  npm install or npm ci
```

Build the docker compose file for db setup(Requirements: Docker deamon must be installed)
```bash
  docker-compose up -d
```

Migrate the table using prisma orm command
```bash
  npx prisma migrate dev 
```

Start the project

```bash
  npm run start:dev
```

