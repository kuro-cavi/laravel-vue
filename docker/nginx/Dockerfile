FROM nginx:1.21.6

COPY nginx.conf /etc/nginx/
COPY webhost.conf /etc/nginx/conf.d/
RUN rm -f /etc/nginx/conf.d/default.conf
