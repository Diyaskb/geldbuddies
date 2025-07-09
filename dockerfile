FROM node:20

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

# Zorg dat DATABASE_URL beschikbaar is tijdens build én runtime
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
