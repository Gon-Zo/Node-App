FROM node:12-alpine

USER root

WORKDIR /webapp

COPY package.json /webapp/package.json

RUN npm install

COPY . /src

WORKDIR /src

CMD npm start
