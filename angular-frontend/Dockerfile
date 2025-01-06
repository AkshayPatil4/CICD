FROM node:18

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Install Chrome for Karma tests
RUN apt-get update && apt-get install -y wget gnupg && \
    wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && apt-get install -y google-chrome-stable

# Set Chrome binary path for Karma
ENV CHROME_BIN=/usr/bin/google-chrome

# Copy source files
COPY . .

# Build the application
RUN npm run build --prod

# Expose the app
EXPOSE 4200

# Start the Angular app
CMD ["npm", "start"]
