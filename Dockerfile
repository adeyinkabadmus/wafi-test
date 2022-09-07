FROM node:14.17.6-alpine

WORKDIR /app
#ENV NODE_ENV=development

RUN npm install -g nodemon
#RUN npm install -g yarn --force
RUN apk --no-cache add --virtual builds-deps build-base python

COPY package.json ./

RUN npm install --silent

# Bundle app source
COPY . .

#EXPOSE 3000

CMD ["node", "index.js"]

# CMD [ "npm", "start" ]