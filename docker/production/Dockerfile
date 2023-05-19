FROM node:18.10 as node
WORKDIR /src
COPY ../.. .
RUN npm ci --legacy-peer-deps
RUN npm run build --prod



FROM nginx:alpine

COPY --from=node /app/dist/full-stack /usr/share/nginx/html

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the nginx.conf file to the conf.d directory
COPY ../../nginx.conf /etc/nginx/conf.d/default.conf.template

# When the container starts, replace $PORT in nginx.conf with the actual environment variable value
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
