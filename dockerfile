FROM node:22-alpine
WORKDIR /app
COPY  . .
RUN yarn install --frozen-lockfile && yarn cache clean
EXPOSE 4000
RUN yarn build