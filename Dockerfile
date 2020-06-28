FROM node:12.16.1

ENV SERVER_PORT='9090'

WORKDIR /app

ADD package.json yarn.lock ./

RUN yarn

ADD src ./src/

EXPOSE 12365 9090

CMD [ "node" ,"src/app.js"]