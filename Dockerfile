FROM node:lts-alpine3.11 as build
COPY / /app
WORKDIR app
RUN npm install
RUN npm run build

FROM nginx:1.17.8-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
