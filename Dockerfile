FROM php:8.0-apache

RUN docker-php-ext-install mysqli

COPY /urna-eletronica /var/www/html/

EXPOSE 80 443