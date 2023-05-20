# Base image
FROM cypress:latest

# Set working directory
WORKDIR /app

# Copy test files
COPY . .

# Set environment variables
ENV CYPRESS_baseUrl=http://app:8000
CMD ["npm", "run", "e2e:headless"]
