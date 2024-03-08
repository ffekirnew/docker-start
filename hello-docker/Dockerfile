FROM python:alpine

RUN addgroup app && adduser -S -G app app
USER app

COPY . /app
WORKDIR /app

CMD ["python3", "main.py"]
