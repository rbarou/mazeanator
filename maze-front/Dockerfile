FROM node:18-alpine
WORKDIR /maze-front/

COPY public /maze-front/public
COPY src/ /maze-front/src
COPY package.json /maze-front/package.json
COPY package-lock.json /maze-front/package-lock.json

RUN npm install
RUN npm install react-scripts@latest --legacy-peer-deps

COPY . ./

CMD ["npm", "start"]

