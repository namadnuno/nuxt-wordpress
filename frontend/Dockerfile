FROM node:13.8

RUN mkdir frontend
ADD . frontend
WORKDIR /frontend

RUN npm i nuxt -g
RUN yarn
#RUN yarn start


ENV HOST 0.0.0.0