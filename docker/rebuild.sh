docker-compose down
docker-compose build
docker-compose up -d
docker network inspect docker_backend | grep "Gateway"
