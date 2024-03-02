# /app /usr /lib
# FROM --platform=linux/arm64 node:20.11.1-alpine3.19

# create buildx ---------------------
# docker buildx create --name mybuilder --drive docker-container --bootstrap --use

# FROM --platform=$BUILDPLATFORM node:20.11.1-alpine3.19
# docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t davidcastel26/cron-ticker:latest --push .

FROM node:20.11.1-alpine3.19 as deps
# docker buildx build --platform linux/amd64,linux/arm64 -t davidcastel26/cron-ticker:oso --push .

# cd app 
WORKDIR /app

# Dest /app 
COPY package.json ./

# install dependencies 
RUN npm install


# ------------------------- FINAL DE LA PRIMERA ETAPA

FROM node:20.11.1-alpine3.19 as builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run test 

# ------------------------ FINAL DE LA SEGUNDA ETAPA 

# Production dependencies 
FROM node:20.11.1-alpine3.19 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

# EJECUTAR LA APP ------------------------
FROM node:20.11.1-alpine3.19 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
# copiar el dir con los files dentro de el 
COPY app.js ./
# copiar el dir de tasks y pegarlo en la ubicacion ./
COPY tasks/ ./tasks

# --- COPY app.js ./
# COPY . .

# ------ Realizar testing
# RUN npm run test

# ------ Eliminar files and dirs not necesary
# RUN rm -rf tests && rm -rf node_modules

# ------  install only production dependencies
# RUN npm install --prod

# Command run 
CMD ["node","app.js"]
# scrip in terminal 
# docker build --tag cron-ticker .
