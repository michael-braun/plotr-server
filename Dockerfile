FROM node:12-alpine

WORKDIR /usr/src/app
COPY . .
RUN apk add python3 build-base
RUN npm ci
RUN npm run build


FROM node:12-alpine
EXPOSE 8080
WORKDIR /usr/src/app

COPY package*.json ./
COPY .npmrc .
RUN npm ci --only=production

COPY --from=0 /usr/src/app/lib ./lib

CMD ["node", "lib/index.js"]
