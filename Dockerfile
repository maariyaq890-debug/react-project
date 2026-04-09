# Use node
FROM node:20

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./

# Install deps
RUN npm install

# Copy all code
COPY . .

# Build app
RUN npm run build

# Install serve
RUN npm install -g serve

# Start app
CMD ["serve", "-s", "dist", "-l", "3000"]
