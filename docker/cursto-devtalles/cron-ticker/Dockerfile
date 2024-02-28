# /app /usr /lib
FROM node:20.11.1-alpine3.19

# cd app 
WORKDIR /app

# Dest /app 
COPY package.json ./

# install dependencies 
RUN npm install

COPY app.js ./

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
