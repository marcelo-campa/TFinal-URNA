FROM php:8.0-apache

RUN docker-php-ext-install mysqli

COPY /urna-eletronica /var/www/html/

ARG host
ENV HOST_MYSQL=${host}

ARG user
ENV USER_MYSQL=${user}

ARG pw
ENV PW_MYSQL=${pw}

ARG db
ENV DB_MYSQL=${db}

EXPOSE 80 443