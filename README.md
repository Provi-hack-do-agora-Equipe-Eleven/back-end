# API Plástico Bolha

## Endpoints

---

## EndPoint: All projects

`Request type:` **GET**

`Route:` **/projects**

`Example:` **localhost:3000/projects**

### EndPoint Return

_Returns an object **projects** with an array of projects, if don't have a project, this object will returns an empty array_

```json
{
  "projects": [
    {
      "name": "Project 1",
      "description": "About project",
      "city": "City",
      "state": "State",
      "country": "Brazil"
    }
  ]
}
```

---

## EndPoint: SignUp

`Request type:` **POST**

`Route:` **/sign-up**

`Example:` **localhost:3000/sign-up**

### Body needed:

```json
{
  "name": "Project 1",
  "password": "Rua 1"
}
```

---

## EndPoint: Login

`Request type:` **POST**

`Route:` **/login**

`Example:` **localhost:3000/login**

### Body needed:

```json
{
  "name": "Project 1",
  "password": "Rua 1"
}
```

### EndPoint Return

_Returns an object with token and user data_

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

---

## Editar usuário

`Request type:` **PUT**

`Route:` **/user/:id**

### Body Needed:

```json
{
  "name": "Project 1",
  "password": "Rua 1"
}
```

### EndPoint Return

_Returns an object with user data edited_

```json
[
  {
    "name": "Projeto 2",
    "password": "xyzxyz"
  }
]
```

---
## EndPoint: Get User Projects

`Request type:` **GET**

`Route:` **/projects/:id**

`Example:` **localhost:3000/projects/11**

### EndPoint Return

_Returns an object **projects** with an array of projects, if don't have a project, this object will returns an empty array_

```json
{
  "projects": [
    {
      "name": "Project 1",
      "description": "About project",
      "city": "City",
      "state": "State",
      "country": "Brazil"
    }
  ]
}
```

---
## EndPoint: Create project

`Request Type:` **POST**

`Route:` **/project**

`Example:` **localhost:3000/project**

### Body Needed:

```json
{
  "name": "Project 1",
  "email": "email@email.com",
  "owner_name": "Owner",
  "owner_email": "owner@owner.com",
  "description": "About project",
  "created_at": "2002-12-03",
  "modified_at": "2002-12-03",
  "project_image": "project.png",
  //Optional
  "website": "www.project.com",
  "instagram": "@project",
  "cnpj": "1234567890",
  "pix": "email@email.com",
  //
  "address": {
    "city": "City",
    "state": "State",
    "country": "Brazil",
    "zipcode": "00000000",
    // Optional
    "street": "Street",
    "complement": "Complement"
    //
  }
}
```

### EndPoint Return

_Returns an object **project** with project details_

```json
{
  "project": {
    "name": "Project 1",
    "description": "About project",
    "city": "City",
    "state": "State",
    "country": "Brazil"
  }
}
```

---

## EndPoint: Edit project

`Request type:` **PUT**

`Route:` **/project/:id**

`Example:` **localhost:3000/project/11**

### Body Needed:

_Obs: All fields are optional, but one is required to edit a project_

```json
{
  //Optional
  "name": "Project 1",
  "email": "email@email.com",
  "owner_name": "Owner",
  "owner_email": "owner@owner.com",
  "description": "About project",
  "created_at": "2002-12-03",
  "modified_at": "2002-12-03",
  "project_image": "project.png",
  "website": "www.project.com",
  "instagram": "@project",
  "cnpj": "1234567890",
  "pix": "email@email.com",
  "address": {
    "city": "City",
    "state": "State",
    "country": "Brazil",
    "zipcode": "00000000",
    "street": "Street",
    "complement": "Complement"
  }
  //
}
```

### EndPoint Return

_Returns an object with all project data(old and new)_

```json
[
  {
    "name": "Projeto 2",
    "password": "xyzxyz"
  }
]
```

---

## EndPoint: Delete Project

`Request type:` **DELETE**

`Route:` **/project/:id**

`Example:` **localhost:3000/project/11**

### EndPoint Return

_Returns a message_

```js
"Projeto deletado!";
```

---

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
"Foi enviado um email para o projeto, aguarde que o projeto entrará em contato com você!";
```
