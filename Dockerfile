FROM node:7.9 as build

WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app/
RUN npm run build


FROM nginx:alpine
COPY --from=build /app/dist/ /usr/share/nginx/html/