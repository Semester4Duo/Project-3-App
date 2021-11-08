FROM node:17.0-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn global add @quasar/cli
COPY . .
FROM develop-stage as build-stage
RUN yarn
RUN quasar build -m pwa
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /app/dist/pwa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]