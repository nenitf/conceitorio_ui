# conceitorio_ui

[![emojicom](https://img.shields.io/badge/emojicom-%F0%9F%90%9B%20%F0%9F%86%95%20%F0%9F%92%AF%20%F0%9F%91%AE%20%F0%9F%86%98%20%F0%9F%92%A4-%23fff)](http://neni.dev/emojicom) [![CI](https://github.com/nenitf/conceitorio_ui/actions/workflows/ci.yml/badge.svg)](https://github.com/nenitf/conceitorio_ui/actions/workflows/ci.yml)

Interface da aplicação [Conceitorio](https://github.com/nenitf/conceitorio). [Demo](http://neni.dev/conceitorio_ui).

## Desenvolvimento

1. Inicie o ambiente 

```sh
docker-compose up -d
```

> Pare o ambiente com ``docker-compose down``

> Para comandos do yarn utilize ``docker-compose exec app yarn <complemento>``

2. Inicie o servidor

```sh
docker-compose exec app yarn start
```

3. Acesse `localhost:3000`

## Testes

### Unidade e integração

1. Inicie o ambiente 

```sh
docker-compose up -d
```

2. Execute os testes

```sh
docker-compose exec app yarn test
```

### End to end

1. Inicie o ambiente com a execução dos testes

```sh
docker-compose -f docker-compose-cy.yml up --abort-on-container-exit
```

> Caso alguma dependência tenha sido alterada utilize ``docker-compose -f docker-compose-cy.yml up --abort-on-container-exit --build``
