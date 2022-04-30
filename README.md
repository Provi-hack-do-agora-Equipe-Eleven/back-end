# API Plástico Bolha

## Endpoints

---

## EndPoint: Get all projects:

`Request type:` **GET**

`Route:` **/projects**

### EndPoint Return

_Return a array with all projects, if dont have a project, this array will return a empty_

```json
[
  {
    "name": "Project 1",
    "address": "Rua 1"
  }
]
```

---

## EndPoint:  SignUp

`Request type:` **POST**

`Route:` **/sign-up**

_Body needed:_

```json
{
  "name": "Project 1",
  "password": "Rua 1"
}
```

___
## EndPoint para fazer login

`Request type:` **POST**

`Route:` **/login**

_Body needed:_

```json
{
  "name": "Project 1",
  "password": "Rua 1"
}
```
### EndPoint Return
_Return a object with token and user data_

```json
[
  {
    "token": "Project 1",
    "user": {
      "name": "Project 1",
      "password": "Rua 1"
    }
  }
]
```
___

## Editar usuário

`Request type:` **PUT**

`Route:` **/user/:id**

_Body Necessário:_

```json
{
  "name": "Project 1",
  "password": "Rua 1"
}
```
### EndPoint Return
_Return a object with user data edited_

```json
[
  {
    "name": "Projeto 2",
    "password": "xyzxyz"
  }
]
```
___

## EndPoint para criar projeto

`Requisição do tipo:` **POST**

`Rota:` **/project**

_Body Necessário:_

```json
{
  "name": "Project 1",
  "email":"email@email.com",
  "pix": "Rua 1",
  "address": {
      "city": "city",
      "state": "state",
      "street": "project address",
      "zipcode": "00000-000",
      "country": "Brazil",
      "complement":"complement"
  },
  "description": "About project",
  "instagram": "@projeto"
}
```
### EndPoint Return
_Retorna um objeto com dados do projeto criado_

```json
[
  {
    "name": "Projeto 2",
    "password": "xyzxyz"
  }
]
```
___

## EndPoint para editar projeto

`Requisição do tipo:` **PUT**

`Rota:` **/project/:id**

_Body Necessário:_

```json
{
  "name": "Project 1",
  "password": "Rua 1"
}
```
### EndPoint Return
_Retorna um objeto com novos dados do projeto_

```json
[
  {
    "name": "Projeto 2",
    "password": "xyzxyz"
  }
]
```
___

## EndPoint para deletar projeto

`Requisição do tipo:` **DELETE**

`Rota:` **/project/:id**

### Retorno do EndPoint
_Retorna uma mensagem_

```js
'Projeto deletado!'
```

___
## EndPoint para participar projeto

`Requisição do tipo:` **POST**

`Rota:` **/project/:id/participate**

_Body Necessário:_

```json
{
  "name": "Project 1",
  "email": "pessoa@pessoa",
  "telefone": "99999999"
}
```

### EndPoint Return
_Return a message_

```js
'Foi enviado um email para o projeto, aguarde que o projeto entrará em contato com você!'
```