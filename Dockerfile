FROM node:15.2.1-alpine3.12

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start" ]
