# FROM node:14-buster

# #RUN npm install --build-from-source zeromq@6.0.0-beta.5 

# WORKDIR /app
# COPY . .

# CMD node hello-world/hello.js

# FROM ubuntu:14.04

# COPY index.html /var/www/html/

# RUN build -t my_html_file .
# docker run -p 80:80 my_html_file

FROM nginx:alpine
COPY . /usr/share/nginx/html

CMD [ "index.html" ]
