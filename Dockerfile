FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD ["node", "server.js"]