#  IMAGEN INICIAL Y LO LLAMAMOS DEV ESTO NOS SIRVE PARA EL PASO DE DESARROLLO
FROM node:19-alpine3.15 as dev
# IR/CREAR WORKDIR DE APP 
WORKDIR /app
# CIPIAMOS EL PACKAGE.JSON 
COPY package.json ./
# SE HACE EL YARN INSTALL
RUN yarn install
# LO MONTOAMOS PARA RUN DEV/START DEV 
CMD [ "yarn","start:dev" ]

#  IMAGEN INICIAL Y LO LLAMAMOS DEV-DEPS 
FROM node:19-alpine3.15 as dev-deps
# IR/CREAR WORKDIR DE APP 
WORKDIR /app
# CIPIAMOS EL PACKAGE.JSON 
COPY package.json package.json
# SE HACE EL YARN INSTALL Y BLOQUEAMOS LAS VERSIONES QUE TENMOS EN EL PACKAGE.JSON
RUN yarn install --frozen-lockfile


# CREAMOS EL NUEVO STATE QUE ES EL BUILDER 
# SE COPIA TODO LO QUE NO ESTA IGNORADO EN EL .DOCKERIGNORE en COPY 2
# RUN yarn test
FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# INTALAR DEPS PERO SOLO LAS DE PRODUCTIONS en RUN
FROM node:19-alpine3.15 as prod-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --prod --frozen-lockfile



FROM node:19-alpine3.15 as prod
# EXPONEMOS EL PUERTO DE LA APLICACION 
EXPOSE 3000
WORKDIR /app
ENV APP_VERSION=${APP_VERSION}
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD [ "node","dist/main.js"]

# MULTY PLATFROM IMAGE this must be at the end
# docker buildx create --name mytesloshop --bootstrap --use
# docker buildx build --platform linux/amd64,linux/arm64 -t davidcastel26/teslo-shop:1.0.0 --push .
