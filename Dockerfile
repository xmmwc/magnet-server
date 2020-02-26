FROM node:12.16.1

ENV SERVER_PORT='9090'

WORKDIR /app

COPY package*.json .

RUN npm install

COPY src ./src/

RUN yarn build;

EXPOSE 12365 9090

CMD [ "node" ,"src/app.js"]