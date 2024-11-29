FROM node:alpine
WORKDIR /app
COPY package.json package-lock.json /app
COPY src/index.js /app
RUN npm install
EXPOSE 5050
ENTRYPOINT [ "node", "index.js" ]