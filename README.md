<p align="center"><img width="200" height="200" src="https://i.ibb.co/t4MDdkq/grandjs.png" alt="Grandjs logo"></p>

# Grandjs Swagger

A grandjs helper package for generating swagger documentation from json

# Content
[About](#about)
[Installing](#installing)
[Usage](#usage)
[Example](#example)
[Render Swagger Component](#render-swagger-component)
- [Rendering Example](#rendering-example)
# About
This package is developed for grandjs framework to allow you write swagger documentation for your Grandjs Application!



# Installing

Tou Install Grand-swagger you just need to write the following command!

```cmd
npm i grand-swagger
```

# Usage

Grand Swagger exposed to you a simple jsx component that you can use to render your swagger documentation easily!

## Example

```typescript
import {SwaggerComponent} from "grand-swagger";
```

## Render Swagger Component

To render Grand Swagger Component you can define a new route and in the handler you can use `res.render` to render this component, this component takes the following properties

|property|type|required|description|
|-|-|-|-|
|docs|object|true|this property is an object which implies your swagger documentation that you want to show|

### Rendering Example

```typescript
import {Server, Router} from "grandjs"
import {SwaggerComponent} from "grand-swagger";
import docs from "./doc.json";

class MainRouter extends Router{}

const mainRouter = new MainRouter({base: "/"});

mainRouter.addRoute({
    url: "/docs",
    method: "GET",
    handler: (req, res) => {
        res.render(SwaggerComponent, {docs: docs})
    }
})
```


