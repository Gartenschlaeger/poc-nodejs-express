# POC NodeJS Express

POC Projekt to try NodeJS with Express.

# Development

## Running the application

```sh
npm run start
```

## Api

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

-   https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
-   https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

# References

-   https://www.youtube.com/watch?v=5s7eFzI_fNo&t=2019s
-   https://sequelize.org/
