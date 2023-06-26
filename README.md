## Простой бэкенд для интернет магазина.

### Задачи:

- [ ] Пользователь
  - [X] Регистрация
    - [X] Шифрование паролей
    - [X] JWT-токен
  - [X] Авторизация
  - [X] Проверка прав доступа (роли).
- [ ] Товары
    - [x] Категории
    - [ ] Корзина
- [ ] Контейнеризация 
  - [x] Dockerfile
  - [x] Docker-compose

## API
```
/api/v1/user/login
/api/v1/user/register
```

## Запуск приложения

### Создайте .env файл
```
PORT=3000

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=

JWT_SECRET_KEY=
JWT_PUBLIC_KEY=
```

#### Запустите приложение в режиме разработки
```
npm run test
```

## Запуск приложения в докер контейнере

#### Настройте виртуальное окружение в docker/docker-compose.yml
```
docker-compose build
docker-compose up -d
```
