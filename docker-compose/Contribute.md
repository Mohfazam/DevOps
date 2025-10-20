
# Manual Installation  

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
    - Start Posgres
      - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    - Build the Image - `docker build -t user-projecct .`
    - Start the image - `docker run -p 3000:3000 user-project`
