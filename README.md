# Context
The majority of my projects require both connection to a database and authentication / authorisation features.
Each of my projects are a little different with their implementations of these features. The goal here is to align all my projects to a single, simple pattern.
my hope is that this also becomes useful for others facing similar problems.

## Nestjs
nestjs is a progressive node.js framework for building efficient and scalable server-side applications using typescript and is heavily inspired by angular.
[read more](https://docs.nestjs.com).

## Keycloak 
keycloak is an open source identity and access management solution.
[read more](https://www.keycloak.org).

## MongoDB
mongodb is an open-source cross-platform nosql database.
[read more](https://www.mongodb.com).

# Getting Started

## Installation

```bash
$ git clone https://github.com/tomjdickson/nestjs-api-boilerplate.git

$ cd nestjs-api-boilerplat

$ npm install

```


## Running the app

```bash

# development 
$ npm run start


# watch mode 
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running keycloak

```bash
$ npm run launch:keycloak
```

## Running mongodb

```bash
$ npm run launch:mongodb

```

## Testing the app

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
