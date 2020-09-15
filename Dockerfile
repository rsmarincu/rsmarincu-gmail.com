FROM node:lts-alpine as build-stage

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# cop project files and folders to the current working directory (i.e. 'app' folder)
COPY . .


CMD [ "npm", "run", "start" ]