# Dockerfile for Node Express Frontend web
# Stage 1 - the build process
FROM node:lts-alpine as build-deps

USER root

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies 
COPY package.json yarn.lock ./
RUN yarn

# Copy app source code
COPY . .

# Build a production ready bundle
RUN yarn build


# Stage 2 - the production environment
FROM nginx:1.12-alpine

# Remove the default nginx configuration
RUN rm -rf /etc/nginx/conf.d

# Use our own nginx config
COPY .nginx /etc/nginx

# Copy built artifacts
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]