# Base Node.js image for both building and serving
FROM node:18

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files
COPY . .

# Run tests
RUN npm test -- --watch=false

# Build the application
RUN npm run build --prod

# Expose the app
EXPOSE 4200

# Start the Angular app using npm
CMD ["npm", "start"]
