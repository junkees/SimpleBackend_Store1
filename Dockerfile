FROM node:latest

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY SimpleBackend_Store1 .

CMD ["npm", "test"]