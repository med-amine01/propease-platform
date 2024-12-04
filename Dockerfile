# Build Stage
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json /app/

# Install dependencies
RUN npm install --no-cache --legacy-peer-deps

# Copy the Angular project files
COPY . /app/

# Build the Angular project for production
RUN npm run build -- --configuration=production

# Runtime Stage
FROM nginx:alpine

# Copy Angular built files to Nginx HTML directory
COPY --from=builder /app/dist/propease-platform/browser /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
