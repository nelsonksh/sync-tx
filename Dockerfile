# Use official Node.js image
FROM node:20-slim

# Install OpenSSL and dependencies
RUN apt-get update -y && \
    apt-get install -y openssl libssl-dev && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@10.7.0 --activate

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy the rest of the application
COPY . .

RUN pnpm run db:update

# Set the default command
ENTRYPOINT ["pnpm", "run", "dev"]
