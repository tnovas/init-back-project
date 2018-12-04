FROM node:8-alpine

RUN mkdir -p /
WORKDIR /

COPY ./build /build
COPY ./package.json /package.json

RUN cd / && npm install

CMD [ "npm", "run", "start:prod" ]

EXPOSE 8001