# Build Stage
FROM node:18 as build-stage

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files
COPY . .

# Run tests


# Build the application
RUN npm run build --prod

# Production Stage
FROM nginx:1.23.3-alpine
COPY --from=build-stage /app/dist/angular-frontend /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
