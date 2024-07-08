FROM public.ecr.aws/docker/library/node:18.17.0-alpine as builder
WORKDIR /home/node/app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN chown -R node:node /home/node/app
RUN yarn install
COPY . .
# RUN yarn add sharp --ignore-engines
# RUN yarn install --ignore-engines
RUN yarn build
RUN rm -r node_modules
RUN yarn install --frozen-lockfile --production


FROM public.ecr.aws/docker/library/node:18-alpine as production
WORKDIR /home/node/app
COPY --from=builder /home/node/app ./
EXPOSE 3001
CMD ["node", "dist/main.js"]