FROM python:3.8
FROM alpine:latest

RUN apk add --no-cache python3-dev  
RUN apk add py3-pip
# RUN pip3 install pika==1.1.0
#RUN pip3 install pyzmq==19.0.1

WORKDIR /app
COPY . .
RUN pip --no-cache-dir install -r requirements.txt --ignore-installed six
EXPOSE 5000

ENTRYPOINT ["python3"]
CMD ["app.py"]
