# Membrace documentation

Welcome to the membrace.ai docs.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### First steps

You need to have [yarn](https://classic.yarnpkg.com/en/docs/install) or [npm](https://nodejs.org/en/) installed. In all commands below we use `yarn`, but you can use `npm` instead.

Clone this git repository to your computer and install all requirements:

```
git clone git@github.com:Membrace-ai/docs.git
cd docs
yarn install
```

### Build the docs locally

To build only current English version run this command:

```
yarn run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

To build all versions and languages run:

```
yarn run build
yarn run serve
```

### Deploy the docs to the production

If you have access to the deployment, checkout the branch you want to deploy and run:

```
git checkout master
git pull
USE_SSH=true yarn deploy
```

### Problems?

Read the [Docusaurus documentation](https://docusaurus.io/docs/).
