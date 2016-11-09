# blog development

## Initialization (fixtures.js files on both server and client root dirs)


On starting meteor two test users will be created: 
+  'test-user'/'test-user' a general user with role 'other'
+  'blog-admin'/'blog-admin' an admin user with role 'admin' that allows it to submmit blog posts


Five *dummy* blog posts will also be created to test the search and markdown syntax functionalities


## Dependencies


*  uniforms and uniforms-bootstrap (autoforms with handled validation)
*  simple-schema (form input and publication params validations)
*  validated-methos (validation of method input)
*  session (global reactive variables)
*  accounts (authentication)
*  roles (adds roles to meteor users collection)
*  bootstrap (simple styling and layout)


#### Note: Session variables could be easily externalized when incorporating blog on broader application (i.e. Redux)

