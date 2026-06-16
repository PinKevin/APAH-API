ARG NODE_IMAGE=node:lts-alpine

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init

RUN corepack enable && corepack prepare pnpm@latest --activate

RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
USER node
RUN mkdir tmp

FROM base AS dependencies

COPY --chown=node:node ./package.json ./pnpm-lock.yaml ./

RUN pnpm config set store-dir /home/node/.local/share/pnpm/store

RUN pnpm i --frozen-lockfile --ignore-scripts
COPY --chown=node:node . .

FROM dependencies AS build
RUN pnpm build

FROM base AS production
ARG ENV_FILE=.env

ENV NODE_ENV=production
ENV HOST=0.0.0.0
COPY --chown=node:node ./package.json ./pnpm-lock.yaml ./

RUN pnpm config set store-dir /home/node/.local/share/pnpm/store

RUN pnpm i --prod --frozen-lockfile --ignore-scripts
COPY --chown=node:node --from=build /home/node/app/build .

COPY --chown=node:node ${ENV_FILE} .env
RUN mkdir -p /home/node/app/storage && chown -R node:node /home/node/app/storage
EXPOSE ${PORT}
