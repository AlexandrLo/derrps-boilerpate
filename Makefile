init:
	docker-compose up --build
build: 
	docker-compose build --no-cache
up:
	docker-compose up
dup:
	docker-compose up -d
down:
	docker-compose down
restart:
	docker-compose restart
clean:
	docker-compose down -v --rmi all --remove-orphans
npm all:
	npm install --prefix api
	npm install --prefix client
migrate:
	docker-compose exec api npx sequelize db:migrate