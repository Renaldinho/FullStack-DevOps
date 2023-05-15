FROM node:18.0 as node
WORKDIR /src
COPY . .
RUN npm ci
RUN npm run build --prod



FROM nginx:alpine

COPY --from=node /app/dist/full-stack /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
