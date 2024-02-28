# /app /usr /lib
FROM node:20.11.1-alpine3.19

# cd app 
WORKDIR /app

# Dest /app 
COPY app.js package.json ./

# install dependencies 
RUN npm install

# Command run 
CMD ["node","app.js"]


# scrip in terminal 
# docker build --tag cron-ticker .
