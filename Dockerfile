FROM oven/bun:1.1

WORKDIR /app

COPY . .

RUN bun install

RUN chmod +x docker-entrypoint.sh

EXPOSE 3000

CMD ["./docker-entrypoint.sh"]
