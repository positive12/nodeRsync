FROM node:10.22.0-buster

RUN apt-get update && apt-get upgrade -y
RUN apt-get install rsync grsync -y

WORKDIR /var/apps
COPY package.json /var/apps

RUN npm install 
COPY ./ var/apps
CMD [ "npm", "run", "dev" ]
