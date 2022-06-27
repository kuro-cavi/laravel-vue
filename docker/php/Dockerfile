FROM php:8.0-fpm

COPY --from=composer:2.0 /usr/bin/composer /usr/bin/composer

# update
RUN apt-get update \
  && apt-get install -y unzip libzip-dev libicu-dev libonig-dev \
  && docker-php-ext-install zip pdo_mysql bcmath

# xDebug
RUN pecl install xdebug \
  && docker-php-ext-enable xdebug

WORKDIR /var/www/webserver
