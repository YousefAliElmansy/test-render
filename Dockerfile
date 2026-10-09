# Multi-stage Dockerfile for NestJS + MongoDB

# Build Stage
FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json  ./

RUN npm ci

COPY . .

RUN npm run build


# Run stage

FROM node:24-alpine AS runner

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=build /app/dist ./dist 

EXPOSE 3000

ENV NODE_ENV=production
USER node

CMD ["node" , "dist/main.js"]


