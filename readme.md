# POC NodeJS Express

POC Projekt to try NodeJS with Express.

# Development

## Start application

```sh
npm run start
```

## Api Calls

```sh
curl http://localhost:3000/todos
```

### note-todo

```sh
curl -X POST -H 'content-type:application/json' -d '{"description":"Test 1"}' http://localhost:3000/note-todo
```

```sh
curl -X POST  http://localhost:3000/mark-todo-as-done/<todo id>
```

# References

-   https://www.youtube.com/watch?v=5s7eFzI_fNo&t=2019s
-   https://sequelize.org/
