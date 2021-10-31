# POC NodeJS Express

A project to create a best practice template for using nodejs in combination with typescript and express.

# Development

## Running

To run the application use `npm run start`
This command will use ts-node-dev to automatically watch and recompile by changes.

## Linting

Check code for syntax / style issues with `npm run lint`

## Building

To create a production build use `npm run build`.

## Api

This project contains a simple api via express.

This sections contains a list for all endpoints and the corresponding curl / httpie examples.

### Get remaining todos

```sh
# curl
curl http://localhost:3000/todos

# httpie
http http://localhost:3000/todos
```

### Note todo

```sh
# curl
curl -X POST -H 'content-type:application/json' -d '{"description":"Test 1"}' http://localhost:3000/note-todo

# httpie
echo '{"description":"Test 1"}' | http POST http://localhost:3000/note-todo
```

### Mark as done

```sh
# curl
curl -X POST  http://localhost:3000/mark-todo-as-done/<todo id>

# httpie
http POST http://localhost:3000/mark-todo-as-done/<todo id>
```

# Required VSCode extensions

This project requires the following VSCode extensions to work.

-   https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
-   https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
-   https://marketplace.visualstudio.com/items?itemName=humao.rest-client

# References

Some ressources i used to build this project.

-   https://www.youtube.com/watch?v=5s7eFzI_fNo&t=2019s
-   https://sequelize.org/
