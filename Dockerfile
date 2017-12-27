FROM alpine:latest
MAINTAINER wicac@yahoo.com

RUN apk update && apk add tar gzip
RUN apk add --update nodejs

RUN mkdir -p /apps/rest-shop-tutorial/api/routes

WORKDIR /apps/rest-shop-tutorial

COPY api/routes /apps/rest-shop-tutorial/api/routes
COPY server.js . 
COPY app.js .
COPY .env .
COPY package.json .


RUN npm install --save express
RUN npm install --save-dev nodemon
RUN npm install --save morgan

ENTRYPOINT ["node"]
CMD ["server.js"]
