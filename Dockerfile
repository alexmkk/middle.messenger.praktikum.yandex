FROM node:15-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD node server.js