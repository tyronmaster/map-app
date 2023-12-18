#stage 1 build
FROM node:alpine AS build
WORKDIR /usr/src/app/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

#stage2 run
FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/map-app /usr/share/nginx/html

EXPOSE 80
