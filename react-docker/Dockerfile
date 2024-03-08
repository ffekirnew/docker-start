FROM node:21-alpine

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app
COPY package*.json .
RUN npm install

COPY . .

ENV api=https://api.com/api
EXPOSE 5173 

CMD ["npm", "run dev"]
