# egg3-backend.

Egg3 Backend

## Prerequisites

* * Step 1: Create a new slack app from a YAML app manifest

```yaml app manifest
display_information:
  name: Egg3 MJ Staging Bot
features:
  bot_user:
    display_name: Egg3 MJ Staging Bot
    always_online: true
  slash_commands:
    - command: /imagine
      url: https://slackbot-stg.egg3.io/slack/events
      description: Create  an image
      usage_hint: provide a prompt
      should_escape: false
    - command: /add-member
      url: https://slackbot-stg.egg3.io/slack/events
      description: Add member to project Egg3
      should_escape: false
oauth_config:
  redirect_urls:
    - https://stg.egg3.io/auth/slack
  scopes:
    user:
      - channels:read
      - channels:write
      - channels:write.invites
      - files:read
      - files:write
      - groups:read
      - groups:write
      - groups:write.invites
      - im:read
      - im:write
      - mpim:read
      - mpim:write
      - users:read
      - users:read.email
      - users.profile:read
    bot:
      - app_mentions:read
      - channels:join
      - channels:manage
      - channels:read
      - channels:write.invites
      - chat:write
      - commands
      - conversations.connect:write
      - files:read
      - files:write
      - groups:read
      - groups:write
      - groups:write.invites
      - im:write
      - mpim:read
      - mpim:write
      - reactions:read
      - users.profile:read
      - users:read
      - users:read.email
      - team:read
settings:
  event_subscriptions:
    request_url: https://slackbot-stg.egg3.io/slack/events
    bot_events:
      - reaction_added
  interactivity:
    is_enabled: true
    request_url: https://slackbot-stg.egg3.io/slack/events
  org_deploy_enabled: false
  socket_mode_enabled: false
  token_rotation_enabled: false
```
- Explain the fields of a YAML manifest file
  - name: The name of the slack app
  - display_name: The display name of the slack app
  - command: Command of the slack app
  - url: The URL for Slack to send events command to the app.This domain is formed by the Slack bot server domain + slack/events.
  - oauth_config/redirect_urls: Redirect URL for authentication when connecting Slack. This domain is formed by the front end domain + auth/slack
  - settings/event_subscriptions/request_url: The URL for Slack to send events to the app.This domain is formed by the Slack bot server domain + slack/events.
  - settings/interactivity/request_url: The URL for Slack to send interactivity to the app.This domain is formed by the Slack bot server domain + slack/events.

* * Step 2: Install your app to your Slack workspace 

* * Step 3: Distribute app

* * Step 4: Create App token (Basic Information) with full scope

* * Step 5: Create a google authentication app with the following url
    - Google console url: https://console.cloud.google.com/apis/credentials/

* * Step 6: Register a Imagga account

* * Step 7: Joining the system's Discord accounts to the server and channel that are used for generating images.

* * Step 8: Config the system's email for sending mail 

* * Using node 20



## Running the app in the first time

```bash
$ touch .env
$ cp .env.example .env
```
### Setting up .env

MYSQL_ : The environment variables setting for the master database 

REPORT_MYSQL_: The environment variables setting for slave database 

REDIS_ : The environment variables setting for redis

GOOGLE_CLIENT_: The environment variables setting for the google authentication feature

KAFKA_BROKERS: Kafka host

SLACK_BOT_TOKEN: The bot token of the slack app

BASE_SLACK_API_URL: The domain of the slack api

AWS_S3_ : The environment variables setting for storing images on the cloud service

MAIL_ : The environment variable settings for sending emails from the Egg3 system

FE_WEB_URL: The frontend domain

APP_DOMAIN: The backend domain

SLACK_CLIENT_ID: The client id of the slack app

SLACK_CLIENT_SECRET: The client secret of the slack app

IMAGGA_API_: The environment variables setting for generating tags

SERVER_ID: Server discord use for generating images

CHANNEL_ID: Channel discord use for generating images

CRAWL_DISCORD_DAY: The number of days prior to crawl images from Discord when a user enters a Discord token.

ADMIN_FE_WEB_URL: The domain of the admin site

AWS_CLOUDFRONT_URL: CDN domain
```

$ npm install --legacy-peer-deps
$ docker-compose up -d
```
## Run local

npm run start:dev

## Migration:

See in [link](MIGRATION.md)
## Test:
Run test:
* * Test all
```bash
$ docker-compose up -d
$ yarn test
```
* * Test specify file
```bash
$ docker-compose up -d
$ yarn test -- test_file_name
```

## Environment

Powered by [Nest](https://github.com/nestjs/nest)

- Node: v20
- Yarn: v1.22.22

## Coding conventions

- Using space (not tab)
- Using absolute path: config in vscode: open settings.json -> setting
  ```
    "javascript.preferences.importModuleSpecifier": "non-relative",
    "typescript.preferences.importModuleSpecifier": "non-relative"
  ```
- RESTful API:
  - https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/
  - https://betterprogramming.pub/22-best-practices-to-take-your-api-design-skills-to-the-next-level-65569b200b9
- Filename and URL path: using `-` as separator
- Name of file and class must use singular noun. Avoid using plural noun. Plural is used only with array of data.
- Avoid using `any` in `typescript` as much as possible
- Avoid `SELECT *` in `sql` query
- Except `entity.ts`, others should be named as plural (E.g: `orders.service.ts`, NOT `order.service.ts`)
- Code comment: prefer self-explanatory code, should comment at class and function level
- Columns in entity follow by camel case.
- Tables name in database follow plural noun.
- Using connection: report for read, master for write.
- Commit Convention: see in [link](CommitConversion.md)

## Some techniques

- Must read documentations: https://docs.nestjs.com/first-steps. Specially https://docs.nestjs.com/modules
- Hidden secret fields: https://docs.nestjs.com/techniques/serialization
- Database transaction: https://docs.nestjs.com/techniques/database#transactions
- Cron: https://docs.nestjs.com/techniques/task-scheduling. For catching error in cron, can
  try https://stackoverflow.com/questions/60402716/nestjs-handle-service-exceptions


### Some useful commands

- sudo chown -R 1001:1001 .docker/kafka/
