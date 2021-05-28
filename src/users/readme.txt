Use this cli to auto create module [nest generate module ('name of the module')]
    The created module will be automatically imported in app.module.ts

Each module require 3 things: (module, service, and controller)
    nest generate controller users
    nest generate service users

Module: Special for each Database table

Service: Contains all the methods to execute certain command in the controller 

Controller: Perform CRUD operations with the methods provided inside the service file

DTO: (Data Transfer Object) use to define the data type you want to create with Post request

Entities: use to define the data type you want to return 

Swagger: Built in API tester, replace Postman and Insomnia 

Nest: 
    Built in exception handling
    Integrate with Swagger
    Integrate with Mongo
    Use Typescript
    Mirrors MVC pattern
    Built in validation pipe and data transform pipe (middleware) [npm install class-validator class-transformer]
    Auto generate module with cli command to cut down boilerplate [nest generate resource ('name of the module')]