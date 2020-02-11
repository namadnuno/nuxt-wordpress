FROM node:13.8

# Dependencies cache
RUN mkdir frontend
COPY package.json yarn.lock frontend/
WORKDIR /frontend/
RUN yarn install

# Code cache
COPY . frontend/
CMD [ "yarn dev" ]
