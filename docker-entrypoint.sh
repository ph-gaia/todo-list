#!/bin/sh

echo "Running Prisma generate..."
bunx prisma generate

echo "Starting the server..."
bun run src/server.ts
