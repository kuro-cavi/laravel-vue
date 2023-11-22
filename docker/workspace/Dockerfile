FROM node:16.15.0 as node
FROM composer:2.6.5 as composer
FROM php:8.0-fpm

# Install Required Tools
RUN apt-get update && apt-get install -y \
    libfreetype6-dev libjpeg62-turbo-dev \
    libpng-dev libicu-dev zlib1g-dev libzip-dev \
    git unzip \
  && docker-php-ext-install zip pdo_mysql bcmath mysqli

# Install Composer
COPY --from=composer /usr/bin/composer /usr/bin/composer

# Install Node
COPY --from=node /usr/local/bin/node /usr/local/bin/
COPY --from=node /usr/local/lib/node_modules/ /usr/local/lib/node_modules/
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm
RUN ln -s /usr/local/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx

# Install Redis
RUN pecl install redis \
	&& docker-php-ext-enable redis

# xDebug
RUN pecl install xdebug \
  && docker-php-ext-enable xdebug

WORKDIR /var/www/webserver
