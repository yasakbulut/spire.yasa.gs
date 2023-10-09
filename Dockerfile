FROM oven/bun

WORKDIR /app

COPY package.json ./
COPY bun.lockb ./

RUN bun install --frozen-lockfile

COPY src .

EXPOSE 8080
CMD ["bun", "index.ts"]