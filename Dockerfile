FROM node:10-alpine
COPY src ./src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
ENTRYPOINT ["npm", "run", "start:production"]
