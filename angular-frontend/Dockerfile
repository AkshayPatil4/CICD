# Base Node.js image for building
FROM node:18

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files
COPY . .

# Build the application
RUN npm run build --prod

# Expose the app
EXPOSE 4200

# Start the Angular app
CMD ["npm", "start"]
