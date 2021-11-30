# europeanimpacthub.nl

## Environment Setup

```bash
# copy sample of environment
$ cp .env.example .env
```
1. Login into Storyblok
2. Choose cmd-denhaag.nl as space

3. Go to Settings > API-Keys

4. Copy preview token or create a token

5. Edit the .env file and set token for ``STORYBLOK_SPACE_TOKEN=TOKEN_HERE``

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
