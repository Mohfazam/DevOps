# Installation

## Manual Installation  

    - Install nodejs locally
    - Clone the repo
    - Install dependencies (npm install)
    - Start the DB Locally
      - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    - Change the .env file and update your DB Credentials
    - npx prisma migrate
    - npx prisma generate
    - npm run build
    - npm run start

## Docker Installation

    - Install Docker
    - Create a network
      - `docker network create user_project`
    - Start Posgres
      - docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    - Build the Image - `docker build --network=host -t user-project .`
    - Start the image - `docker run -e DATABSE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres --network user_project -p 3000:3000 user-project`
  
## Docker Compose installation steps\

- install docker, docker-compose
- Run `docker-compose up`
  