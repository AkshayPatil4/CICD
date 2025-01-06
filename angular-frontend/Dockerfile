FROM node:18 as build-stage

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build --prod

FROM nginx:1.23.3-alpine
COPY --from=build-stage /app/dist/angular-frontend /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
