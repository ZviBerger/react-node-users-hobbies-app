FROM node:18-alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

COPY . .

RUN npm install

RUN npx prisma generate


EXPOSE 3000

CMD [ "npm", "start" ]
