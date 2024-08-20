# Stage 1: Building the code

FROM node:20-slim as build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm instal

# Copy the environment files
COPY ./env/.env.dev ./env/.env.dev
COPY ./env/.env.prod ./env/.env.prod

# Bundle app source
COPY . .

# Build the project
RUN npm run build

# Stage 2: Run the app

FROM node:20-slim

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the production .env file to the production image
COPY --from=build /usr/src/app/env/.env.prod ./env/.env.prod

COPY --from=build /usr/src/app/env/.env.dev ./env/.env.dev

# Copy built assets from the build stage
COPY --from=build /usr/src/app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Run the web service on container startup
CMD ["node", "dist/src/main"]