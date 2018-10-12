# Docker Node.js Starter Kit

Docker compose config for developing Node.js application.

## Usage
```
mkdir my-project
cd my-project
git clone https://github.com/bskton/docker-nodejs-starter-kit.git .
git remote rm origin
cp .env.dist .env
```
Add your values into .env
```
docker-compose up
```