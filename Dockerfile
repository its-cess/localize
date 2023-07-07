FROM node:20

COPY ./ /app

# Create app directory
WORKDIR /app

# Install app dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

RUN npm i -g pm2

ENV PATH /usr/local/bin:$PATH

RUN npm run build

WORKDIR /app/build

CMD pm2-runtime start node --name "my-app" -- index.js
