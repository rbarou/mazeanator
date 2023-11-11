FROM node:18-alpine
WORKDIR /maze-back/

COPY public /maze-back/src
COPY package.json /maze-back/package.json
COPY package-lock.json /maze-back/package-lock.json

RUN npm install

COPY . ./

CMD ["npm", "start"]

