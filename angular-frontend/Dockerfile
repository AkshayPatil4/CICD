# Use Node.js image to build Angular app
FROM node:18 as build-stage

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files and build the application
COPY . .
RUN npm run build --prod

# Include npm for testing
RUN apt-get update && apt-get install -y npm

# Serve Angular app using nginx
FROM nginx:1.23.3-alpine
COPY --from=build-stage /app/dist/angular-frontend /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
