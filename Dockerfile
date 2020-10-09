FROM node:latest

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY src .

EXPOSE 8080
CMD ["node", "index.js"]