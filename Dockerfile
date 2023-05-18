FROM node:18.10 as node
WORKDIR /src
COPY . .
RUN npm ci --legacy-peer-deps
RUN npm run build --prod



FROM nginx:alpine

COPY --from=node /app/dist/full-stack /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
