# /app /usr /lib
# FROM --platform=linux/arm64 node:20.11.1-alpine3.19

# create buildx ---------------------
# docker buildx create --name mybuilder --drive docker-container --bootstrap --use

# FROM --platform=$BUILDPLATFORM node:20.11.1-alpine3.19
# docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t davidcastel26/cron-ticker:latest --push .

FROM node:20.11.1-alpine3.19
# docker buildx build --platform linux/amd64,linux/arm64 -t davidcastel26/cron-ticker:oso --push .

# cd app 
WORKDIR /app

# Dest /app 
COPY package.json ./

# install dependencies 
RUN npm install

# COPY app.js ./
COPY . .

# Realizar testing
RUN npm run test

# Eliminar files and dirs not necesary
RUN rm -rf tests && rm -rf node_modules

# install only production dependencies
RUN npm install --prod

# Command run 
CMD ["node","app.js"]
# scrip in terminal 
# docker build --tag cron-ticker .
